import React,{useCallback} from "react";
import { 
    Image,
    Pressable,
    View,
    StyleSheet,
    Linking
} from "react-native";

const data = [
    {
        title:'facebook',
        applink:'',
        weblink:'',
        icon:require(),
    },
];

const createSocial = () => {
    let social = [];
    for (var item in data){
      let {title,link,icon } = data[item];
      social.push(<Pressable key={title}
        style={styles.menuItem}
        onPress={handlePress}>
            <Image resizeMode="cover"/>
        </Pressable>
        );
        if ( type === 'secondary' && firstSubCase) firstSubCase = false;
    }
    
  
    return menu;
  }



const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

};



const SocialBar = () => {

    return <View>
        
    </View>;


}


const styles = StyleSheet.create({

});


export default SocialBar;