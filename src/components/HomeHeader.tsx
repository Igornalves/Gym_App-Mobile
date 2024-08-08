import React from 'react';
import UserPhoto from './UserPhoto';

import { 
    Heading, 
    HStack, 
    Text, 
    VStack 
} from '@gluestack-ui/themed';

import { MaterialIcons } from '@expo/vector-icons'

import { THEME } from 'src/global/theme/intex';
import { TouchableOpacity } from 'react-native';

export default function HomeHeader() {
  return (
    <HStack 
        flexDirection='row'
        alignItems='center'
        backgroundColor={THEME.colors.gray[600]}
        paddingTop={50}
        paddingRight={25}
        paddingLeft={20}
        paddingBottom={20}
    >
        <TouchableOpacity>
            <UserPhoto
                size={65}
                
                source={{
                    uri: 'https://github.com/igornalves.png'
                }}
                alt='foto de perfil'
            />
        </TouchableOpacity>
        <VStack 
            width={120} 
            marginLeft={15} 
            justifyContent='center'
            flex={1}
            // backgroundColor='red'
        >
            <Text 
                color={THEME.colors.gray[100]}
                fontSize={THEME.fontSizes.md}
                // backgroundColor='red'
            >
                Olá,
            </Text>
            <Heading 
                marginTop={0}
                marginBottom={0}
                color={THEME.colors.gray[100]}
                fontSize={THEME.fontSizes.md}
                // backgroundColor='red'
            >
                Igor Alves
            </Heading>
        </VStack>

        <TouchableOpacity>
            <MaterialIcons 
                name='logout' 
                color={THEME.colors.gray[200]}
                size={35}
            /> 
        </TouchableOpacity>

    </HStack>
  );
}
