import React from "react";
import { 
    StyleSheet,
    ScrollView,
    SafeAreaView,
    View,
    Text
} from "react-native";
import '../globals';
import { WebView } from "react-native-webview";
import ConsulenzaBar from "../components/utils/components/ConsulenzaBar";
import CustomBottomToolbar from "../components/utils/components/CustomBottomToolbar";

const JustScaff = () => {
    return <>
            <WebView
                //source={{uri:BASE_URL+'/justscaff'}}
                source={{uri:'https://www.condor-group.it/justscaff'}}
            />
            <ConsulenzaBar/>
            <CustomBottomToolbar/>
        </>;

}


const styles = StyleSheet.create({
    viewStyle: {
        marginBottom:14
    },
    emptySpace: {
        height:70
    },
});

export default JustScaff;