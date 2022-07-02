import { useNavigation } from '@react-navigation/native';
import React,{useState,useEffect} from 'react'
import { 
    ImageBackground, 
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    SafeAreaView,
    View,
    Image
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useSelector } from 'react-redux';
import '../globals';

const win = Dimensions.get('window');
const ratio = win.width / 200;

const CardList = ({navigation,route}) => {


    //console.log('SOLUZIONI IN CARD: '+JSON.stringify(soluzioni));

   return (
    <SafeAreaView style={{flex:1,backgroundColor:'transparent'}}>
        <ScrollView style={styles.viewStyle}>
           <Prodotti props={route.params}/>
        </ScrollView>
    </SafeAreaView>);
    
}

const Prodotti = () => {
    const { prodotti } =  useSelector(state => state.CoReducer);
    console.log(prodotti);
    return (<>
    {prodotti.map((post,index) => (
        <Pressable style={styles.cardContainer} key={post.id}>
        <ImageBackground resizeMode='cover' source={{uri:post.featuredImage}} style={styles.imageBackground}   imageStyle={{ borderRadius: 3}}>
        <View style={styles.TextContainer}>
            <Text style={styles.leftTextProdotti}>{post.title.rendered}</Text>
            <Image resizeMode='cover' source={{uri:post.iconImage}}style={styles.piantaImage}/>
         </View>
         </ImageBackground>
    </Pressable>))}</>
    );
}

const innerSpaceCard = win.width-28-28;
const cardHeight = win.width/3;

const styles = StyleSheet.create({
    viewStyle: {
        marginBottom:14,
    },
    cardContainer: {
        paddingTop:14,
        paddingLeft:14,
        paddingRight:14
    },
    piantaImage: {
        width:(innerSpaceCard)/5,
        height:cardHeight-cardHeight/3,
    },
    TextContainer: {
        alignItems:'baseline',
        padding: 3,
        marginTop: 3,
        marginLeft:14,
        width:innerSpaceCard,
        flexDirection:'row',
        justifyContent:'space-between',
      },
      leftTextProdotti:{
        color: 'white',
        fontFamily:'SybillaPro-Bold',
        fontSize:20,
        marginBottom:14,
        width:((innerSpaceCard)/5)*4,
        textAlign:'left',
        width:innerSpaceCard
      },
        imageBackground: {
        flex: 1,
        paddingTop:cardHeight/3,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
      },
})

export default CardList;