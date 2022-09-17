import { useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import styles from "./App.scss";

export default function App() {
  const [fontsLoaded] = useFonts({
    'MontserratRegular': require("./src/assets/fonts/Montserrat-Regular.otf"),
    'MontserratLight': require("./src/assets/fonts/Montserrat-Light.otf"),
    'MontserratSemiBold': require("./src/assets/fonts/Montserrat-SemiBold.otf"),
    'MontserratBold': require("./src/assets/fonts/Montserrat-Bold.otf"),
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

  return (
    <View className={styles.container} onLayout={onLayoutRootView}>
      <Text className={styles.text}>Open up App.js to start working on your app</Text>
      <Text>Platform Default</Text>
      <StatusBar style="auto" />
    </View>
  );
}