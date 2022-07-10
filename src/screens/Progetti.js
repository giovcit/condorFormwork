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
import ConsulenzaBar from '../components/utils/components/ConsulenzaBar';
import CustomBottomToolbar from '../components/utils/components/CustomBottomToolbar';
import Fonts from '../components/utils/components/Fonts';
import '../globals';

const win = Dimensions.get('window');
const ratio = win.width / 200;

const Progetti = ({navigation,route}) => {


    //console.log('progetti IN CARD: '+JSON.stringify(progetti));

   return (
    <SafeAreaView style={{flex:1,backgroundColor:'transparent'}}>
        <ScrollView style={styles.viewStyle}>
           <Dettaglio/>
           <View style={styles.emptySpace}/>
        </ScrollView>
        <ConsulenzaBar/>
        <CustomBottomToolbar/>
    </SafeAreaView>);
    
}

const Dettaglio = () => {
    const { progetti } =  useSelector(state => state.CoReducer);
    const navigation = useNavigation();
    return (<>
    {progetti.map((post,index) => (
        <Pressable 
        onPress={() =>
            navigation.navigate('DettaglioProgetto',{
              lang:'it',
              dataProgetto:post,
              nameSoluzione:'Progetti di rilievo'
            })
            }
        style={styles.cardContainer} key={post.id}>
        <ImageBackground resizeMode='cover' source={{uri:post.featuredImage}} style={styles.imageBackground}   imageStyle={{ borderRadius: 3}}>
        <View style={styles.TextContainer}>
            <Text style={styles.leftText}>{post.title.rendered}</Text>
         </View>
         </ImageBackground>
    </Pressable>))}</>
    );
}


const innerSpaceCard = win.width-28-28;
const cardHeight = win.width/3;

const styles = StyleSheet.create({
    viewStyle: {
        marginBottom:14
    },
    emptySpace: {
        height:70
    },
    cardContainer: {
        paddingTop:20,
        paddingLeft:14,
        paddingRight:14
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
      leftText: {
        color: 'white',
        fontFamily:'SybillaPro-Bold',
        fontSize:Fonts.titleCardList,
        marginBottom:14,
        width:innerSpaceCard,
        textAlign:'left'
        },
        imageBackground: {
        flex: 1,
        paddingTop:cardHeight/3,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
      },
})

export default Progetti;