import React from 'react';
import { VStack } from '@gluestack-ui/themed'
import ScreenHeader from '@components/ScreenHeader';
import HistoryCard from '@components/HistoryCard';

export default function History() {
  return (
    <VStack 
      flex={1}
      // style={{ 
      //   alignItems: 'center', 
      //   justifyContent: 'center'
      // }}
    >
        <ScreenHeader 
          title='Histórico de Exercícios'
        />

        <HistoryCard/>
    </VStack>
  );
}
