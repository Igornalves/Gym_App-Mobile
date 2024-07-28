import { 
    Center, 
    Spinner,
    VStack,
} from "@gluestack-ui/themed";
import { THEME } from "src/global/theme/intex";

import { Text } from "react-native";

export function Loading () {
    return(
        <Center 
            flex={1} 
            flexDirection="row"
            alignItems="center" 
            justifyContent="center" 
            backgroundColor={THEME.colors.gray[700]}
        >
            <Spinner color={THEME.colors.green[500]} size={40}/>
            <Text style={{fontFamily: 'Roboto_700Bold', color:'white'}}> Please Wait !!!</Text>
        </Center>
    );
}