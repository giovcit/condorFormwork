import React,{useState,useEffect} from 'react'
import { 
    ImageBackground, 
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    SafeAreaView,
    View
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useSelector } from 'react-redux';
import '../globals';

const win = Dimensions.get('window');
const ratio = win.width / 200;

const CardList = () => {
    //const [soluzioni,setSoluzioni] = useState([]);  


   

    //useEffect(() => {
      //      getCategorySoluzioni();        
       //}, []);

    const { soluzioni,test } =  useSelector(state => state.CoReducer);

    //console.log('TEST: '+JSON.stringify(test));
    console.log('SOLUZIONI IN CARD: '+JSON.stringify(soluzioni));

   return (
    <SafeAreaView style={{flex:1,backgroundColor:'transparent'}}>
        <ScrollView>{soluzioni.map((post,index) => (
                <Pressable key={post.id}>
                <ImageBackground source={{uri:post.featuredImage}} style={styles.imageBackground}   imageStyle={{ borderRadius: 3}}/>
                <View style={styles.TextContainer}>
                    <Text style={styles.centerText}>{post.name}</Text>
                 </View>
            </Pressable>))} 
        </ScrollView>
    </SafeAreaView>);
    
    }


const styles = StyleSheet.create({
    TextContainer: {
        alignItems:'center',
        padding: 3,
        marginTop: 3,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
      },
      centerText: {
        color: 'white',
        fontFamily:'SybillaPro-Bold',
        fontSize:23,
        marginBottom:20
        },
    imageBackground: {
        flex: 2,
        paddingTop:win.height/3,
      },
})

export default CardList;