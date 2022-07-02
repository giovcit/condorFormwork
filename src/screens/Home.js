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
  loadSoluzioni
 } from '../redux/actions';
 import '../globals';
import { useDispatch, useSelector } from 'react-redux';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Slide from '../components/utils/components/Slide';

const win = Dimensions.get('window');
const ratio = win.width / 200;


const Home = ({navigation,route}) => {
    const isDarkMode = useColorScheme() === 'dark';
    const { lang } = route.params;
    
    const dispatch = useDispatch();
    const { soluzioni } =  useSelector(state => state.CoReducer);

    const getCategorySoluzioni = async () => {
      const response = await fetch(CATEGORY_SOLUZIONI_API+'?_fields[]=id&_fields[]=name&_fields[]=acf');
              if(!response.ok) {
                  // oups! something went wrong
                  console.log(response);
                  return;
              }
     
              const newSoluzioni = await response.json();
              //console.log('SOL: '+JSON.stringify(soluzioni));

              for (var s in newSoluzioni){
      
      
                  const response = await fetch(MEDIA_API+'/'+newSoluzioni[s].acf.main_image+'?_fields[]=id&_fields[]=media_details');
                          if(!response.ok) {
                              // oups! something went wrong
                              console.log(response);
                              return;
                          }
          
                          //console.log('RESPONSE:'+response);
                 
                          const m = await response.json();
                          newSoluzioni[s].featuredImage = UPLOADS_DIR+'/'+m.media_details.file;
                          //console.log(JSON.stringify(newSoluzioni[s]))
                  }
          
                  return await newSoluzioni;
  }


    
  //dispatch(setCurrentScreen('Home'));
  (async () => {
    dispatch(loadSoluzioni(await getCategorySoluzioni()));

  })();
  
    
    

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
