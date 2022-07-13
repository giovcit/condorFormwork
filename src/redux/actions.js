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
export const LOAD_PROGETTI = 'LOAD_PROGETTI';
export const LOAD_BLOG = 'LOAD_BLOG';
export const SET_CURRENT_LANG = 'SET_CURRENT_LANG';


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

export const loadProgetti = progetti => dispatch => {
  //console.log('prodotti in load prodotti: '+JSON.stringify(prodotti));
  dispatch({
    type: LOAD_PROGETTI,
    payload:progetti
  });
}

export const loadBlog = blog => dispatch => {
  //console.log('blog in load blog: '+JSON.stringify(blog));
  dispatch({
    type: LOAD_BLOG,
    payload:blog
  });
}

export const setCurrentLang = lang => dispatch => {
  //console.log('lang to set: '+JSON.stringify(lang));
  dispatch({
    type: SET_CURRENT_LANG,
    payload:lang
  });
}

export const setCurrentScreen = component => dispatch => {
  console.log('actions setScreen', component);
  dispatch({
    type: SET_CURRENT_SCREEN,
    payload: component,
  });
};

// action to show / hide AR Initialization UI to guide user to move device around                                                                                                                          
export function ARTrackingInitialized(trackingNormal) {
  return {
    type: 'AR_TRACKING_INITIALIZED',
    trackingNormal: trackingNormal,
  };
}
