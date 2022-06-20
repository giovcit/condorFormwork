/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {Node} from 'react';
import { StyleSheet, Image,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import CardList from './src/screens/CardsList';
import Lang from './src/screens/Lang';
import TopBar from './src/components/utils/components/TopBar';
import Menu from './src/components/utils/components/Menu';

const Stack = createStackNavigator();

const App = ({ navigation }) => {
  return (
    
    <NavigationContainer>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        <Stack.Navigator
        screenOptions={
          {...TopBar,
            headerRight: () => (<Menu/>),
            headerBackImage: () => <Image source={require('./src/img/back-icon.png')} style={{marginLeft:5,width:10,height:20}} />,
            }}>
        <Stack.Screen
            name="Lang"
            component={Lang}
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
            name="CardList"
            component={CardList}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
