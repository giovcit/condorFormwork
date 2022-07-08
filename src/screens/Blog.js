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
import RenderHtml from 'react-native-render-html';
import '../globals';

const win = Dimensions.get('window');
const ratio = win.width / 200;

const Blog = ({navigation,route}) => {


    //console.log('blog IN CARD: '+JSON.stringify(blog));

   return (
    <SafeAreaView style={{flex:1,backgroundColor:'transparent'}}>
        <ScrollView style={styles.viewStyle}>
           <Feed/>
           <View style={styles.emptySpace}/>
        </ScrollView>
        <ConsulenzaBar/>
        <CustomBottomToolbar/>
    </SafeAreaView>);
    
}

const Feed = () => {
    const { blog } =  useSelector(state => state.CoReducer);
    const navigation = useNavigation();
    //console.log('FEED BLOG: '+blog);
    return (<>
    {blog.map((post,index) => (
        <Pressable 
        onPress={() =>
            navigation.navigate('DettaglioBlog',{
              lang:'it',
              dataBlog:post,
              nameSoluzione:'Blog'
            })
            }
        style={styles.cardContainer} key={post.id}>
        <Image resizeMode='cover' source={{uri:post.featuredImage}} style={styles.imageBackground}   imageStyle={{ borderRadius: 3}}/>
        <View style={styles.TextContainer}>
            <Text style={styles.leftText}>{post.title.rendered}</Text>
            <Text style={styles.dateBlog}>{post.date}</Text>
            <RenderHtml
              source={{html:post.excerpt.rendered}}
              contentWidth={innerSpaceCard}
              tagsStyles={stylesHtml}
              />
            <View style={styles.containerMore}>
                <Text style={styles.moreBlog}>Continua </Text><Image resizeMode='contain' source={require('../img/moreIcon.png')} style={styles.moreImage}/>
            </View>
         </View>
    </Pressable>))}</>
    );
}


const innerSpaceCard = win.width-28-28;
const cardHeight = win.width/3;


const stylesHtml = {
    p: {color:'#B2B2B2',
    fontSize:18,
    fontFamily:'OpenSans-MediumItalic',
    fontStyle:'italic',
    margin:0
    },
    a: {
        color:'transparent',
        height:1,
        margin:'0',
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        marginBottom:14
    },
    emptySpace: {
        height:70
    },
    containerMore:{
        width:innerSpaceCard,
        flexDirection:'row',
        alignItems:'center'
    },
    cardContainer: {
        paddingTop:14,
        paddingLeft:14,
        paddingRight:14
    },
    excerptBlog: {
        color:'#B2B2B2',
        fontSize:18,
        fontFamily:'OpenSans-MediumItalic',
        fontStyle:'italic'
    },
    moreBlog: {
        color:'black',
        marginTop:23,
        marginBottom:25,
        fontFamily:'SybillaPro-Bold',
        fontSize:20,
        //width:((innerSpaceCard/5)*3),
    },
    moreImage: {
        width:13,
        height:22,
        marginLeft:10
    },
    TextContainer: {
        marginLeft:14,
        width:innerSpaceCard,
        borderBottomColor:'#B2B2B2',
        borderBottomWidth:1,
        marginTop:20,
        marginBottom:16,//+14 = 30
      },
      dateBlog: {
        color:'#B2B2B2',
        marginTop:15,
        marginBottom:15,
        fontSize:12,
        fontFamily:'OpenSans-MediumItalic',
        fontStyle:'italic'


      },
      leftText: {
        color: 'black',
        fontFamily:'SybillaPro-Bold',
        fontSize:22,
        width:innerSpaceCard,
        textAlign:'left'
        },
        imageBackground: {
        flex: 1,
        height:win.width/2.2,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        elevation: 15,
      },
})

export default Blog;