import React from 'react';

import { GluestackUIProvider } from '@gluestack-ui/themed';

import { 
  Text, 
  StatusBar
} from 'react-native';

import * as SplashScreen from 'expo-splash-screen'

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import SignIn from '@screens/SignIn/intex';
import SignUp from '@screens/SignUp/intex';

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
      <SignUp/>
      {/* <Loading/> */}
    </GluestackUIProvider>
  );
}


