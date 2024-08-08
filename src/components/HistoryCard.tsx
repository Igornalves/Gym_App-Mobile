import React from 'react';

import { 
  Heading, 
  HStack, 
  Text, 
  VStack 
} from '@gluestack-ui/themed';

import { THEME } from 'src/global/theme/intex';

export default function HistoryCard() {
  return (
    <HStack
      width="auto"
      marginBottom={15}
      padding={17}
      borderRadius={10}
      flexDirection='row'
      alignItems='center'
      justifyContent='space-between'
      backgroundColor={THEME.colors.gray[600]}
    >
      <VStack 
        marginRight={10}
      >
          <Heading
            marginBottom={0}
            marginTop={0}
            color='white'
            fontSize={THEME.fontSizes.md}
            textTransform='capitalize'
          >
            Costas
          </Heading>

          <Text 
            color={THEME.colors.gray[100]}
            fontSize={THEME.fontSizes.lg}
            numberOfLines={1}
          >
            Puxada frontal
          </Text>
      </VStack>

      <Text 
        color={THEME.colors.gray[300]}
        fontSize={THEME.fontSizes.md}
      >
        08:56
      </Text>

    </HStack>
  );
}
