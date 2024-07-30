import React from 'react';
import { Center, Text } from '@gluestack-ui/themed'

export default function Profile() {
  return (
    <Center 
      flex={1}
      style={{ 
        alignItems: 'center', 
        justifyContent: 'center'
    }}>
        <Text color='white'>
          Profile
        </Text>
    </Center>
  );
}