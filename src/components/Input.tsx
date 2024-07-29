import { 
    Input as StackInput, 
    InputField, 
} from '@gluestack-ui/themed'

import { THEME } from 'src/global/theme/intex';

interface TypeInput{
    placeholder: string
    keyboardtype?: 'email-address' | 'numeric' | 'default' | 'name-phone-pad'
    secureTextEntry?: true | false
    autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined
}

export function Input({ placeholder,keyboardtype, secureTextEntry,autoCapitalize }:TypeInput) {
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
        backgroundColor= {THEME.colors.gray[700]}
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
