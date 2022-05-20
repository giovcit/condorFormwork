/**
 * Whenever an action has triggered, the state of the application changes.
 * The handling of the application’s state is done by a reducer.
 */
import {
    SET_FCM_TOKEN,
} from './actions';
// import {
//     AUTH_ROLE_USER,
// } from 'react-native-config';

import '../globals';
/**
 * Define the default values of the state
 */
const initialState = {
    fcm: { token: '', device_id: '',device_name:'',device_os:'', timestamp: new Date().getTime(),fid:'' },
};

function FpReducer(state = initialState, action) {
  switch (action.type) {
    
    case SET_FCM_TOKEN:
      return { ...state, fcm: { ...state.fcm, token: action.payload, timestamp: new Date().getTime() } }; 
    default:
      return state;
  }
}

export default FpReducer;
