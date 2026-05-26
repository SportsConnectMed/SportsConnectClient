import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen } from "@/modules/auth/screens/login.screen";
import { RegisterScreen } from "@/modules/auth/screens/register.screen";

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />

      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
