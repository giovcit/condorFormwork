/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {name as appName} from './app.json';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import {Store, Persistor } from './src/redux/store';

const AppWrapper = () => {
    return (
	    <Provider store={Store}>
	    <PersistGate loading={null} persistor={Persistor}>
            <App/>
	    </PersistGate>
	    </Provider>
    );
};

AppRegistry.registerComponent(appName, () => AppWrapper);
