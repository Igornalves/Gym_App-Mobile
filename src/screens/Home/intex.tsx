import React from 'react';
import { Center, Text } from '@gluestack-ui/themed'

export default function Home() {
  return (
    <Center 
      flex={1}
      style={{ 
        alignItems: 'center', 
        justifyContent: 'center'
    }}>
        <Text color='white'>
          Home
        </Text>
    </Center>
  );
}
