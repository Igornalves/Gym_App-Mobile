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

import { Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatiorRoutesProps } from '@routes/auth.routes';

import { useForm, Controller } from 'react-hook-form'

import * as yup from 'yup'
import  { yupResolver } from '@hookform/resolvers/yup'

import axios from 'axios';

import { api } from '@services/Api';

// tipagem para receber os dados neceessarios
type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

// cirando o objeto que sera importante para definir como vai ser a validacoes do nossos campos do formulario
const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().required('Informe o seu Email').email('E-mail Invalido'),
  password: yup.string().required('Informe a senha').min(6, 'a senha deve ter pelo menos 6 caracteres'),
  password_confirm: yup.string().required('Confirme a senha.').oneOf([yup.ref('password')],'confirmacao da senha nao confere')
})

export default function SignUp() {

  // criando uma constantee para navegacao entre paginas do login
  const navigation = useNavigation<AuthNavigatiorRoutesProps>();

  function handleGoBack() {
    navigation.goBack()
  }

  const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
    // posso passa para ele os valores padroes no input atraves da propriedade 
    // defaultValues: {
    //   name: 'igor'
    // }
  });

  async function handleSignUp({ email,name,password }:FormDataProps) {
    try {
      const response = await api.post('/users', {
        name,
        email,
        password
      })
      console.log(response.data)
    } catch(error) {
      // trantando o erro de forma completa verificando o erro do Axios para mostra a mensagem para o cliente da Aplicacao
      if (axios.isAxiosError(error)) {
        Alert.alert(error.response?.data.message,'Troque o E-mail para que voce possa estar se cadastrando no sistema')
      }
    }

    // formato para fazer reequisicoes usando o Fetch API do proprio JavaScript
    // console.log({ email,name,password })
    // const response = await fetch('http://192.168.0.104:3333/users', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     password
    //   })
    // })
    // const data = await response.json();
    // console.log(data);
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
                errorMessage={errors.password_confirm?.message}
              />
            )}
          />

          <Button
            title='Cria e acessar' 
            onPress={handleSubmit(handleSignUp)}
            marginTop={15}

          />

          <Center
            marginTop={70}
            marginBottom={30}
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
