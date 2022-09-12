import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { persistReducer } from 'redux-persist';
import { GSAPI } from './GSApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistUserConfig = {
  key: 'KKUser',
  storage: AsyncStorage,
  whitelist: ['authorization'],
};

const persistedUserReducer = persistReducer(persistUserConfig, authReducer);

export const createStore = () =>
  configureStore({
    reducer: {
      authorization: persistedUserReducer,
      [GSAPI.reducerPath]: GSAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(GSAPI.middleware),
  });
