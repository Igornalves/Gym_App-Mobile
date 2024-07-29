import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import SignIn from "@screens/SignIn/intex";
import SignUp from "@screens/SignUp/intex";

type AuthRoutes = {
    loginUser: undefined;
    createUser: undefined;
}

export type AuthNavigatiorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="loginUser"
                component={SignIn}
            />
            <Screen
                name="createUser"
                component={SignUp}
            />
        </Navigator>
    );
}
