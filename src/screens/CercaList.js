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
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useSelector } from 'react-redux';
import ConsulenzaBar from '../components/utils/components/ConsulenzaBar';
import CustomBottomToolbar from '../components/utils/components/CustomBottomToolbar';
import Fonts from '../components/utils/components/Fonts';
import '../globals';

const win = Dimensions.get('window');
const ratio = win.width / 200;

const CercaList = ({navigation,route}) => {
    
    navigation.setOptions({headerTitle:'Ricerca: '+route.params.cercaString});

    return (
    <SafeAreaView style={{flex:1,backgroundColor:'transparent'}}>
        <ScrollView style={styles.viewStyle}>
           <CercaProdotti props={route.params}/>
           <CercaProgetti props={route.params}/>
           <CercaBlog props={route.params}/>
           <View style={styles.emptySpace}/>
        </ScrollView>
        <ConsulenzaBar/>
        <CustomBottomToolbar/>
    </SafeAreaView>);
    
}

const CercaProdotti = (props) => {
    const { prodotti } =  useSelector(state => state.CoReducer);
    const navigation = useNavigation();
    const { nameProd,cercaString } = props.props;
    navigation.setOptions({title:nameProd});
    
    return (<>
    {prodotti.filter(p => (p.title.rendered.toLowerCase().includes(cercaString.toLowerCase())) || p.content.rendered.toLowerCase().includes(cercaString.toLowerCase())).map((post,index) => (
        <Pressable 
        style={styles.cardContainer} 
        key={post.id}
        onPress={() =>
            navigation.navigate('DettaglioProdotto',{
              dataProdotto:post,
              nameSoluzione:nameProd
            })
            }
        >
        <ImageBackground resizeMode='cover' source={{uri:post.featuredImage}} style={styles.imageBackground}   imageStyle={{ borderRadius: 3}}>
        <Text style={styles.categorySearch}>prodotti</Text>

        <View style={styles.TextContainer}>
            <Text style={styles.leftTextProdotti}>{post.title.rendered}</Text>
            <Image resizeMode='cover' source={{uri:post.iconImage}}style={styles.piantaImage}/>
         </View>
         </ImageBackground>
    </Pressable>))}</>
    );  
}

const CercaProgetti = (props) => {
    const { progetti } =  useSelector(state => state.CoReducer);
    const navigation = useNavigation();
    const { nameProd,cercaString } = props.props;
    navigation.setOptions({title:nameProd});
    
    return (<>
    {progetti.filter(p => (p.title.rendered.toLowerCase().includes(cercaString.toLowerCase())) || p.content.rendered.toLowerCase().includes(cercaString.toLowerCase())).map((post,index) => (
        <Pressable 
        style={styles.cardContainer} 
        key={post.id}
        onPress={() =>
            navigation.navigate('DettaglioProgetto',{
                dataProgetto:post,
                nameSoluzione:'Progetti di rilievo'
            })
            }
        >
        <ImageBackground resizeMode='cover' source={{uri:post.featuredImage}} style={styles.imageBackground}   imageStyle={{ borderRadius: 3}}>
        <Text style={styles.categorySearch}>progetti</Text>

        <View style={styles.TextContainer}>
            <Text style={styles.leftTextProdotti}>{post.title.rendered}</Text>
            <Image resizeMode='cover' source={{uri:post.iconImage}}style={styles.piantaImage}/>
         </View>
         </ImageBackground>
    </Pressable>))}</>
    );  
}

const CercaBlog = (props) => {
    const { blog } =  useSelector(state => state.CoReducer);
    const navigation = useNavigation();
    const { nameProd,cercaString } = props.props;
    navigation.setOptions({title:nameProd});
    
    return (<>
    {blog.filter(p => (p.title.rendered.toLowerCase().includes(cercaString.toLowerCase())) || p.content.rendered.toLowerCase().includes(cercaString.toLowerCase())).map((post,index) => (
        <Pressable 
        style={styles.cardContainer} 
        key={post.id}
        onPress={() =>
            navigation.navigate('DettaglioBlog',{
                dataBlog:post,
                nameSoluzione:'Blog'
            })
            }
        >
        <ImageBackground resizeMode='cover' source={{uri:post.featuredImage}} style={styles.imageBackground}   imageStyle={{ borderRadius: 3}}>
        <Text style={styles.categorySearch}>blog</Text>

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
    emptySpace: {
        height:70
    },
    cardContainer: {
        paddingTop:14,
        paddingLeft:14,
        paddingRight:14,
    },
    piantaImage: {
        width:(innerSpaceCard)/5,
        height:cardHeight-cardHeight/3,
    },
    categorySearch:{
        alignSelf:'flex-end',
        color:'white',
        fontFamily:'OpenSans-Regular',
        fontStyle:'italic',
        fontSize:16,
        marginBottom:(cardHeight/3)-32,
        marginTop:14,
        marginRight:14,
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
        fontSize:Fonts.titleCardList,
        marginBottom:14,
        width:((innerSpaceCard)/5)*4,
        textAlign:'left',
        width:innerSpaceCard,
      },
        imageBackground: {
        flex: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        
      },
})

export default CercaList;