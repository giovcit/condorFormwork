import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { 
    SafeAreaView,
    View,
    ImageBackground,
    StyleSheet,
    Pressable,
    Text,
    Image,
    Dimensions
 } from "react-native";
import { setCurrentScreen } from "../redux/actions";
import { Colors } from "../components/utils";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Fonts from "../components/utils/components/Fonts";

const win = Dimensions.get('window');
const innerSpaceCard = win.width-60;

const Cerca = () => {
    const dispatch = useDispatch();
    dispatch(setCurrentScreen('Menu'));
    const [cercaString,setCercaString] = useState('');
    const navigation = useNavigation();
    
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <ImageBackground source={require('../img/fondoMenu.png')} resizeMode='cover' style={styles.backgroundStyle}>
            <View style={styles.fakeBar}>
              <Text style={styles.headerSearch}>Cerca</Text>
              <Pressable onPress={() => navigation.goBack() }><Image resizeMode="contain" style={styles.closeWhite} source={require('../img/icon-close.png')}/></Pressable>
            </View>
            <ScrollView style={styles.containerSearch}>
            <TextInput
              style={styles.inputCerca}
              placeholder="Costa stai cercando?"
              onChangeText={(value) => {
                setCercaString(value);
              }}
              onSubmitEditing={() => navigation.navigate('CercaList',{
                cercaString:cercaString
              })}
            />
            </ScrollView>
          
          </ImageBackground>
        </View>
      </SafeAreaView> 
    );
}



const styles = StyleSheet.create({
    backgroundStyle: {
      flex:1,
      backgroundColor:Colors.redCondor,
      paddingTop:10,
      paddingLeft:10,
      paddingRight:10,
    },
    fakeBar:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:win.width-10
    },
    container: {
      flex:1,
    },
    headerSearch:{
        width:win.width/2.2,
        marginLeft:win.width/4,
        padding:10,
        color:'white',
        fontSize:Fonts.titleFont,
        fontFamily:'SybillaPro-Bold',
        textAlign:'center'
    },
    inputCerca:{
      backgroundColor:'white',
      textAlign:'center',
      width:innerSpaceCard,
      alignSelf:'center',
      marginTop:win.height/4.5,
      elevation:5,
      shadowColor:'black',
      shadowOffset:20,
    },
    containerSearch:{
      
    },
    closeWhite:{
      width:22,
      height:22,
      marginRight:10,
      marginTop:20
    }
    
    
  });

export default Cerca;