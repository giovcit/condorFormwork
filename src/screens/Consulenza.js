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
    Linking,
    Alert
} from 'react-native';
import CustomBottomToolbar from "../components/utils/components/CustomBottomToolbar";
import CheckBox from "@react-native-community/checkbox";
import { Colors } from "../components/utils";
import Fonts from "../components/utils/components/Fonts";
import SelectPicker from "react-native-form-select-picker";
import qs from "qs";

const win = Dimensions.get('window');
const marginDettaglio = 16;
const paddingDettaglio = 16;
const innnerDettaglio = win.width-(marginDettaglio*2);


var data = {
    sottotitolo:'Consulenza',
    titolo:'Chiedi ad un nostro consulente',
    intro:'Un contatto diretto con i nostri esperti e ti aiuterà ad indentificare la migliore soluzione alla tua esigenza',
    featuredImage:'http://stage.appcondor.com/app/uploads/2022/07/consulenzaHeader.jpg',
    introEmail:'Richiesta inviata da Form App:',
    to:'gianni.citro@gmail.com',
    cc:'skyedilagro@gmail.com',
    form:[
    {
        title:'Tipo di richiesta',
        type:'SelectInput',
        id:30,
        choices:['Preventivo','Informazioni'],
        value:'',
        mandatory:true
    },
    {
        title:'Prodotti',
        type:'SelectInput',
        id:40,
        choices:['Comax','Optimo'],
        value:'',
        mandatory:true
    },
    {
        title:'Nome',
        type:'TextInput',
        value:'',
        mandatory:true
    },
    {
        title:'Cognome',
        type:'TextInput',
        value:'',
        mandatory:true
    },
    {
        title:'Azienda/Professione',
        type:'TextInput',
        value:'',
        mandatory:true
    },
    {
        title:'Partita Iva',
        type:'TextInput',
        value:'',
        mandatory:true
    },
    {
        title:'Indirizzo',
        type:'TextInput',
        value:'',
        mandatory:true
    },
    {
        title:'Numero Civico',
        type:'TextInput',
        value:'',
        mandatory:true
    },
    {
        title:'Cap',
        type:'TextInput',
        value:'',
        mandatory:true
    },
    {
        title:'Provincia',
        type:'TextInput',
        value:'',
        mandatory:true
    },
    {
        title:'Nazione',
        type:'TextInput',
        value:'',
        mandatory:true
    },
    {
        title:'Telefono',
        type:'TextInput',
        value:'',
        mandatory:true
    },
    {
        title:'Email',
        type:'TextInput',
        value:'',
        mandatory:true
    },
    {
        title:'Descrizione',
        type:'TextArea',
        value:'',
        mandatory:true
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
            if (type === 'TextInput')   formSection.push(renderInput(campi[c],c));
            if (type === 'TextArea')    formSection.push(renderTextArea(campi[c],c))
            if (type === 'SelectInput') formSection.push(renderPicker(campi[c],c))
        }
    
        return formSection;
    }
    const renderInput = (input,id) => {
        return (
            <TextInput 
            key={id} 
            style={styles.inputStyle} 
            placeholder={input.title+(input.mandatory ?'*':'')}
            onChangeText={(val) => input.value=val}
            placeholderTextColor="#000"/>
        );
    }
    
    const renderTextArea = (area,id) => {
        return (
        <TextInput
            key={id}
            multiline
            numberOfLines={10}
            style={styles.textAreaStyles}
            containerStyle={styles.textAreaStyles}
            //onChangeText={onChangeNumber}
            //value={number}
            onChangeText={(val) => area.value=val}
            placeholder={area.title+(area.mandatory?'*':'')}
            placeholderTextColor="#000"/>
       );
    }

    const [selected, setSelected] = useState([]);

    
    const renderPicker = (select,id) => {

                
        return(
            <View style={styles.pickerContainer}>
                <SelectPicker
			onValueChange={(value) => {
				// Do anything you want with the value. 
				// For example, save in state.
				select.value = value;
			}}
            onSelectedStyle={styles.pickerStyle}
            placeholder={select.title+(select.mandatory?'*':'')}
            placeholderStyle={styles.pickerStyle}
			selected={select.value}
            doneButtonText="OK"
			>
			
			{select.choices.map((val, index) => (
				<SelectPicker.Item label={val} value={val} key={val} />
			))}

		</SelectPicker>
            {/* <Picker
                selectedValue={currency}
                onValueChange={currentCurrency => setCurrency(currentCurrency)}
                style={{padding:0,color:'black',fontSize:10,fontWeight:'400',marginLeft:-10}}
                mode="dialog"
                fontFamily={"SybillaPro-Bold"}>
                {select.choices.map((post,index) => (
                    <Picker.Item label={post} value={post} />
                ))}
                
            </Picker> */}
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
                <Pressable onPress={sendEmail} style={styles.buttonSend}><Text style={styles.sendText}>{sendTitle}</Text></Pressable>
            </View>
            <Assistenza/>
            </ScrollView>
            <CustomBottomToolbar/>
        </SafeAreaView>

    </>);



}


const checkMandatory = () => {
    console.log(' HERE HERE HERE');
    console.log(' HERE HERE HERE');
    const { form } = data;
    for (var i in form){
        console.log('- '+JSON.stringify(form[i]));
        var {title,mandatory,value} = form[i];
        if (mandatory && value === ''){
            Alert.alert('Errore Form','Campo '+'"'+title+'" obbligatorio');
            return false;
        }
    }
    //if (!toggleCheckBox) {
    //    Alert.alert('Errore Form','Accettazione condizioni obbligatorio');
    //    return false;
    //}

}


const renderBody = () => {
    var body = data.introEmail+"\n\n";
    const { form } = data;
    for (var i in form){
        console.log('- '+form[i]);
        var {title,value} = form[i];
        body += title+': '+value+" \n";
    }

    return body
}


const sendEmail = () => {


    //if (!checkMandatory()) return;

    let url = `mailto:${data.to}`;
    let body = renderBody();

    // Create email link query
    const query = qs.stringify({
        subject: 'Richiesta Form: '+data.form[0].value+' '+data.form[1].value,
        body: body,
        cc: data.cc,
        //bcc: bcc
    });

    if (query.length) {
        url += `?${query}`;
    }
    console.log('URL FORM: '+url);
    // check if we can use this link
    //const canOpen = await Linking.canOpenURL(url);

    //if (!canOpen) {
        //throw new Error('Provided URL can not be handled');
   // }

    return Linking.openURL(url);
}


const styles = StyleSheet.create({
    emptySpace: {
        height:70
    },
    consulenzaForm:{

    },
    buttonSend:{
        backgroundColor:Colors.redCondor,
        width:innnerDettaglio/1.7,
        alignSelf:'center',
        padding:14,
        marginTop:30,
        marginBottom:20,
    },
    pickerStyle:{
        padding:0,
        color:'black',
        fontSize:16,
        marginLeft:-5,
        fontFamily:'SybillaPro-Bold',
        border:0,
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
        fontFamily:'OpenSans-Regular',
        fontSize:14
    },
    telefonoAssistenzaStyle:{
        color:'white',
        fontSize:22,
        fontFamily:'SybillaPro-Bold'
    },
    sendText:{
        textAlign:'center',
        color:'white',
        fontSize:20,
        fontFamily:'SybillaPro-Bold'
    },
    condizioniConsulenza: {
        marginTop:20,
        marginBottom:20,
        color:'black',
        fontFamily:'OpenSans-Regular',
        fontSize:12
    },
    disclaimerAssistenza: {
        color:'black',
        fontSize:26,
        fontFamily:'SybillaPro-Bold'
    },
    CheckBoxText:{
        color:'black',
        fontSize:14,
        fontFamily:'OpenSans-Regular'
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
        fontSize:16,
        fontFamily:'SybillaPro-Bold'
    },
    pickerContainer:{
        borderBottomWidth:1,
        borderBottomColor:'#B2B2B2',
    },  
    inputStyle: {
        borderBottomColor:'#B2B2B2',
        borderBottomWidth:1,
        paddingBottom:10,
        color:'black',
        fontSize:16,
        fontFamily:'SybillaPro-Bold'
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
        fontSize:Fonts.introFont,
        marginBottom:15
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
