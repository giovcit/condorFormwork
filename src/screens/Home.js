import React,{
  useEffect,
  useRef,
  useState
} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    ImageBackground
  } from 'react-native';
  
import { 
  Colors,
} from '../components/utils';
import CustomBottomToolbar from '../components/utils/components/CustomBottomToolbar';
import ConsulenzaBar from '../components/utils/components/ConsulenzaBar';
import { 
  setCurrentScreen,
  loadSoluzioni,
  loadProdotti,
  loadProgetti
 } from '../redux/actions';
import '../globals';
import { useDispatch, useSelector } from 'react-redux';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Slide from '../components/utils/components/Slide';
import { getCategorySoluzioni,getProdottiSoluzioni, getProgetti } from '../components/utils/components/Board';

const win = Dimensions.get('window');
const ratio = win.width / 200;


const Home = ({navigation,route}) => {
    const isDarkMode = useColorScheme() === 'dark';
    const { lang } = route.params;
    
    const dispatch = useDispatch();
    const { soluzioni,prodotti,progetti } =  useSelector(state => state.CoReducer);


    
  //BOOTSTRAP CONTENT
  //VIA WORDPRESS API
  useEffect(() => {
    (async () => {
      if (soluzioni.length < 1 ) dispatch(loadSoluzioni(await getCategorySoluzioni()));
      if (prodotti.length < 1 ) dispatch(loadProdotti(await getProdottiSoluzioni()));
      if (prodotti.length < 1) dispatch(loadProgetti(await getProgetti()));
  
    })();
  },[])
  

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
      <SafeAreaView style={{flex:1,backgroundColor:'transparent'}}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          >
          <View
            style={{
              backgroundColor: Colors.backgroundPrimary,
              paddingBottom:75
            }}>
            <Pressable style={styles.sectionNews} onPress={() => console.log('Go To News')}>
              <Image source={require('../img/news.png')} style={{width:win.width,height:win.height/3}}/>
            </Pressable>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Il Mondo Condor</Text>
              <Slide/>
            </View>
          </View>
        </ScrollView>
        <ConsulenzaBar/>
        <CustomBottomToolbar/>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginLeft:15,
    marginright:15,
    marginTop:15, 
    flex:1,
    alignSelf:'stretch',
    textAlign:'center',
  },
  sectionPressable:{
    backgroundColor:'red',
    alignSelf:'stretch',
    textAlign:'center',

  },
  sectionNews: {
    flex:1,
    alignSelf:'stretch',
    textAlign:'center',
  },
  backgroundStyle:{
    flex:1,
    
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily:'SybillaPro-Bold',
    color:'black',
    marginTop:3,
    marginLeft:20

  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


export default Home;
