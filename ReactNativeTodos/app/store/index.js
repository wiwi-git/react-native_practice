import AsyncStorage from "@react-native-community/async-storage";
import { combineReducers,configureStore } from "@reduxjs/toolkit";
import {persistReducer,persistStore} from "redux-persist";
import todoReducer from './todo';


const todoPersistConfig = {
    key: 'todo',
    debug: true,
    storage: AsyncStorage
};

const reducers = combineReducers({
    todo: persistReducer(todoPersistConfig, todoReducer),
});

export const store = configureStore({
    reducer:reducers
})

export const persistor = persistStore(store);