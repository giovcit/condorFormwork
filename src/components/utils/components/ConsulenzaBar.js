import React,{ useEffect, useRef } from "react";
import Colors from "./Colors";
import { Dimensions,
        StyleSheet,
        Image, 
        Animated,
        View
} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const win = Dimensions.get('window');

  
  

const ConsulenzaBar = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000
        }).start();    
        }, 1000)
    },[])


    return <>
    <SafeAreaView style={styles.consulenzaArea}>
    <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim
          }
        ]}
      >
        <Pressable style={styles.consulenzaPress} onPress={() => {
            navigation.navigate('CardList',{
                lang:'it'
            })
        }}>
            <Image resizeMode="contain" style={styles.consulenzaBar} source={require('../../../img/float-consulente.png')}></Image>
        </Pressable>
    </Animated.View>
    </SafeAreaView>
    </>;
}






const styles = StyleSheet.create({
    consulenzaArea:{
        backgroundColor:'transparent',
        position:'absolute',
        bottom:40,
        transition: 'opacity 1s ease',
    },
    consulenzaPress:{
        backgroundColor:'rgba(0,0,0,0)',
    },
    consulenzaBar: {
        width:win.width,
        justifyContent:'center',
        height:win.width/3,
        backgroundColor:'rgba(0,0,0,0)'

    }
});

export default ConsulenzaBar;


