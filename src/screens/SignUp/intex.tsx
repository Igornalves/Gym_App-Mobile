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

import { useForm, Controller } from 'react-hook-form'

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

export default function SignUp() {

  const navigation = useNavigation<AuthNavigatiorRoutesProps>();

  function handleGoBack() {
    navigation.goBack()
  }

  const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({
    // defaultValues: {
    //   name: 'igor'
    // }
  });

  function handleSignUp({ email,name,password,password_confirm }:FormDataProps) {
    console.log({ email,name,password,password_confirm })
  }

  return (
    <ScrollView 
    contentContainerStyle={{ flexGrow: 1 }}
    showsVerticalScrollIndicator={false}
    >
      <VStack 
        flex={1}
      >
        <Image 
          source={BackGroundImg}
          defaultSource={BackGroundImg}
          alt='pessoas treinando para melherar a saude'
          resizeMode='contain'
          position='absolute'
        />

        <Center 
          marginTop={100} 
          marginBottom={40}
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
            Crie sua Conta
          </Heading>

          <Controller
            control={control}
            name='name'
            rules={{
              required:'Informe o nome !!!!'
            }}
            render= {({ field: { onChange, value }}) => (
              <Input
                placeholder='Nome'
                backgroundColor={THEME.colors.gray[700]}
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />

          {/* <Text color='white'>
            {errors.name?.message}
          </Text> */}

          <Controller
            control={control}
            name='email'
            rules={{
              required: 'Informe o Email !!!!',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'E-mail Invalido !!!'
              }
            }}
            render= {({ field: { onChange,value }}) => (
              <Input
                placeholder='Email'
                backgroundColor={THEME.colors.gray[700]}
                autoCapitalize='none'
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          {/* <Text color='white'>
            {errors.email?.message}
          </Text> */}

          <Controller
            control={control}
            name='password'
            
            render= {({ field: { onChange,value }}) => (
              <Input
                placeholder='Senha'
                backgroundColor={THEME.colors.gray[700]}
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name='password_confirm'
            render= {({ field: { onChange,value }}) => (
              <Input
                placeholder='Confirmar Senha'
                backgroundColor={THEME.colors.gray[700]}
                secureTextEntry
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType='send'
              />
            )}
          />

          <Button
            title='Cria e acessar' 
            onPress={handleSubmit(handleSignUp)}
          />

          <Center
            marginTop={80}
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
