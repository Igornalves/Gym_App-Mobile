import React from 'react';
import { THEME } from 'src/global/theme/intex';

import {
    Button as ButtonBase, 
    ButtonText 
} from '@gluestack-ui/themed';

import { ButtonProps } from 'react-native';

interface Props extends ButtonProps {
    title: string
    marginBottom?: number
    marginTop?: number
    marginLeft?: number
    marginRight?: number
}

export function Button({ title, marginTop, marginBottom, marginLeft, marginRight,...rest}: Props) {
  return ( 
    <ButtonBase
        height={65}
        width={320}
        borderRadius={10}
        marginBottom={marginBottom}
        marginTop={marginTop}
        marginLeft={marginLeft}
        marginRight={marginRight}
        alignItems='center'
        $active-backgroundColor={THEME.colors.green[500]}
        justifyContent='center'
        backgroundColor={THEME.colors.green[700]}
        {...rest}
    >
        <ButtonText
            color={THEME.colors.gray[100]}
            fontFamily={THEME.fonts.heading}
            fontSize={THEME.fontSizes.sm}
        >
            {title}
        </ButtonText>
    </ButtonBase>
  );
}
