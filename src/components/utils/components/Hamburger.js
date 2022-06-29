import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable,Image }from 'react-native';



const Hamburger = () => {
    const navigation = useNavigation();
    return( 
    <Pressable onPress={() =>  {
        navigation.navigate('Menu')
    }
    }>
        <Image
        source={require('../../../img/hamburger.png')}
        resizeMode='contain'
        style={{marginRight:15}}
        />
    </Pressable>);

}

export default Hamburger;



