import React from 'react';

import { GluestackUIProvider } from '@gluestack-ui/themed';

import { 
  Text, 
  StatusBar
} from 'react-native';

import * as SplashScreen from 'expo-splash-screen'

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Routes from '@routes/intex';
import Home from '@screens/Home/intex';

SplashScreen.preventAutoHideAsync();

export default function App() {

 const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if(!fontsLoaded){
    return console.log('Fontes nao carragadas por completo ')
  } else {
    SplashScreen.hideAsync();
    console.log('fontes estao carregadas !!!')
  }

  return (
    <GluestackUIProvider>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Routes/>
    </GluestackUIProvider>
  );
}


