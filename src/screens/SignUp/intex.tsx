import React from 'react';

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
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatiorRoutesProps } from '@routes/auth.routes';

export default function SignUp() {

  const navigation = useNavigation<AuthNavigatiorRoutesProps>();

  function handleGoBack() {
    navigation.goBack()
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
          marginTop={130} 
          marginBottom={95}
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
            placeholder='Nome'
            backgroundColor={THEME.colors.gray[700]}
            keyboardtype='default'
          />
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
            title='Cria e acessar' 
          />

          <Center
            marginTop={100}
          >
            <ButtonLine
              title='Voltar para o Login'
              onPress={handleGoBack}
            />
          </Center>

      </Center>
      </VStack>
    </ScrollView>
  );
}
