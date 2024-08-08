import React, { useState } from 'react';
import { Heading, Text, VStack } from '@gluestack-ui/themed'
import ScreenHeader from '@components/ScreenHeader';
import HistoryCard from '@components/HistoryCard';
import { SectionList } from 'react-native';
import { THEME } from 'src/global/theme/intex';

export default function History() {

  const [exercises, setExercises] = useState([
    {
      title: '26.08.22',
      data: ['Puxada frontal', 'Remada unilateral'],
    },
    {
      title: '27.08.22',
      data: ['Puxada frontal'],
    },
  ]);

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

      <SectionList
        sections={exercises}
        keyExtractor={item => item}     
        renderItem={({ item }) => (
          <HistoryCard/>
        )}   
        renderSectionHeader={({ section }) => (
          <Heading
            marginBottom={8}
            marginTop={25}
            color={THEME.colors.gray[200]}
            fontSize={THEME.fontSizes.md}
          >
            {section.title}
          </Heading>
        )}
        style={{ paddingHorizontal: 20 }}
        contentContainerStyle={exercises.length === 0 && {flex: 1, justifyContent: 'center', alignItems: 'center'}}
        ListEmptyComponent={() => (
            <Text
              color={THEME.colors.gray[100]}
            >
              Nao ha exercicios registrados ainda. {'\n     '}
              Vamos fazer exercicios Hoje ?
            </Text>
        )}
      />
    </VStack>
  );
}
