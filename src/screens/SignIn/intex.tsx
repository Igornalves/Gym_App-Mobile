import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { AuthNavigatiorRoutesProps } from '@routes/auth.routes'

import { 
  VStack, 
  Image, 
  Text, 
  Center, 
  Heading
} from '@gluestack-ui/themed'

import Logo from '@assets/logo.svg'

import BackGroundImg from '@assets/background.png'

import { THEME } from 'src/global/theme/intex';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { ButtonLine } from '@components/ButtonLine';

import { ScrollView } from 'react-native';

export default function SignIn() {

  const navigation = useNavigation<AuthNavigatiorRoutesProps>();

  function handleNewAccount() {
    navigation.navigate('createUser')
  }

  return (
    <ScrollView 
    contentContainerStyle={{ flexGrow: 1 }}
    showsVerticalScrollIndicator={false}
    >
      <VStack 
        flex={1}
        // backgroundColor={THEME.colors.gray[700]}
      >
        <Image 
          source={BackGroundImg}
          defaultSource={BackGroundImg}
          alt='pessoas treinando para melherar a saude'
          resizeMode='contain'
          position='absolute'
        />

        <Center 
          marginTop={125}
          marginBottom={155}
          alignItems='center'
          justifyContent='center'
        >
          <Logo/>
          <Text
            color={THEME.colors.gray[100]}
            fontSize={12}
          >
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center 
          alignItems='center'
          justifyContent='center'
        >
          <Heading 
            color={THEME.colors.gray[100]}
            fontSize={THEME.fontSizes.xl}
            fontFamily={THEME.fonts.heading}
          >
            Acesse sua conta
          </Heading>

          <Input
            placeholder='Email'
            backgroundColor={THEME.colors.gray[700]}
            keyboardtype='email-address'
            />
          <Input
            placeholder='Senha'
            backgroundColor={THEME.colors.gray[700]}
            secureTextEntry
            />

          <Button
            title='Acessar' 
          />

          <Text
            marginTop={70}
            marginBottom={18}
            fontFamily={THEME.fonts.body}
            color={THEME.colors.gray[100]}
            fontSize={THEME.fontSizes.md}
          >
            Ainda não tem acesso?
          </Text>
          <ButtonLine
            title='Cria conta'
            onPress={handleNewAccount}
          />
      </Center>
      </VStack>
    </ScrollView>
  );
}
