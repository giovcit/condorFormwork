import React from "react";
import { Pressable,Image }from 'react-native';



const Menu = ({navigation}) => {
    return( 
    <Pressable onPress={() => console.log('ciao')}>
        <Image
        source={require('../../../img/hamburger.png')}
        style={{marginRight:15}}
        />
    </Pressable>);

}

export default Menu;



