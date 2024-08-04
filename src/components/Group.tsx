import React from 'react';
import { Text, Pressable } from '@gluestack-ui/themed';
import { TouchableOpacityProps } from 'react-native';
import { THEME } from 'src/global/theme/intex';

type Props = TouchableOpacityProps & {
  name: string
  isActive: boolean
}

export default function Group({ name, isActive ,...rest }: Props) {
  return (
    <Pressable
      alignItems='center'
      justifyContent='center'
      marginRight={10}
      marginLeft={5}
      width={104}
      height={50}
      borderRadius={8}
      backgroundColor={THEME.colors.gray[600]}
      overflow='hidden'
      borderColor={isActive ? THEME.colors.green[500] : 'transparent'}
      borderWidth={isActive ? 1 : 0}
      {...rest}
      // $active-borderColor={THEME.colors.green[500]}
      // $active-borderWidth={1}
      // $active-backgroundColor={THEME.colors.green[500]}
    >
      <Text
          color={ isActive ? THEME.colors.green[500] : THEME.colors.gray[200]}
          textTransform='uppercase'
          fontSize={THEME.fontSizes.xs}
          fontWeight={'bold'}
      >
          {name}
      </Text>
    </Pressable>
  );
}
