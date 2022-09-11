import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { MembersPage } from './app/pages/MembersPage';
import { ProfilePage } from './app/pages/ProfilePage';
import { SettingsPage } from './app/pages/SettingsPage';
import { ROUTES } from './app/utils/router/router';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import logo from './assets/logo192.png';
import { useCallback, useEffect, useState } from 'react';
import { gStyles } from './assets/styles/gStyles';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          exo2: require('./assets/styles/fonts/Exo2-VariableFont_wght.ttf'),
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={gStyles.main}>
      <NativeRouter>
        <Routes>
          <Route path={ROUTES.members} element={<MembersPage />} />
          <Route path={ROUTES.profile} element={<ProfilePage />} />
          <Route path={ROUTES.settings} element={<SettingsPage />} />
        </Routes>

        {/* <View style={styles.container}>
        <Image source={logo} style={{ width: 192, height: 192 }} />
        <Text style={{ color: '#000' }}>Hello, World!!!</Text>
        <StatusBar style="auto" />
        <TouchableOpacity
          onPress={() => alert('Hello, world!')}
          style={{ backgroundColor: 'blue' }}
        >
          <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo!!</Text>
        </TouchableOpacity>
      </View> */}
      </NativeRouter>
    </View>
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
