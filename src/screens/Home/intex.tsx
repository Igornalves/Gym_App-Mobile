import React, { useState } from 'react';

import { 
  Heading, 
  HStack, 
  Text, 
  VStack 
} from '@gluestack-ui/themed'

import HomeHeader from '@components/HomeHeader';
import Group from '@components/Group';
import ExerciseCard from '@components/ExerciseCard';

import { FlatList, View } from 'react-native';
import { THEME } from 'src/global/theme/intex';


export default function Home() {

  const [group, setGroup] = useState(['Costas', 'Biceps','Triceps','ombro'])
  const [exercises, setExercise] = useState(['Puxada frontal', 'Remada curvada','Remada unilateral','Levantamento terra'])
  const [groupSelected, setGroupSelected] = useState('Costas')

  return (
    <VStack 
      flex={1}
      // backgroundColor='red'
    >
      <HomeHeader/>

      <FlatList 
        data={group}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Group
          name={item}
          isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
          onPress={() => setGroupSelected(item)} 
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginHorizontal: 20,
          marginVertical: 25,
          paddingRight: 50,
          // backgroundColor: "red"
        }}
        style={{maxHeight: 100}}
      />

      <View style={{ flex: 1, marginTop: 0, paddingTop: 0 }}>
        
        <HStack  
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          paddingHorizontal={30}
          // paddingBottom={0}
          // paddingTop={0}
          // marginTop={0}
        >
          <Heading 
            color={THEME.colors.gray[200]}
            fontSize={THEME.fontSizes.md}
          >
            Exercicios
          </Heading>
          <Text 
            color={THEME.colors.gray[200]}
            fontSize={THEME.fontSizes.md}
          >
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <ExerciseCard/>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 50,
            marginTop: 0,
            paddingHorizontal: 27
          }}
        />
      </View>

    </VStack>
  );
}
