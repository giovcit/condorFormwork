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
import InfoTab from "../components/utils/components/InfoTab";



const win = Dimensions.get('window');
const marginDettaglio = 16;
const paddingDettaglio = 16;
const innnerDettaglio = win.width-(marginDettaglio*2);

const DettaglioProdotto = ({navigation,route}) => {

    const {id,title,soluzioni,featuredImage,content} = route.params.dataProdotto;
    navigation.setOptions({title:title.rendered});

    const intro = '<b>Questo è l\'intro html che sarà verosimilmente un grassetto di 4-5 righe.Questo è l\'intro html che sarà verosimilmente un grassetto di 4-5 righe.Questo è l\'intro html che sarà verosimilmente un grassetto di 4-5 righe.</b>';//poi content.render
    const tab = [
            {
                title:'Caratteristiche',
                content:content.rendered //poi acf dedicato
            },
            {
                title:'Sistema',
                content:content.rendered //poi acf dedicato
            },
            {
                title:'Download',
                content:content.rendered //valutare se generare html o gestire sezione con rn
            }
    ];


    console.log('PARAMS: '+JSON.stringify(route.params.dataProdotto));
    const source = {
        html: intro
      };
    return (<>
        <SafeAreaView style={{flex:1,backgroundColor:'transparent'}}>
            <ScrollView style={styles.viewStyle}>
            <Pressable style={styles.sectionGallery} onPress={() => console.log('OpenGallery')}>
              <Image source={{uri:featuredImage}} style={{width:win.width,height:win.height/3}}/>
            </Pressable>
            <View style={styles.containerDettaglio}>
                <Text style={styles.categoryDettaglio}>{route.params.nameSoluzione}</Text>
                <Text style={styles.categoryTitolo}>{title.rendered}</Text>
                <View style={styles.introDettaglio}>
                 <RenderHtml
                 source={source}
                 contentWidth={innnerDettaglio}
                 tagsStyles={stylesIntro}
                 />
                </View>
                <InfoTab props={tab}/>
            </View>
            <View style={styles.emptySpace}/>
            </ScrollView>
            <ConsulenzaBar/>
            <CustomBottomToolbar/>
        </SafeAreaView>

    </>);



}


const stylesIntro = {
    b:{
        color:'black',
        fontSize:15,
        lineHeight:19
    }
}



const styles = StyleSheet.create({
    emptySpace: {
        height:70
    },
    categoryDettaglio: {
        fontFamily:'OpenSans-MediumItalic',
        fontStyle:'italic',
        fontSize:12,
        color:'#B2B2B2',
    },
    introDettaglio: {
        marginTop:10,
        marginBottom:23,
        color:'black',

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


export default DettaglioProdotto;