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

const win = Dimensions.get('window');

const DettaglioProdotto = ({navigation,route}) => {

    const {id,title,soluzioni,featuredImage,content} = route.params.dataProdotto;
    navigation.setOptions({title:title.rendered});
    console.log('PARAMS: '+JSON.stringify(route.params.dataProdotto));
    return (<>
        <SafeAreaView style={{flex:1,backgroundColor:'transparent'}}>
            <ScrollView style={styles.viewStyle}>
            <Pressable style={styles.sectionGallery} onPress={() => console.log('OpenGallery')}>
              <Image source={{uri:featuredImage}} style={{width:win.width,height:win.height/3}}/>
            </Pressable>
            <View style={styles.containerDettaglio}>
                <Text style={styles.categoryDettaglio}>{route.params.nameSoluzione}</Text>
                <Text style={styles.categoryTitolo}>{title.rendered}</Text>
                <Text>{content.rendered}</Text>
            </View>

            </ScrollView>
        </SafeAreaView>

    </>);



}

const marginDettaglio = 16;
const paddingDettaglio = 16;
const innnerDettaglio = win.width-(marginDettaglio*2);

const styles = StyleSheet.create({
    categoryDettaglio: {
        fontFamily:'OpenSans-MediumItalic',
        fontStyle:'italic',
        fontSize:12,
        color:'#B2B2B2',
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