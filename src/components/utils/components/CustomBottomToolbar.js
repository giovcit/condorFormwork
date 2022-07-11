import React from "react";
import { 
  Image,
  Text, 
  StyleSheet, 
  ImageBackground,
  View
} from "react-native";
import { Dimensions } from "react-native";
import BottomToolbar from 'react-native-bottom-toolbar';
import { useNavigation } from '@react-navigation/native';


const win = Dimensions.get('window');
const ratio = win.width / 200;

const CustomBottomToolbar = () => {
  const navigation = useNavigation();    

    return <BottomToolbar 
    wrapperStyle={styles.toolBar}
    >
    <BottomToolbar.Action
      title="Home"
      
      IconElement={<><Image resizeMode="contain" style={styles.tbAction} source={require('../../../img/tb-home.png')}/><Text style={styles.tbText}>Home</Text></>}
      onPress={() =>
        navigation.navigate('Home',{
          lang:'it'
        })
      }
    />
    <BottomToolbar.Action
      title="Cerca"
      
      IconElement={<><Image resizeMode="cover" style={styles.tbAction} source={require('../../../img/tb-cerca.png')}/><Text style={styles.tbText}>Cerca</Text></>}
      onPress={() =>
        navigation.navigate('Cerca')
        }
    />
    <BottomToolbar.Action
      title="Soluzioni"
      
      IconElement={<><Image resizeMode="cover" style={styles.tbAction} source={require('../../../img/tb-soluzioni.png')}/><Text style={styles.tbText}>Soluzioni</Text></>}
      onPress={() =>
        navigation.navigate('CardList',{
          lang:'it',
          case:'soluzioni'
        })
        }
    />
    <BottomToolbar.Action
      title="AR"
      
      IconElement={<><Image resizeMode="cover" style={styles.tbAction} source={require('../../../img/tb-ar.png')}/><Text style={styles.tbText}>AR</Text></>}
      onPress={(index, propsOfThisAction) =>
        console.warn(index + ' ' + JSON.stringify(propsOfThisAction))}
    />
    <BottomToolbar.Action
      title="JustScaff"
      
      IconElement={<><Image resizeMode="cover" style={styles.tbAction} source={require('../../../img/tb-justscaff.png')}/><Text style={styles.tbText}>JustScaff</Text></>}
      onPress={() =>
        navigation.navigate('JustScaff',{
          lang:'it',
        })
        }
    />
    
    
  
  </BottomToolbar>;

}

const styles = StyleSheet.create({
  toolBar: {
    backgroundColor:'white',
    paddingTop:15,
    paddingBottom:20,
    height:65,
    paddingLeft:15,
    paddingRight:15,
  },
  tbAction: {
    width:23,
    alignSelf:'center',
    height:23,
  },
  tbText:{
    textAlign:'center',
    fontSize:10,
    marginTop:3,
    textAlign:'center',
    fontFamily:'OpenSans-Medium'
  }


});


export default CustomBottomToolbar;


