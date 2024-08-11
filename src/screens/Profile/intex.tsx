import 
  React, 
  { 
    useEffect, 
    useState 
  } 
from 'react';

import { 
  Center, 
  Heading, 
  Text 
} from '@gluestack-ui/themed'

import ScreenHeader from '@components/ScreenHeader';
import UserPhoto from '@components/UserPhoto';

import * as ImagePicker from 'expo-image-picker'

import { 
  VStack 
} from '@gluestack-ui/themed';

import 
  ContentLoader, 
  {
    Circle, 
  } 
from 'react-content-loader/native';

import { Alert, ScrollView, TouchableOpacity } from 'react-native';
import { THEME } from 'src/global/theme/intex';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export default function Profile() {

  const [isLoading, setIsLoading] = useState(true)
  const [userPhoto, setUserPhoto] = useState('https://github.com/igornalves.png')

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  },[])

  async function handlerUserPhotoSelect() {
    setIsLoading(true)
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4,4],
        allowsEditing: true,
        // base64: true
      })
      // console.log(photoSelected)
      
      function canceladPhoto() {
        if (photoSelected.canceled) {
          return;
        }
      }
  
      function photoSelectedUser() {
        if (photoSelected.assets && photoSelected.assets.length > 0) {
          return setUserPhoto(photoSelected.assets[0].uri);
        }
      }
  
      Alert.alert("Alteracao de Foto","Tem certeza da sua alteracao de foto do perfil",[
        {
          text: "Cancelar",
          onPress: () => console.log('Cancelada a alteracao da foto: ', canceladPhoto()),
          style: 'cancel'
        },
        {
          text: "Ok",
          onPress: () => console.log(' alteracao enviada com sucesso, informacoes abaixo:\n',  photoSelectedUser()),
          style: 'default'
        },
      ])
      
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }

  }

  return (
    <VStack
      flex={1}
    >
      <ScreenHeader
        title='Perfil'
      />

      <ScrollView>

        <Center
          alignItems='center'
          marginTop={25}
        >

          { isLoading ? (
            <ContentLoader
              width={150}
              height={150}
              backgroundColor='#333'
              foregroundColor='#999'
            >
              <Circle cx={75} cy={75} r={75} />
            </ContentLoader>
          ) : (
            <UserPhoto
              size={150}
              source={{
                uri: userPhoto
              }}
              alt='foto de perfil'
            />
          )}
          
          <TouchableOpacity onPress={handlerUserPhotoSelect}>
              <Text 
                color={THEME.colors.green[500]} 
                fontWeight="bold"
                fontSize={THEME.fontSizes.md}
                marginTop={14}
                marginBottom={15}
              >
                Alterar a foto
              </Text>
          </TouchableOpacity>

          <Input
            placeholder='Nome'
            backgroundColor={THEME.colors.gray[600]}
          />

          <Input
            placeholder='igornalves@gmail.com'
            backgroundColor={THEME.colors.gray[600]}
            isDisabled
          />

        </Center>

        <VStack 
          alignItems='center'
          marginTop={12}
          marginBottom={9}
        >
          <Heading
            marginTop={0}
            marginLeft={32}
            alignSelf='flex-start'
            marginBottom={10}
            color={THEME.colors.gray[200]}
            fontSize={THEME.fontSizes.md}
          >
            Alterar senha
          </Heading>

          <Input 
            placeholder={'Senha Antiga'}  
            backgroundColor={THEME.colors.gray[600]}   
            secureTextEntry
          />
          <Input 
            placeholder={'Senha Nova'}  
            backgroundColor={THEME.colors.gray[600]}   
            secureTextEntry
          />
          <Input 
            placeholder={'Confirme a Nova Senha'}  
            backgroundColor={THEME.colors.gray[600]}   
            secureTextEntry
          />

          <Button
            title='Atualizar'
            marginTop={10}
            marginBottom={30}
          />

        </VStack>
      </ScrollView>
    </VStack>
  );
}