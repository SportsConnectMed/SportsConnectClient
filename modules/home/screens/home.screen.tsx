import { useAuthStore } from "@/modules/auth/store/auth.store";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function HomeScreen() {
  const { logout, user } = useAuthStore();

  return (
    <View className="flex-1 bg-background">
      <SafeAreaView style={{ flex: 1 }}>
        {/* Logo siempre arriba */}
        <View className="items-center mt-4">
          <Text className="text-2xl font-bold text-primary">SportsConnect</Text>
        </View>

        {/* Contenido principal */}
        <View className="flex-1 items-center justify-center">
          <Text className="text-lg text-foreground">
            ¡Bienvenido a PijaConnect, {user?.email}
          </Text>
          <Pressable
            onPress={logout}
            className="mt-4 px-4 py-2 bg-primary rounded"
          >
            <Text className="text-white">Cerrar sesión</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}
