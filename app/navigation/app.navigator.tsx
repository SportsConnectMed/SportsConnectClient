import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "@/modules/home/screens/home.screen";

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
