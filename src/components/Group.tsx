import React from 'react';
import { Text } from '@gluestack-ui/themed';
import { THEME } from 'src/global/theme/intex';

type Props = {
    name: string
}

export default function Group({ name }: Props) {
  return (
    <Text
        color={THEME.colors.gray[200]}
        textTransform='uppercase'
        fontSize={THEME.fontSizes.xs}
        fontWeight={'bold'}
    >
        {name}
    </Text>
  );
}
