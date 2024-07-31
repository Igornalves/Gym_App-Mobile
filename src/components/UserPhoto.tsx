import React from 'react';
import { ImageProps } from 'react-native';
import { Image } from '@gluestack-ui/themed';
import { THEME } from 'src/global/theme/intex';

type Props = ImageProps & {
    size: number,
}

export default function UserPhoto({ size, ...rest }: Props) {
  return (
    <Image
        width={size}
        height={size}
        borderRadius={size}
        borderWidth={2}
        borderColor={THEME.colors.gray[400]}
        {...rest}
    />
  );
}
