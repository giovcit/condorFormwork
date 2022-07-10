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
import { Picker } from "@react-native-picker/picker";
import CustomBottomToolbar from "../components/utils/components/CustomBottomToolbar";
import CheckBox from "@react-native-community/checkbox";
import { Colors } from "../components/utils";
import Fonts from "../components/utils/components/Fonts";


const win = Dimensions.get('window');
const marginDettaglio = 16;
const paddingDettaglio = 16;
const innnerDettaglio = win.width-(marginDettaglio*2);


var data = {
    sottotitolo:'Consulenza',
    titolo:'Chiedi ad un nostro consulente',
    intro:'Un contatto diretto con i nostri esperti e ti aiuterà ad indentificare la migliore soluzione alla tua esigenza',
    featuredImage:'http://stage.appcondor.com/app/uploads/2022/07/consulenzaHeader.jpg',
    form:[
    {
        title:'Tipo di richiesta',
        type:'SelectInput',
        choices:['Preventivo','Informazioni']
    },
    {
        title:'Prodotti',
        type:'SelectInput',
        choices:['Comax','Optimo']
    },
    {
        title:'Nome',
        type:'TextInput',
    },
    {
        title:'Cognome',
        type:'TextInput'
    },
    {
        title:'Azienda/Professione',
        type:'TextInput'
    },
    {
        title:'Partita Iva',
        type:'TextInput'
    },
    {
        title:'Indirizzo',
        type:'TextInput'
    },
    {
        title:'Numero Civico',
        type:'TextInput'
    },
    {
        title:'Cap',
        type:'TextInput'
    },
    {
        title:'Provincia',
        type:'TextInput'
    },
    {
        title:'Nazione',
        type:'TextInput'
    },
    {
        title:'Telefono',
        type:'TextInput'
    },
    {
        title:'Email',
        type:'TextInput'
    },
    {
        title:'Descrizione',
        type:'TextArea'
    },
    
    ],
    condizioni:'D. Lgs 196/03. Artt. 13 e 24 I dati da lei forniti saranno: conservati per il tempo necessario a ricontattarla; trattati con modalità informatica dal titolare del trattamento dei dati e/o da appositi incaricati nominati nel DPSS ed in ogni caso non verranno divulgati se non per i casi espressamente previsti dal D.Lgs 196/03. Per permettere il trattamento deve acconsentire alla registrazione temporanea dei suoi dati.',
    checkTitle:'Accetto le condizioni',
    sendTitle:'Invia',
    disclaimerAssistenza:'Per assistenza immediata chiama subito il numero',
    telefonoAssistenza:'+39 0827 39512',
    orariAssistenza:'da lunedi al venerdi dalle 10:00 alle 18:00'


}



