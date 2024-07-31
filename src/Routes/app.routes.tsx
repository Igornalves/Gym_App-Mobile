import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { Platform } from 'react-native';

import Home from '@screens/Home/intex';
import History from '@screens/History/intex';
import Profile from '@screens/Profile/intex';
import Exercices from '@screens/Exercices/intex';

import HomeSvg from '@assets/home.svg'
import HistorySvg from '@assets/history.svg'
import ProfileSvg from '@assets/profile.svg'
import ExerciceSvg from '@assets/body.svg' 

import { THEME } from 'src/global/theme/intex';

type AppRoutes = {
    home: undefined,
    history: undefined,
    profile: undefined,
    exercice: undefined
}

export type AppNavigationRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export default function AppRoutes() {    
     return(
       <Navigator screenOptions={{
            headerShown: false, 
            tabBarShowLabel: false,
            tabBarActiveTintColor: THEME.colors.green[500],
            tabBarInactiveTintColor: THEME.colors.gray[200],
            tabBarStyle: {
                backgroundColor: THEME.colors.gray[600],
                borderTopWidth: 0,
                height: Platform.OS === 'android' ? 'auto' : 96,
                paddingBottom: 32,
                paddingTop: 32
            }
       }}>
           <Screen
               name='home'
               component={Home}
               options={{
                    tabBarIcon: ({ color }) => (
                        <HomeSvg fill={color} width={30} height={30}/>
                    )
               }}
           />
           <Screen
               name='history'
               component={History}
               options={{
                    tabBarIcon: ({ color }) => (
                        <HistorySvg fill={color} width={30} height={30}/>
                    )
               }}
           />
           <Screen
               name='profile'
               component={Profile}
               options={{
                tabBarIcon: ({ color }) => (
                    <ProfileSvg fill={color} width={30} height={30}/>
                )
           }}
           />
           <Screen
               name='exercice'
               component={Exercices}
               options={{
                    tabBarButton: () => null
               }}
           />
       </Navigator>
     );
}
