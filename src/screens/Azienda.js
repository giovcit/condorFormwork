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
import ConsulenzaBar from "../components/utils/components/ConsulenzaBar";
import CustomBottomToolbar from "../components/utils/components/CustomBottomToolbar";
import YoutubePlayer from 'react-native-youtube-iframe';
import InfoTab from '../components/utils/components/InfoTab';
import SlideAzienda from "../components/utils/components/SlideAzienda";


const win = Dimensions.get('window');
const marginDettaglio = 16;
const paddingDettaglio = 16;
const innnerDettaglio = win.width-(marginDettaglio*2);


var data = {
    sottotitolo:'Azienda',
    titolo:'Chi Siamo',
    intro:'CONDOR SPA è una delle principali aziende europee attive nella produzione di ponteggi, casseforme e blindaggi che trovano molteplici applicazioni nell’edilizia oltre che nei restauri, settore dello spettacolo, industria navale, manutenzioni industriali ed Oil&Gas.',
    video:'zrAuK6x2E1k',
    featuredImage:'http://stage.appcondor.com/app/themes/condor/dist/images/hero-image/default.ponteggio_69f15.jpg',
    tab:[
        {
        title:'La nostra offerta',
        content:'<b>Lorem ipsum dolor sit amet</b> '
    },
    {
        title:'Un servizio senza frontiere',
        content:'Lorem ipsum dolor sit amet'
    },
    {
        title:'Un servizio senza frontiere',
        content:'Lorem ipsum dolor sit amet'
    },
    {
        title:'Uno sguardo verso il futuro',
        content:'Lorem ipsum dolor sit amet'
    },
    {   
        title:'Tecnologia',
        content:'Lorem ipsum dolor sit amet'
    },
    {   
        title:'Ricerca e sviluppo',
        content:'Lorem ipsum dolor sit amet'
    },
    {   
        title:'Qualità',
        content:'Lorem ipsum dolor sit amet'
    },
    {   
        title:'Formazione e Sicurezza',
        content:'Lorem ipsum dolor sit amet'
    }
    ]


}





const Azienda = ({navigation,route}) => {

    const {sottotitolo,titolo,featuredImage,intro,video,tab} = data;
    console.log('PARAMS: '+JSON.stringify(route.params.dataProdotto));
    return (<>
        <SafeAreaView style={{flex:1,backgroundColor:'transparent'}}>
            <ScrollView style={styles.viewStyle}>
            <Pressable style={styles.sectionGallery} onPress={() => console.log('OpenGallery')}>
              <Image source={{uri:featuredImage}} style={{width:win.width,height:win.height/3}}/>
            </Pressable>
            <View style={styles.containerDettaglio}>
                <Text style={styles.aziendaDettaglio}>{sottotitolo}</Text>
                <Text style={styles.aziendaTitolo}>{titolo}</Text>
                <Text style={styles.aziendaIntro}>{intro}</Text>
            </View>
                <View style={styles.aziendaVideo}>
                    <YoutubePlayer
                    height={win.width/2}
                    initialPlayerParams={{showClosedCaptions:true}}
                    //play={playing}
                    videoId={video}
                    onChangeState={() => {}}
                    />
                </View>
                <View style={styles.aziendaSlide}>
                    <SlideAzienda/>
                </View> 
                <View style={styles.aziendaTab}>
                    <InfoTab props={tab}/>
                </View>
            
            <View style={styles.emptySpace}/>
            </ScrollView>
            <ConsulenzaBar/>
            <CustomBottomToolbar/>
        </SafeAreaView>

    </>);



}



const styles = StyleSheet.create({
    emptySpace: {
        height:70
    },
    aziendaSlide: {
        backgroundColor:'white',
        marginLeft:0,
        width:win.width,
        paddingLeft:marginDettaglio,
        paddingTop:30,
        paddingBottom:30
    },
    aziendaDettaglio: {
        fontFamily:'OpenSans-MediumItalic',
        fontStyle:'italic',
        fontSize:12,
        color:'#B2B2B2',
    },
    aziendaTab: {
        marginLeft:0,
        width:win.width,
        //paddingLeft:marginDettaglio,
        backgroundColor:'white',
        paddingTop:0,
        paddingBottom:0
    },
    contenutoDettaglio: {

    },
    aziendaVideo:{
        marginTop:0,
        marginLeft:0,
        width:win.width,
        backgroundColor:'white'
    },
    aziendaIntro:{
        marginTop:25,
        fontWeight:'bold',
        color:'black',
        fontFamily:'OpenSans-Bold'
    },
    aziendaTitolo:{
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


export default Azienda
