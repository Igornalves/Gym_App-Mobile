import React from 'react';
import { Center, Text, VStack } from '@gluestack-ui/themed'
import HomeHeader from '@components/HomeHeader';
import Group from '@components/Group';

export default function Home() {
  return (
    <VStack 
      flex={1}
    >
        <HomeHeader/>

        <Group
          name='costas'
        />

    </VStack>
  );
}
