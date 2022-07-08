import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
    Dimensions,
    Pressable,
    Image,
    View
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import ConsulenzaBar from "../components/utils/components/ConsulenzaBar";
import CustomBottomToolbar from "../components/utils/components/CustomBottomToolbar";



const win = Dimensions.get('window');
const marginDettaglio = 16;
const paddingDettaglio = 16;
const innnerDettaglio = win.width-(marginDettaglio*2);

const DettaglioBlog = ({navigation,route}) => {

    const {date,title,featuredImage,content} = route.params.dataBlog;
    navigation.setOptions({title:title.rendered});
    console.log('PARAMS: '+JSON.stringify(route.params.dataBlog));
    const source = {
        html: content.rendered
      };
    return (<>
        <SafeAreaView style={{flex:1,backgroundColor:'transparent'}}>
            <ScrollView style={styles.viewStyle}>
            <Pressable style={styles.sectionGallery} onPress={() => console.log('OpenGallery')}>
              <Image source={{uri:featuredImage}} style={{width:win.width,height:win.height/3}}/>
            </Pressable>
            <View style={styles.containerDettaglio}>
                <Text style={styles.dateBlog}>{date}</Text>
                <Text style={styles.categoryTitolo}>{title.rendered}</Text>
                <RenderHtml
                source={source}
                contentWidth={innnerDettaglio}
                style={styles.contenutoDettaglio}
                tagsStyles={innerHtmlStyle}
                />
            </View>
            <View style={styles.emptySpace}/>
            </ScrollView>
            <ConsulenzaBar/>
            <CustomBottomToolbar/>
        </SafeAreaView>

    </>);



}


const innerHtmlStyle = {
    p: {
        fontFamily:'OpenSans-Medium',
        fontSize:18,
        color:'black'
    },
    span :{
        fontSize:18,
        fontFamily:'OpenSans-Medium',
        fontWeight:'bold',
        color:'black'
    }
    
}



const styles = StyleSheet.create({
    emptySpace: {
        height:70
    },
    dateBlog: {
        fontFamily:'OpenSans-MediumItalic',
        fontStyle:'italic',
        fontSize:12,
        color:'#B2B2B2',
    },
    contenutoDettaglio: {

    },
    categoryTitolo:{
        color:'black',
        fontSize:26,
        fontFamily:'SybillaPro-Bold',
        textTransform:'capitalize'
    },
    containerDettaglio:{
        backgroundColor:'white',
        width:innnerDettaglio,
        alignSelf:'center',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        marginTop:-30,
        paddingLeft:paddingDettaglio,
        paddingRight:paddingDettaglio,
        paddingTop:paddingDettaglio/2,
        paddingBottom:paddingDettaglio
    },
    viewStyle: {
        marginBottom:14
    },
    sectionGallery: {
        flex:1,
        alignSelf:'stretch',
        textAlign:'center',
      },
});


export default DettaglioBlog;