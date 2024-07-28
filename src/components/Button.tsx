import React from 'react';
import { THEME } from 'src/global/theme/intex';

import {
    Button as ButtonBase, 
    ButtonText 
} from '@gluestack-ui/themed';

interface Props {
    title: string
}

export function Button({ title }: Props) {
  return (
    <ButtonBase
        height={65}
        width={320}
        borderRadius={10}
        alignItems='center'
        $active-backgroundColor={THEME.colors.green[500]}
        justifyContent='center'
        backgroundColor={THEME.colors.green[700]}
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
