import { Center, Heading } from '@gluestack-ui/themed';
import React from 'react';
import { THEME } from 'src/global/theme/intex';

type Props = {
    title: string
}

export default function ScreenHeader({ title }: Props) {
  return (
    <Center
        backgroundColor={THEME.colors.gray[600]}
        alignItems='center'
        paddingBottom={10}
        paddingTop={40}
    >
        <Heading 
            color={THEME.colors.gray[100]}
            fontSize={THEME.fontSizes.xl}
            fontFamily={THEME.fonts.heading}
        >
            {title}
        </Heading>
    </Center>
  );
}
