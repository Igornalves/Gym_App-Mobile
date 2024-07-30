import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

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
    const { sizes } = THEME;

    const iconSize = sizes[14];

     return(
       <Navigator screenOptions={{
            headerShown: false, 
            tabBarShowLabel: false
       }}>
           <Screen
               name='home'
               component={Home}
               options={{
                    tabBarIcon: ({ color }) => (
                        <HomeSvg fill={color} width={iconSize} height={iconSize}/>
                    )
               }}
           />
           <Screen
               name='history'
               component={History}
           />
           <Screen
               name='profile'
               component={Profile}
           />
           <Screen
               name='exercice'
               component={Exercices}
           />
       </Navigator>
     );
}