const Consulenza = ({navigation,route}) => {

    const Form = (e) => {
        const campi = e.props;
        console.log(campi);
        let formSection = [];
        for (var c in campi){
            var { title,type } = campi[c]
            if (type === 'TextInput')   formSection.push(renderInput(campi[c]));
            if (type === 'TextArea')    formSection.push(renderTextArea(campi[c]))
            if (type === 'SelectInput') formSection.push(renderPicker(campi[c]))
        }
    
        return formSection;
    }
    const renderInput = (input) => {
        return (
            <TextInput style={styles.inputStyle} placeholder={input.title}/>
        );
    }
    
    const renderTextArea = (area) => {
        return (
        <TextInput
            multiline
            numberOfLines={10}
            style={styles.textAreaStyles}
            //onChangeText={onChangeNumber}
            //value={number}
            placeholder={area.title}/>
       );
    }
    
    
    const renderPicker = (select) => {
        return(
            <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={currency}
                            onValueChange={currentCurrency => setCurrency(currentCurrency)}
                            style={{padding:0,color:'black',fontSize:10,fontWeight:'400',marginLeft:-10}}>
                            {select.choices.map((post,index) => (
                                <Picker.Item label={post} value={post} />
                            ))}
                            
                        </Picker>
                        </View>
        );
    }

    const Assistenza = () => {
        return (
            <View style={styles.containerAssistenza}>
                <Text style={styles.disclaimerAssistenza}>{disclaimerAssistenza}</Text>
                <Pressable 
                onPress={() => Linking.openURL(`tel:${telefonoAssistenza}`)} 
                style={styles.buttonSendAssistenza}><Image width={25} height={25} style={styles.iconTelefono} resizeMode="contain" source={require('../img/telefono-icon.png')} /><Text style={styles.telefonoAssistenzaStyle}>{telefonoAssistenza}</Text></Pressable>
                <Text style={styles.orariAssistenzaStyle}>{orariAssistenza}</Text>
            </View>
        );
    }

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const {
        sottotitolo,titolo,featuredImage,intro,form,condizioni,
        checkTitle,sendTitle,orariAssistenza,telefonoAssistenza,disclaimerAssistenza
    } = data;
    const [currency, setCurrency] = useState('Seleziona');
    console.log('PARAMS: '+JSON.stringify(route.params.dataProdotto));
    return (<>
        <SafeAreaView style={{flex:1,backgroundColor:'transparent'}}>
            <ScrollView style={styles.viewStyle}>
            <Pressable style={styles.sectionGallery} onPress={() => console.log('OpenGallery')}>
              <Image source={{uri:featuredImage}} style={{width:win.width,height:win.height/3}}/>
            </Pressable>
            <View style={styles.containerDettaglio}>
                <Text style={styles.consulenzaDettaglio}>{sottotitolo}</Text>
                <Text style={styles.consulenzaTitolo}>{titolo}</Text>
                <Text style={styles.consulenzaIntro}>{intro}</Text>
                <View style={styles.consulenzaForm}>
                    <Form props={form}/>
                </View> 
                <Text style={styles.condizioniConsulenza}>{condizioni}</Text>
                <View style={styles.containerCheckbox}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text style={styles.CheckBoxText}>{checkTitle}</Text>
                </View>
                <Pressable style={styles.buttonSend}><Text style={styles.sendText}>{sendTitle}</Text></Pressable>
            </View>
            <Assistenza/>
            </ScrollView>
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
    buttonSend:{
        backgroundColor:Colors.redCondor,
        width:innnerDettaglio/2.4,
        alignSelf:'center',
        padding:14,
        marginTop:30,
        marginBottom:20
    },
    buttonSendAssistenza:{
        backgroundColor:Colors.redCondor,
        width:innnerDettaglio-marginDettaglio-marginDettaglio,
        alignSelf:'center',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
        marginTop:30,
        marginBottom:20,
        flexDirection:'row',
        alignItems:'center'
    },
    orariAssistenzaStyle:{

    },
    telefonoAssistenzaStyle:{
        color:'white',
        fontSize:20
    },
    sendText:{
        textAlign:'center',
        color:'white',
        fontSize:15,
    },
    condizioniConsulenza: {
        marginTop:20,
        marginBottom:20
    },
    disclaimerAssistenza: {
        color:'black',
        fontSize:22
    },
    CheckBoxText:{

    },
    iconTelefono:{
        width:40,
        height:40,
        marginRight:20
    },
    containerCheckbox: {
        flexDirection:'row',
        alignItems:'center'
    },
    textAreaStyles:{
        borderBottomColor:'#B2B2B2',
        borderBottomWidth:1,
        color:'black',
        textAlignVertical:'top',
        marginTop:10,
    },
    pickerContainer:{
        borderBottomWidth:1,
        borderBottomColor:'#B2B2B2',
    },  
    inputStyle: {
        borderBottomColor:'#B2B2B2',
        borderBottomWidth:1,
        paddingBottom:10,
        color:'black'
    },
    consulenzaSlide: {
        backgroundColor:'white',
        marginLeft:0,
        width:win.width,
        paddingLeft:marginDettaglio,
        paddingTop:30,
        paddingBottom:30
    },
    consulenzaDettaglio: {
        fontFamily:'OpenSans-MediumItalic',
        fontStyle:'italic',
        fontSize:12,
        color:'#B2B2B2',
    },
    contenutoDettaglio: {

    },
    consulenzaIntro:{
        marginTop:15,
        fontWeight:'bold',
        color:'black',
        fontFamily:'OpenSans-Bold',
        fontSize:Fonts.introFont
    },
    consulenzaTitolo:{
        color:'black',
        fontSize:Fonts.titleFont,
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


export default Consulenza
