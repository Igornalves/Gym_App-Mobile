import { 
     NavigationContainer, 
     DefaultTheme 
} from '@react-navigation/native';

import React from 'react';

import { THEME } from 'src/global/theme/intex';
import { Box } from '@gluestack-ui/themed';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Routes() {

     const theme = DefaultTheme;
     theme.colors.background= THEME.colors.gray[700]

     return(
          // para garantir quee nao tenho um glit na transicao de uma tela para outra 
          <Box flex={1} backgroundColor={THEME.colors.gray[700]}>
               <NavigationContainer>
                    <AuthRoutes/>
               </NavigationContainer>
          </Box>
     );
}

