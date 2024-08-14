import React from 'react';
import { Heading, HStack, VStack, Text, Image, Box } from '@gluestack-ui/themed'

import { Feather } from '@expo/vector-icons'

import { ScrollView, TouchableOpacity } from 'react-native';
import { THEME } from 'src/global/theme/intex';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationRoutesProps } from '@routes/app.routes';

import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionsSvg from '@assets/repetitions.svg'
import { Button } from '@components/Button';

export default function Exercices() {

  const rollBack = useNavigation<AppNavigationRoutesProps>()

  function RollBackScreeen() {
    rollBack.navigate('home')
  }

  return (
    <VStack 
      flex={1}
    >
        <VStack 
          backgroundColor={THEME.colors.gray[600]}
          paddingHorizontal={25}
          paddingVertical={50}
          // paddingTop={50}
          // paddingRight={25}
          // paddingLeft={20}
          paddingBottom={30}
        >
          <TouchableOpacity onPress={RollBackScreeen}>
            <Feather
              name='arrow-left'
              color={THEME.colors.green[500]}
              size={35}
            />
          </TouchableOpacity>

          <HStack 
            flexDirection='row'
            alignItems='center'
            justifyContent='space-between'
            marginTop={15}
            marginBottom={0}
          >
            <Heading
              marginBottom={0}
              marginTop={0}
              color={THEME.colors.gray[100]}
              fontFamily={THEME.fonts.heading}
              flexShrink={1}
            >
              Puxada Frontal
            </Heading>

            <HStack
              flexDirection='row'
              alignItems='center'
            >

              <BodySvg/>

              <Text 
                color={THEME.colors.gray[200]}
                marginLeft={2}
                textTransform='capitalize'
              >
                Costas
              </Text>

            </HStack>
          </HStack>

        </VStack>

      <ScrollView>  
        <VStack 
          paddingTop={30}
        >
          <HStack alignItems='center'>
            <Image
              width={335}
              height={335}
              source={{ uri: 'https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg' }}
              alt='foto do exercicio'
              marginBottom={15}
              borderRadius={THEME.fontSizes.lg}
              resizeMode='cover'
              overflow='hidden'
            />
          </HStack>

          <Box 
            backgroundColor={THEME.colors.gray[600]}
            borderRadius={10}
            marginHorizontal={20}
            marginBottom={25}
          >
            <HStack 
              flexDirection='row'
              justifyContent='space-around'
              alignItems='center'
              marginTop={20}
              marginBottom={20}
            >
              <HStack flexDirection='row'>
                <SeriesSvg/>
                <Text 
                  color={THEME.colors.gray[200]}
                  marginLeft={10}
                >
                  3 séries 
                </Text>
              </HStack>

              <HStack flexDirection='row'>
                <RepetitionsSvg/>
                <Text 
                  color={THEME.colors.gray[200]}
                  marginLeft={10}
                >
                  3 séries 
                </Text>
              </HStack>
            </HStack>

            <HStack alignItems='center' marginBottom={20}>
              <Button 
                title={'Marcar como realizada'}
              />
            </HStack>
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}