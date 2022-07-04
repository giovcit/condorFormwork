import React from "react";
import { View, Text } from "react-native";
//import for the animation of Collapse and Expand
import * as Animatable from 'react-native-animatable';

//import for the collapsible/Expandable view
import Collapsible from 'react-native-collapsible';

//import for the Accordion view
import Accordion from 'react-native-collapsible/Accordion';


const renderTab = (tab) => {

}

const InfoTab = ({props}) => {
    console.log('INFO TAB: '+JSON.stringify(props)) ;
    return <View>
        <Text>InfoTab</Text>
    </View>;
}


export default InfoTab;