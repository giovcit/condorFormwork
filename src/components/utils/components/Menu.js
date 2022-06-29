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
        component:'CardList',
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
        component:'AR ',
        type:'primary'
    },
    {
      title: 'Blog',
      component:'Blog ',
      type:'secondary'
    },
    {
      title: 'Contatti',
      component:'Contatti ',
      type:'secondary'
    },
    {
      title: 'Selezione Lingua',
      component:'Lang ',
      type:'secondary'
    },

    
  ]; 

  


  const createMenu = (navigate) => {
    let menu = [];
    var firstSubCase = true;
    for (var item in data){
      let {title,component,type } = data[item];
      menu.push(<Pressable key={title}
        style={styles.menuItem}
        onPress={() =>
          navigate(component,{
            lang:'it'
          })
          }>
            { type === 'primary' ?  <Text style={styles.textItem}>{title}</Text> : <></>  }
            { type === 'secondary' && firstSubCase ? <Text style={{...styles.textSubItem,marginTop:30}}>{title}</Text> : <></>}
            { type === 'secondary' && !firstSubCase ? <Text style={styles.textSubItem}>{title}</Text> : <></>}
            
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
          {createMenu(navigation.navigate)}
          </ImageBackground>
        </View>
      </SafeAreaView> 
    );
}


const styles = StyleSheet.create({
    backgroundStyle: {
      flex:1,
      backgroundColor:Colors.redCondor,
      paddingTop:10
    },
    fakeBar:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:win.width
    },
    container: {
      flex:1,
    },
    menuItem: {
        paddingLeft:20,
        paddingRight:20,
    },
    logoWhite:{
        width:win.width/2,
        marginLeft:win.width/4,
        
    },
    closeWhite:{
      width:22,
      height:22,
      marginRight:10,
      marginTop:20
    },
    textItem:{
      color:'white',
      fontWeight:'300',
      fontSize:32

    },
    textSubItem:{
      color:'white',
      fontWeight:'300',
      fontSize:18,
      paddingTop:10,
      paddingBottom:10,
      borderBottomColor:'#740008',
      borderBottomWidth:1,
      width:win.width-40

    }
    
    
  });

export default Menu;