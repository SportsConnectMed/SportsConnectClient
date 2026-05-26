import { NavigationContainer } from "@react-navigation/native";

import { AuthNavigator } from "./auth.navigator";
import { AppNavigator } from "./app.navigator";

import { useAuthStore } from "@/modules/auth/store/auth.store";

export function RootNavigator() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
