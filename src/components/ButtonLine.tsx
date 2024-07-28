import React from 'react';
import { THEME } from 'src/global/theme/intex';

import {
    Button as ButtonBase, 
    ButtonText 
} from '@gluestack-ui/themed';

interface TypeButton {
    title: string
}

export function ButtonLine({ title }:TypeButton) {
  return (
    <ButtonBase
        height={65}
        width={320}
        borderRadius={10}
        alignItems='center'
        $active-backgroundColor={THEME.colors.gray[500]}
        justifyContent='center'
        borderColor={THEME.colors.green[500]}
        borderWidth={1}
    >
        <ButtonText
            color={THEME.colors.green[700]}
            fontFamily={THEME.fonts.heading}
            fontSize={THEME.fontSizes.sm}
        >
            {title}
        </ButtonText>
    </ButtonBase>
  );
}
