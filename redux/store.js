import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { handleLinkReducer } from "@/redux/reducers/handleLink";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk'


const reducers = combineReducers({
    handleLink: handleLinkReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer ,// Sử dụng persistedReducer làm reducer cho store
});

export const persistor = persistStore(store)