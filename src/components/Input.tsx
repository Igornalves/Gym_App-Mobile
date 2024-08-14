import { 
    Input as StackInput, 
    InputField, 
    FormControl,
    FormControlErrorText
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
    errorMessage?: string | null
}

export function Input({ errorMessage = null,placeholder,keyboardtype, isDisabled, secureTextEntry,autoCapitalize, backgroundColor, ...rest }:TypeInput) {

    // criando uma constante para enviar a mensagem de erro quando os dados nao forem os adquado para o input do formulario, constante do tipo boolean
    const isInvalid = !!errorMessage

  return (
    <FormControl isInvalid={isInvalid}>
        <StackInput
            height={56}
            width={328}
            // marginBottom={15}
            borderRadius={10}
            $focus={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: THEME.colors.green[700],
            }}
            isDisabled={isDisabled}
            isInvalid={isInvalid}
            // passando uma estilizacao para sinalizar o erro no input
            $invalid={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'red'
            }}
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
                // nao esqueca de colocar o rest para que ele receba todas as propriedade do Input
                {...rest}
            />
        </StackInput>
        <FormControlErrorText color='red' marginLeft={15}>
            {errorMessage}
        </FormControlErrorText>
    </FormControl>
  );
}
