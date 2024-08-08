import React, { useEffect, useState } from 'react';
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
import ContentLoader from 'react-content-loader/native';
import { Circle, Rect } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationRoutesProps } from '@routes/app.routes';
import { AuthNavigatiorRoutesProps } from '@routes/auth.routes';

export default function HomeHeader() {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
    },[])

    const ProfileScreen = useNavigation<AppNavigationRoutesProps>()

    const SignInScreen = useNavigation<AuthNavigatiorRoutesProps>()

    function InScreenProfile() {
        ProfileScreen.navigate('profile')
    }

    function InScreenSingIn() {
        SignInScreen.navigate('loginUser')
    }

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
            
            <TouchableOpacity
                onPress={InScreenProfile}
            >
                {isLoading ? (
                    <ContentLoader
                        width={65}
                        height={65}
                        backgroundColor='#333'
                        foregroundColor='#999'
                    >
                        <Circle cx={32} cy={32} r={32} />
                    </ContentLoader>
                ):(
                    <UserPhoto
                        size={65}
                        source={{
                            uri: 'https://github.com/igornalves.png'
                        }}
                        alt='foto de perfil'
                    />
                )}
            </TouchableOpacity>


            {isLoading ? (

                <ContentLoader
                    width={500}
                    height={65}
                    backgroundColor='#333'
                    foregroundColor='#999'
                >
                    <Rect x="15" y="35" rx="3" ry="5" width="100" height="20" /> 
                    <Rect x="15" y="10" rx="3" ry="5" width="50" height="20" /> 
                </ContentLoader>

            ):(

                <VStack 
                    width={120} 
                    marginLeft={15} 
                    justifyContent='center'
                    flex={1}
                >
                    <Text 
                        color={THEME.colors.gray[100]}
                        fontSize={THEME.fontSizes.md}
                    >
                        Olá,
                    </Text>
                    <Heading 
                        marginTop={0}
                        marginBottom={0}
                        color={THEME.colors.gray[100]}
                        fontSize={THEME.fontSizes.md}
                    >
                        Igor Alves
                    </Heading>
                </VStack>

            )}

            {isLoading ? (

                <ContentLoader
                    width={500}
                    height={65}
                    backgroundColor='#333'
                    foregroundColor='#999'
                >
                    <Rect x="15" y="35" rx="5" ry="5" width="50" height="20" /> 
                </ContentLoader>

            ):(

                <TouchableOpacity
                    onPress={InScreenSingIn}
                >
                    <MaterialIcons 
                        name='logout' 
                        color={THEME.colors.gray[200]}
                        size={35}
                    /> 
                </TouchableOpacity>

            )}


        </HStack>
    );
}
