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
      id:'s1',
      uri: require('../../../img/slideFacciate.png'),
    },
    {
      id:'s2',
      uri: require('../../../img/slideCasseforme.png'),
    },
    {
      id:'s3',
      uri: require('../../../img/slideProgetti.png'),
    },
    {
      id:'s4',
      uri: require('../../../img/slidePaesi.png'),
    },
    
    
  ];  

  const win = Dimensions.get('window');
  const ratio = win.width / 200;

  const SlideAzienda = () => {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const renderItem = ({item, index}) => {
        const { id,uri } = item;
        return (
          <TouchableOpacity
            activeOpacity={1}
            style={stylesCarousel.item} key={id}>
            <ImageBackground source={uri} style={stylesCarousel.imageBackground}   imageStyle={{ borderRadius: 3}}/>
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
        itemWidth={win.width * 0.7}
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

    container: {
      backgroundColor: '#141518', 
      paddingVertical: 20,
    },
    item: {
      backgroundColor: 'white',
      flex: 1,
      shadowColor: "#000",
    shadowOffset: {
        width: 1,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 0,
      margin:0,
      
    },
    imageBackground: {
      flex: 2,
      paddingTop:win.height/2.3,
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

  
export default SlideAzienda;
