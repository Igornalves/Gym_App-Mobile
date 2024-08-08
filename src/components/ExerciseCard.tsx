import { 
  Heading, 
  HStack, 
  Image, 
  VStack,
  Text,
} from '@gluestack-ui/themed';

import React from 'react';

import { 
  TouchableOpacity, 
  TouchableOpacityProps 
} from 'react-native';

import { Entypo } from '@expo/vector-icons'

import { THEME } from 'src/global/theme/intex';

type Props = TouchableOpacityProps & { 
};

export default function ExerciseCard({...rest}: Props) {
  return (
   <TouchableOpacity>
    <HStack
      flexDirection='row'
      alignItems='center'
      backgroundColor={THEME.colors.gray[500]}
      padding={15}
      borderRadius={THEME.fontSizes.md}
      marginBottom={20}
    >
      <Image
        source={{  uri: 'https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg'}}
        alt='Image de exercicio'
        width={60}
        height={60}
        borderRadius={THEME.fontSizes.md}
        marginRight={10}
        resizeMode='center'
      />

      <VStack flex={1}>
        <Heading 
          fontSize={THEME.fontSizes.lg}
          color={THEME.colors.white}
          marginBottom={0}
          marginTop={0}
        >
          Remada unilateral
        </Heading>
        <Text
          fontSize={THEME.fontSizes.sm}
          color={THEME.colors.gray[200]}
          numberOfLines={2}
        >
          3 séries x 12 repetições 
        </Text>
      </VStack>

      <Entypo 
        name='chevron-thin-right'
        color={THEME.colors.gray[300]}
        size={THEME.fontSizes.md}
      />

    </HStack>
   </TouchableOpacity>
  );
}
