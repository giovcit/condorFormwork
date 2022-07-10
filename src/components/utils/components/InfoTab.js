import React,{useState} from "react";
import { 
    View, 
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from "react-native";
//import for the animation of Collapse and Expand
import * as Animatable from 'react-native-animatable';
//import for the collapsible/Expandable view
import Collapsible from 'react-native-collapsible';
//import for the Accordion view
import Accordion from 'react-native-collapsible/Accordion';
import Colors from "./Colors";
import RenderHtml from "react-native-render-html";
import HtmlStyles from "./HtmlStyles";

const win = Dimensions.get('window');
const marginDettaglio = 16;
const paddingDettaglio = 16;
const innnerDettaglio = win.width-(marginDettaglio*2);


const InfoTab = ({props}) => {
    const [activeSections, setActiveSections] = useState([]);
     // Collapsed condition for the single collapsible
    const [collapsed, setCollapsed] = useState(true);
    // MultipleSelect is for the Multiple Expand allowed
    // True: Expand multiple at a time  
    // False: One can be expand at a time
    const [multipleSelect, setMultipleSelect] = useState(false);

    const toggleExpanded = () => {
    //Toggling the state of single Collapsible
    setCollapsed(!collapsed);
    };

    const setSections = (sections) => {
    //setting up a active section state
    setActiveSections(sections.includes(undefined) ? [] : sections);
    };

    const renderHeader = (section, _, isActive) => {
        //Accordion Header view
        return (
          <Animatable.View
            duration={400}
            style={[styles.header, isActive ? styles.active : styles.inactive]}
            transition="backgroundColor">
            <Text style={[styles.headerText,isActive ? styles.activeTitle :styles.inactiveTitle]}>{section.title}</Text>
          </Animatable.View>
        );
      };
    
      const renderContent = (section, _, isActive) => {
        //Accordion Content view
        return (
          <Animatable.View
            duration={400}
            style={[styles.content, isActive ? styles.active : styles.inactive]}
            transition="backgroundColor">
            <Animatable.View
              animation={isActive ? 'bounceIn' : undefined}
              style={styles.contentTab}>
              <RenderHtml
              source={{html:section.content}}
              contentWidth={innnerDettaglio}
              tagsStyles={HtmlStyles}
              />
            </Animatable.View>
          </Animatable.View>
        );
      };

    console.log('INFO TAB: '+JSON.stringify(props)) ;
    return <>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView style={styles.tabScrollView}>
            {/*Code for Accordion/Expandable List starts here*/}
            <Accordion
            activeSections={activeSections}
            //for any default active section
            sections={props}
            //title and content of accordion
            touchableComponent={TouchableOpacity}
            //which type of touchable component you want
            //It can be the following Touchables
            //TouchableHighlight, TouchableNativeFeedback
            //TouchableOpacity , TouchableWithoutFeedback
            expandMultiple={multipleSelect}
            //Do you want to expand mutiple at a time or single at a time
            renderHeader={renderHeader}
            //Header Component(View) to render
            renderContent={renderContent}
            //Content Component(View) to render
            duration={400}
            //Duration for Collapse and expand
            onChange={setSections}
            //setting the state of active sections
            />
          {/*Code for Accordion/Expandable List ends here*/}
        </ScrollView>
      </View>
    </SafeAreaView>
    </>;
}


export default InfoTab;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 0,
      width:win.width-20,
      marginLeft:-20,
      backgroundColor:Colors.backgroundPrimary,
      paddingTop:20,
      paddingBottom:20

    },
    tabScrollView: {
        paddingLeft:paddingDettaglio*2,
        paddingRight:paddingDettaglio*2,
        backgroundColor:Colors.backgroundPrimary
    },
    contentTab: {
        color:'black'
    },
    title: {
      fontSize: 30,
      fontWeight: '300',
      marginBottom: 20,
      color:'gray',
      textAlign:'left',
      borderBottomColor:'black'
    },
    header: {
      backgroundColor: 'white',
      paddingTop: 15,
      paddingBottom:15,
      borderBottomColor:'black',
      borderBottomWidth:1
    },
    headerText: {
      textAlign: 'left',
      fontSize: 19,
      fontWeight: '500',
      color:'#B2B2B2',
      fontFamily:'SybillaPro-Bold'
      
    },
    content: {
      paddingTop: 20,
      paddingBottom:10
    },
    activeTitle:{
      color:'black'
    },
    active: {
      backgroundColor: Colors.backgroundPrimary,
    },
    inactive: {
      backgroundColor: Colors.backgroundPrimary,
    },
  });
  