import { 
    Input as StackInput, 
    InputField, 
} from '@gluestack-ui/themed'
import { TextInputProps } from 'react-native';

import { THEME } from 'src/global/theme/intex';

type TypeInput = TextInputProps & {
    placeholder: string
    isDisabled?: boolean
    backgroundColor?: string
    keyboardtype?: 'email-address' | 'numeric' | 'default' | 'name-phone-pad'
    secureTextEntry?: true | false
    autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined
}

export function Input({ placeholder,keyboardtype, isDisabled, secureTextEntry,autoCapitalize, backgroundColor, ...rest }:TypeInput) {
  return (
    <StackInput
        height={56}
        width={328}
        marginBottom={15}
        borderRadius={10}
        $focus={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: THEME.colors.green[700],
        }}
        isDisabled={isDisabled}
        backgroundColor= {backgroundColor}
        {...rest}
    >
        <InputField 
            flex={1}
            marginLeft={20}
            keyboardType={keyboardtype}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            color={THEME.colors.gray[100]}
            placeholderTextColor={THEME.colors.gray[300]}
        />
    </StackInput>
  );
}
