import React,{ useEffect, useRef } from "react";
import Colors from "./Colors";
import { Dimensions,
        StyleSheet,
        Image, 
        Animated,
        View,
        Text
} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Fonts from "./Fonts";

const win = Dimensions.get('window');

const data = {
    it:'Chiedi ad un consulente',
    en:'Ask a Consultant',
    fr:'Demandez à un conseiller',
    es:'Pregunte a un consultor'
}
  

const ConsulenzaBar = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();
    const { currentLang } =  useSelector(state => state.CoReducer);

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
            navigation.navigate('Consulenza');
        }}>
            <View style={styles.consulenzaBar}>
            <Image style={styles.iconRichiedi} resizeMode="contain"  source={require('../../../img/iconRichiedi.png')}></Image>
            <Text style={styles.textRichiedi}>{data[currentLang]}</Text>
            </View>
        </Pressable>
    </Animated.View>
    </SafeAreaView>
    </>;
}



const innerSpaceCard = win.width-36;

const styles = StyleSheet.create({
    consulenzaArea:{
        backgroundColor:'transparent',
        position:'absolute',
        bottom:80,
        transition: 'opacity 1s ease',
        alignItems:'center',
        width:win.width
    },
    iconRichiedi:{
        width:30,
        height:30
    },
    consulenzaPress:{
        backgroundColor:Colors.redCondor,
        width:innerSpaceCard,
        alignSelf:'center'
        
    },
    textRichiedi: {
        color:'white',
        fontFamily:'SybillaPro-Bold',
        fontSize:20,
        marginLeft:10,
    },
    consulenzaBar: {
        width:win.width,
        height:60,
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:15,
        backgroundColor:'rgba(0,0,0,0)',
        flexDirection:'row',
        alignItems:'center'

    }
});

export default ConsulenzaBar;


