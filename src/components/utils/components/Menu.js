import React from "react";
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
import { setCurrentScreen } from "../../../redux/actions";
import Colors from "./Colors";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import SocialBar from "./SocialBar";
import Fonts from "./Fonts";


const win = Dimensions.get('window');

const data = [
    {
        title: 'Benvenuto',
        component:'Home',
        type:'primary'
    },
    {
        title: 'Soluzioni',
        component:'CardList',
        type:'primary'
    },
    {
        title: 'Progetti',
        component:'Progetti',
        type:'primary'
    },
    {
        title: 'Azienda',
        component:'Azienda',
        type:'primary'
    },
    {
        title: 'Consulenza',
        component:'Consulenza',
        type:'primary'
    },
    {
        title: 'JustScaff',
        component:'JustScaff',
        type:'primary'
    },
    {
        title: 'Realtà Aumentata',
        component:'AR',
        type:'primary'
    },
    {
      title: 'Blog',
      component:'Blog',
      type:'secondary'
    },
    {
      title: 'Contatti',
      component:'Contatti',
      type:'secondary'
    },
    {
      title: 'Selezione Lingua',
      component:'Lang',
      type:'secondary'
    },
  ]; 

  


  const createMenu = (navigation) => {
    let menu = [];
    var firstSubCase = true;
    var lastSubCase = false;
    for (var item in data){
      let {title,component,type } = data[item];
      if (item == data.length-1) { lastSubCase = true;}
      var itemStyle = styles.textItem;

      if (type === 'secondary') {
        if (firstSubCase){
          itemStyle = styles.firstSubItem;
        }else if (!firstSubCase && !lastSubCase){
          itemStyle = styles.textSubItem;
        }else if (!firstSubCase && lastSubCase){
          itemStyle = styles.lastSubItem;
        }
      }
    

      
      menu.push(<Pressable key={title}
        style={styles.menuItem}
        onPress={() =>{
          navigation.replace(component,{
            lang:'it'
          })}
          }>
          { <Text style={itemStyle}>{title}</Text> }
        </Pressable>
        );
        if ( type === 'secondary' && firstSubCase) firstSubCase = false;
    }
    
  
    return menu;
  }






const Menu = () => {
    const dispatch = useDispatch();
    dispatch(setCurrentScreen('Menu'));
    const navigation = useNavigation();
    
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <ImageBackground source={require('../../../img/fondoMenu.png')} resizeMode='cover' style={styles.backgroundStyle}>
            <View style={styles.fakeBar}>
                <Image resizeMode="contain" style={styles.logoWhite} source={require('../../../img/logoWhite.png')}/>
                <Pressable onPress={() => navigation.goBack() }><Image resizeMode="contain" style={styles.closeWhite} source={require('../../../img/icon-close.png')}/></Pressable>
            </View>
            <ScrollView>
            {createMenu(navigation)}
            <SocialBar/>
            </ScrollView>
          
          </ImageBackground>
        </View>
      </SafeAreaView> 
    );
}



const secondaryItem = {
  color:'white',
  fontSize:18,
  paddingTop:10,
  paddingBottom:10,
  borderBottomColor:'#740008',
  borderBottomWidth:1,
  width:win.width-60,
  fontFamily:'OpenSans-Regular',
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
    menuItem: {
        paddingLeft:20,
        paddingRight:20,
    },
    logoWhite:{
        width:win.width/2.2,
        marginLeft:win.width/4,
        padding:10
    },
    closeWhite:{
      width:22,
      height:22,
      marginRight:10,
      marginTop:20
    },
    textItem:{
      color:'white',
      fontFamily:'SybillaPro-Bold',
      fontSize:Fonts.titleFont+5,
      marginTop:12,

    },
    textSubItem:{
    ...secondaryItem
    },
    firstSubItem:{
      ...secondaryItem,
      marginTop:30,

    },
    lastSubItem:{
      ...secondaryItem,
      borderBottomColor:'rgba(0,0,0,0)'
    }
    
    
  });

export default Menu;