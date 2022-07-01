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
import '../globals';

const win = Dimensions.get('window');
const ratio = win.width / 200;

const CardList = () => {
    const [soluzioni,setSoluzioni] = useState([]);  

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
                            console.log(JSON.stringify(newSoluzioni[s].featuredImage))
                    }
            
                    setSoluzioni(newSoluzioni)
    }

   

    useEffect(() => {
            getCategorySoluzioni();        
       }, []);


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