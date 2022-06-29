/**
 * A store is an object that brings actions and reducers together.
 * It provides and holds state at the application level instead of individual components.
 */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import FpReducer from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['fcm','screen'],
};

const rootReducer = combineReducers({ FpReducer: persistReducer(persistConfig, FpReducer) });

/**
 * Middlewares extends store abilities and lets you to write async logic
 * that interacts with the store.
 * thunk are the recommended middleware for basic redux side effects logic
 * including complex synchronous logic that needs access to the store
 * and simple sync logic like ajax requests
 */
export const Store = createStore(rootReducer, applyMiddleware(thunk));
export const Persistor = persistStore(Store);
