import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { MembersPage } from './app/pages/MembersPage';
import { ProfilePage } from './app/pages/ProfilePage';
import { SettingsPage } from './app/pages/SettingsPage';
import { ROUTES } from './app/utils/router/router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import logo from './assets/logo192.png';
import { useCallback, useEffect, useState } from 'react';
import { gStyles } from './assets/styles/gStyles';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createStore } from './app/redux';
import { persistStore } from 'redux-persist';
import { AuthPage } from './app/pages/AuthPage';
import { ProtectedRoutes } from './app/utils/router/ProtectedRoutes';
import { OnboardingPage } from './app/pages/OnboardingPage';
import { Typography } from './app/components/UI/Typography';
import { SignUpPage } from './app/pages/SignUpPage';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'exo-bold': require('./assets/styles/fonts/Exo2-Bold.ttf'),
    'exo-light': require('./assets/styles/fonts/Exo2-Light.ttf'),
    'exo-medium': require('./assets/styles/fonts/Exo2-Medium.ttf'),
    'exo-regular': require('./assets/styles/fonts/Exo2-Regular.ttf'),
    'exo-thin': require('./assets/styles/fonts/Exo2-Thin.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const store = createStore(); // Possible additional params to store init func
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View onLayout={onLayoutRootView} style={gStyles.main}>
          {/* <Typography>goScience!!</Typography> */}
          <NativeRouter>
            <Routes>
              <Route path={ROUTES.auth} element={<AuthPage />} />
              <Route path={ROUTES.signup} element={<SignUpPage />} />
              <Route path={ROUTES.onboard} element={<OnboardingPage />} />
              <Route element={<ProtectedRoutes />}>
                <Route path={ROUTES.members} element={<MembersPage />} />
                <Route path={ROUTES.profile} element={<ProfilePage />} />
                <Route path={ROUTES.settings} element={<SettingsPage />} />
              </Route>
            </Routes>
          </NativeRouter>
        </View>
      </PersistGate>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
