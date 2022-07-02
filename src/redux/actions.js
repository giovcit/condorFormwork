/**
 * Using Redux to manage the state of the whole application, the state itself is represented by one JavaScript object.
_ * This object is read-only which means that manipulation of the state is not done directly.
 * Changes are done by triggering actions.
 */


import { Share } from 'react-native';
//import PushNotification, {Importance} from 'react-native-push-notification';
//import PushNotificationIOS from '@react-native-community/push-notification-ios';

export const SET_FCM_TOKEN = 'SET_FCM_TOKEN';
export const SET_CURRENT_SCREEN = 'SET_CURRENT_SCREEN';
export const LOAD_SOLUZIONI = 'LOAD_SOLUZIONI';
export const LOAD_PRODOTTI = 'LOAD_PRODOTTI';

export const setFcmToken = token => dispatch => {
  console.log('actions setFcmToken', token);
  dispatch({
    type: SET_FCM_TOKEN,
    payload: token,
  });
};

export const loadSoluzioni = categorie => dispatch => {
//console.log('categorie in load soluzioni: '+JSON.stringify(categorie));
dispatch({
  type: LOAD_SOLUZIONI,
  payload:categorie
});
}

export const loadProdotti = prodotti => dispatch => {
  //console.log('prodotti in load prodotti: '+JSON.stringify(prodotti));
  dispatch({
    type: LOAD_PRODOTTI,
    payload:prodotti
  });

}

export const setCurrentScreen = component => dispatch => {
  console.log('actions setScreen', component);
  dispatch({
    type: SET_CURRENT_SCREEN,
    payload: component,
  });
};
