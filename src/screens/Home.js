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
    Platform
  } from 'react-native';
  
import { 
  Colors,
} from '../components/utils';
import Fonts from '../components/utils/components/Fonts';
import CustomBottomToolbar from '../components/utils/components/CustomBottomToolbar';
import ConsulenzaBar from '../components/utils/components/ConsulenzaBar';
import { 
  setCurrentScreen,
  loadSoluzioni,
  loadProdotti,
  loadProgetti,
  loadBlog,
  setCurrentLang
 } from '../redux/actions';
import '../globals';
import { useDispatch, useSelector } from 'react-redux';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Slide from '../components/utils/components/Slide';
import * as Progress from 'react-native-progress';
import { getBlog, getCategorySoluzioni,getProdottiSoluzioni, getProgetti } from '../components/utils/components/Board';

const win = Dimensions.get('window');
const ratio = win.width / 200;

const backgroundStyle = () => {
	return Platform.select({
	    android: { backgroundColor: isDarkMode ? Colors.darker : Colors.lighter },
	    ios: { backgroundColor: 'default' },
	});
    };


const Home = ({navigation,route}) => {
    const isDarkMode = useColorScheme() === 'dark';
    const { lang } = route.params;

    const dispatch = useDispatch();
    const { soluzioni,prodotti,progetti,blog,currentLang } =  useSelector(state => state.CoReducer);
    const [loading,setLoading] = useState(true);

    
  //BOOTSTRAP CONTENT
  //VIA WORDPRESS API
  useEffect(() => {
    (async () => {
        console.log('START LOADING OR GET TO CACHE')
        setLoading(true);
        if (currentLang !== lang || soluzioni.length < 1 ) dispatch(loadSoluzioni(await getCategorySoluzioni(lang)));
        if (currentLang !== lang || prodotti.length < 1 ) dispatch(loadProdotti(await getProdottiSoluzioni(lang)));
        if (currentLang !== lang || progetti.length < 1) dispatch(loadProgetti(await getProgetti(lang)));
        if (currentLang !== lang || blog.length < 1) dispatch(loadBlog(await getBlog(lang)));
        dispatch(setCurrentLang(lang));
        setLoading(false);
    })();
  },[])
  

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
      
      <SafeAreaView style={{flex:1,backgroundColor:'transparent'}}>
        <StatusBar barStyle={ Platform.OS == 'android' ? (isDarkMode ? 'light' : 'dark') : 'dark-content' } backgroundColor={Colors.redCondor} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          >
          <View
            style={{
              backgroundColor: Colors.backgroundPrimary,
              paddingBottom:75
            }}>
            <ContentHome/>
          </View>
        </ScrollView>
        <ConsulenzaBar/>
        <CustomBottomToolbar/>
      </SafeAreaView>
    );
}


const ContentHome = () => {
  return (<>
    <Pressable style={styles.sectionNews} onPress={() => console.log('Go To News')}>
              <Image source={require('../img/news.png')} style={{width:win.width,height:win.height/3}}/>
            </Pressable>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Il Mondo Condor</Text>
              <Slide/>
            </View>
  </>);
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
    fontSize: Fonts.titleFont,
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
