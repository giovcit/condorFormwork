import React,{useCallback} from "react";
import { 
    Image,
    Pressable,
    View,
    StyleSheet,
    Linking,
    Text
} from "react-native";

const data = [
    {
        title:'linkedin',
        applink:'',
        weblink:'https://www.linkedin.com/companies/condor-group-s.p.a.',
        icon:require('../../../img/ln-social.png'),
    },
    {
      title:'facebook',
      applink:'',
      weblink:'https://www.facebook.com/condorcasseforme',
      icon:require('../../../img/fb-social.png'),
    },
    {
      title:'instagram',
      applink:'',
      weblink:'https://instagram.com/condorscaform',
      icon:require('../../../img/insta-social.png'),
    },
    {
      title:'youtube',
      applink:'',
      weblink:'https://www.youtube.com/user/condorspa',
      icon:require('../../../img/yt-social.png'),
    },
];

const createSocial = () => {
    let social = [];
    for (var item in data){
      let {title,applink,weblink,icon } = data[item];
      social.push(<Pressable key={title}
        style={styles.menuItem}
        onPress={() => OpenURLButton({applink,weblink})}>
            <Image style={styles.tbSocial} resizeMode="contain" source={icon} />
            <Text>{applink}</Text>
        </Pressable>
        );
    }
    
  
    return social;
  }



const OpenURLButton = ({ applink, weblink }) => {
    // Checking if the link is supported for links with custom URL scheme.
    console.log(applink+'-'+weblink);
    const supported = applink !== '' ? Linking.canOpenURL(applink) : false;

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      Linking.openURL(applink);
    } else {
      Linking.openURL(weblink)
    }

};



const SocialBar = () => {

    return <View style={styles.containerSocial}>
        {createSocial()}
    </View>;


}


const styles = StyleSheet.create({
  containerSocial:{
    flexDirection:'row',
    paddingLeft:20,
    marginTop:10,
    textAlign:"right",
  },
  tbSocial:{
    width:30,
    height:30,
    marginRight:25,
    marginTop:10,
  }
});


export default SocialBar;