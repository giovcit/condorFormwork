import React,{ useState } from "react";
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
    Dimensions,
    Pressable,
    Image,
    View,
    TextInput,
    Linking
} from 'react-native';
import CustomBottomToolbar from "../components/utils/components/CustomBottomToolbar";   
import ConsulenzaBar from "../components/utils/components/ConsulenzaBar";


const win = Dimensions.get('window');
const marginDettaglio = 16;
const paddingDettaglio = 16;
const innnerDettaglio = win.width-(marginDettaglio*2);


var data = {    
    sottotitolo:'Contatti',
    titolo:'Dove Siamo',
    featuredImage:'http://stage.appcondor.com/app/uploads/2022/07/headerContatti-1.png',
    elencoSedi:[
        {
            title:'Condor S.p.A',
            testo:'Zona industriale Conza della Campania (AV) - 83040 Italia',
            tel:{
                label:'Tel.',
                item:'+39 0827 39512'
            },
            email:{
                label:'Email',
                item:'info@condorspa.com'
            },
            emailPec:{
                label:'Email Pec',
                item:'condorgroup@pec.it'
            },
        },
        {
            title:'Condor Gulf DWC LLC',
            testo:'One Space Building - Dubai Investment Park -DUBAI - UAE',
            tel:{
                label:'Tel.',
                item:'+971 (0)4 8239037'
            },
            email:{
                label:'Email',
                item:'dubai@condorspa.com'
            },
            emailPec:{
                label:'',
                item:''
            },
        },
        {
            title:'Filiale di SFAX',
            testo:'Tunis road km 9 - SFAX - TUNISIA',
            tel:{
                label:'Tel.',
                item:'+971 (0)4 8239037'
            },
            email:{
                label:'',
                item:''
            },
            emailPec:{
                label:'',
                item:''
            },
        },
        {
            title:'Filiale di Bucarest',
            testo:'Autostrada Bucuresti - Pitesti km 13.2 - 077040 BUCAREST - ROMANIA',
            tel:{
                label:'Tel.',
                item:'+40 745 531817'
            },
            email:{
                label:'Email',
                item:'office@condor-romania.ro'
            },
            emailPec:{
                label:'',
                item:''
            },
        },
        {
            title:'Condor France',
            testo:'38 rue des Mathurins 75008 Paris',
            tel:{
                label:'',
                item:''
            },
            email:{
                label:'Email',
                item:'france@condorspa.com'
            },
            emailPec:{
                label:'',
                item:''
            },
        }                        
    ],


}



const Sedi = ({posizioni}) => {
    var sediView = []
    for (var p in posizioni){
        sediView.push(
        <View style={styles.containerSedi}>
            <Text style={styles.titoloSedi}>{posizioni[p].title}</Text>
            <Text style={styles.indirizzoSedi}>{posizioni[p].testo}</Text>
            {posizioni[p].tel.label != '' ? <Pressable 
                onPress={() => Linking.openURL(`tel:${posizioni[p].tel.item}`)}>
                <Text style={styles.telefonoSedi}>{posizioni[p].tel.label} {posizioni[p].tel.item}</Text>
            </Pressable>: <></>}
            {posizioni[p].email.label != '' ? <Pressable 
                onPress={() => Linking.openURL(`mailto:${posizioni[p].email.item}`)}>
                <Text style={styles.emailSedi}>{posizioni[p].email.label} {posizioni[p].email.item}</Text>
            </Pressable> : <></>}
            {posizioni[p].emailPec.label != '' ? <Pressable 
                onPress={() => Linking.openURL(`mailto:${posizioni[p].emailPec.item}`)}>
                <Text style={styles.emailSedi}>{posizioni[p].emailPec.label} {posizioni[p].emailPec.item}</Text>
            </Pressable> : <></>}
        </View>);
    }

    return sediView;

}


const Contatti = ({navigation,route}) => {

    const { sottotitolo,titolo,featuredImage,elencoSedi } = data;

    return (<>
        <SafeAreaView style={{flex:1,backgroundColor:'transparent'}}>
            <ScrollView style={styles.viewStyle}>
            <Pressable style={styles.sectionGallery} onPress={() => console.log('OpenGallery')}>
              <Image source={{uri:featuredImage}} style={{width:win.width,height:win.height/3}}/>
            </Pressable>
            <View style={styles.containerDettaglio}>
                <Text style={styles.consulenzaDettaglio}>{sottotitolo}</Text>
                <Text style={styles.consulenzaTitolo}>{titolo}</Text>
                <Sedi posizioni={elencoSedi}/>
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
    consulenzaForm:{

    },
    consulenzaDettaglio: {
        fontFamily:'OpenSans-MediumItalic',
        fontStyle:'italic',
        fontSize:12,
        color:'#B2B2B2',
    },
    containerSedi:{
        borderBottomColor:'#B2B2B2',
        borderBottomWidth:1,
        color:'black',
        marginTop:20,
        paddingBottom:20,
    },
    consulenzaIntro:{
        marginTop:25,
        fontWeight:'bold',
        color:'black',
        fontFamily:'OpenSans-Bold'
    },
    consulenzaTitolo:{
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
    containerAssistenza:{
        width:innnerDettaglio,
        alignSelf:'center',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        marginTop:20,
        paddingLeft:paddingDettaglio,
        paddingRight:paddingDettaglio,
        paddingTop:paddingDettaglio/2,
        paddingBottom:paddingDettaglio,
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


export default Contatti
