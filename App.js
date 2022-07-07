/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import CardList from './src/screens/CardsList';
import Lang from './src/screens/Lang';
import Prodotti from './src/screens/Prodotti'
import TopBar from './src/components/utils/components/TopBar';
import Hamburger from './src/components/utils/components/Hamburger';
import Menu from './src/components/utils/components/Menu';
import DettaglioProdotto from './src/screens/DettaglioProdotto';
import Progetti from './src/screens/Progetti';
import DettaglioProgetto from './src/screens/DettaglioProgetto';
import Azienda from './src/screens/Azienda';
import JustScaff from './src/screens/JustScaff';
import Blog from './src/screens/Blog';
import DettaglioBlog from './src/screens/DettaglioBlog';
const Stack = createStackNavigator();

const App = ({ navigation }) => {
console.log(navigation);  
  return (
    
    <NavigationContainer>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        <Stack.Navigator
        screenOptions={
          {...TopBar,
            headerRight: () => (<Hamburger/>),
            headerBackImage: () => <Image resizeMode='cover' source={require('./src/img/back-icon.png')} style={{marginLeft:5,width:10,height:20}} />,
            }}>
        <Stack.Screen
            name="Lang"
            component={Lang}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{ headerShown: false }}
          />
        <Stack.Screen
            name="Home"
            component={Home}
            options={
              ({ route }) => (
                { 
                  title: 'Benvenuto',
                }
              )
            }
            
          />
          <Stack.Screen
            name="Azienda"
            component={Azienda}
          />
          <Stack.Screen
            name="JustScaff"
            component={JustScaff}
          />
          <Stack.Screen
            name="CardList"
            component={CardList}
            options={
              ({ route }) => (
                { 
                  title: 'Soluzioni',
                }
              )
            }
          />
          <Stack.Screen
            name="Prodotti"
            component={Prodotti}
          />
          <Stack.Screen
            name="DettaglioProdotto"
            component={DettaglioProdotto}
          />
          <Stack.Screen
            name="Progetti"
            component={Progetti}
          />
          <Stack.Screen
            name="DettaglioProgetto"
            component={DettaglioProgetto}
          />
          <Stack.Screen
            name="Blog"
            component={Blog}
          />
          <Stack.Screen 
            name="DettaglioBlog"
            component={DettaglioBlog}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
