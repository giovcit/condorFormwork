import React,{
    useRef,
    useState
  } from 'react';
import { 
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
    View,
    Text 
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import SimplePaginationDot from '../components/SimplePaginationDot'
import { useNavigation } from '@react-navigation/native';
const data = [
    {
      uri: require('../../../img/soluzioni-slide.png'),
      title: 'Soluzioni',
      component:'CardList',
    },
    {
      uri: require('../../../img/progetti-slide.png'),
      title: 'Progetti',
      component:'CardList',
    },
    {
      uri: require('../../../img/azienda-slide.png'),
      title: 'Azienda',
      component:'CardList',
    },
    {
      uri: require('../../../img/consulenza-slide.png'),
      title: 'Consulenza',
      component:'CardList',
    },
    {
      uri: require('../../../img/justscaff-slide.png'),
      title: 'JustScaff',
      component:'CardList',
    }
    
  ];  

  const win = Dimensions.get('window');
  const ratio = win.width / 200;

  const Slide = () => {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigation = useNavigation();    
    
    const renderItem = ({item, index}) => {
        const {uri, title, content} = item;
        return (
          <TouchableOpacity
            activeOpacity={0.9}
            style={stylesCarousel.item}
            onPress={() =>
              navigation.navigate(item.component,{
                lang:'it'
              })
              }
            >
            <ImageBackground source={uri} style={stylesCarousel.imageBackground}   imageStyle={{ borderRadius: 3}}
      >
              <View style={stylesCarousel.TextContainer}>
                <Text style={stylesCarousel.centerText}>{item.title}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        );
      }


    function handleCarouselScrollEnd(item, index) {
        setCurrentIndex(index);
      }

      return (
      <>
        <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        style={stylesCarousel.carousel}
        itemWidth={win.width * 0.8}
        containerWidth={win.width}
        separatorWidth={0}
        onScrollEnd={handleCarouselScrollEnd}
        inActiveScale={1}
/>
        <SimplePaginationDot currentIndex={currentIndex} length={data.length} />
      </>
      );
  



  }


  const stylesCarousel = StyleSheet.create({
    container: {backgroundColor: '#141518', paddingVertical: 20},
  
    item: {
      backgroundColor: 'white',
      flex: 1,
      shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
      borderRadius:200,
      margin:10,
      
    },
    imageBackground: {
      flex: 2,
      paddingTop:win.height/3,
    },
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
    lowerContainer: {
      flex: 1,
      margin: 10,
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    contentText: {
      marginTop: 10,
      fontSize: 12,
    },
  });

  
export default Slide;
