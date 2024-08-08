import React from 'react';
import { VStack } from '@gluestack-ui/themed'

import { Feather } from '@expo/vector-icons'

import { TouchableOpacity } from 'react-native';
import { THEME } from 'src/global/theme/intex';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationRoutesProps } from '@routes/app.routes';

export default function Exercices() {

  const rollBack = useNavigation<AppNavigationRoutesProps>()

  function RollBackScreeen() {
    rollBack.navigate('home')
  }

  return (
    <VStack 
      flex={1}
    >
        <VStack 
          backgroundColor={THEME.colors.gray[600]}
          paddingHorizontal={20}
          paddingVertical={50}
          // paddingTop={50}
          // paddingRight={25}
          // paddingLeft={20}
          // paddingBottom={20}
        >
          <TouchableOpacity onPress={RollBackScreeen}>
            <Feather
              name='arrow-left'
              color={THEME.colors.green[500]}
              size={35}
            />
          </TouchableOpacity>

          

        </VStack>
    </VStack>
  );
}