import React from 'react';
import App from './app';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';

export default AppWrapper = () => {
    return (
        <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
        </Provider>
    )
}