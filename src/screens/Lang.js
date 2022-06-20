import React, { useState } from 'react'
import { Button,
         Text, 
         StyleSheet,
         ImageBackground,
         Image,
         View,
         SafeAreaView,
         StatusBar,
         Pressable
        } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

const lang = {
  it:{
    title:'Italiano',
    imageSource:require('../img/it.png'),
    reference:'it'
  },
  en:{
    title:'English',
    imageSource:require('../img/en.png'),
    reference:'en',
  },
  fr: {
    title:'Francais',
    imageSource:require('../img/fr.png'),
    reference:'fr'
  },
  es: {
    title:'Espanol',
    imageSource:require('../img/es.png'),
    reference:'es'
  }
}

const createLang = (navigate) => {
  let menuLang = [];
  for (var l in lang){
    let {title,imageSource,reference} = lang[l];
    menuLang.push(<Pressable key={l}
      style={styles.changeLang}
      onPress={() =>
        navigate('Home',{
          lang:reference
        })
        }
      onPressIn={() => {}}>
        <Image source={imageSource}></Image>
        <Text style={styles.textLang}>{title}</Text>
      </Pressable>);
  }

  return menuLang;
}


const Lang = ({navigation:{ navigate }}) => {



  SplashScreen.hide();
  createLang();

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <ImageBackground source={require('../img/fondoCondor.png')} resizeMode='cover' style={styles.backgroundStyle}>
          {/* <Text>Lingua</Text> */}
            {/* <Pressable
              style={styles.changeLang}
              title="Italiano"
              onPress={() =>
              navigate('Home')
              }
            /> */}


            {

            }
          {createLang(navigate)}        
          </ImageBackground>
        </View>
      </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex:1,
    justifyContent:'center'
  },
  container: {
    flex:1
  },
  changeLang: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 22,
    paddingHorizontal: 32,
    backgroundColor: 'transparent',
  },
  langPressed: {
    backgroundColor:'black'
  },
  textLang:{
    color:'white',
    fontWeight:'300'
  }
  
  
});

export default Lang;