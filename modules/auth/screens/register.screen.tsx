import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Eye, EyeOff, Lock, Mail, User, Zap } from "lucide-react-native";
import { useDarkMode } from "@/shared/hooks/dark-mode.hook";
import { useForm } from "react-hook-form";
import { LoginType } from "@/modules/auth/types/auth.types";
import { LoginSchema } from "@/modules/auth/schemas/login.schema";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { Input } from "@/shared/ui/Input";
import { useLogin } from "../hooks/use-login";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { Navigation } from "@/app/navigation/types";

export function RegisterScreen() {
  const isDarkMode = useDarkMode();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginType>({
    resolver: valibotResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate } = useLogin();
  const navigation = useNavigation<Navigation>();

  const onSubmit = (data: LoginType) => {
    mutate(data, {
      onSuccess: (response) => {
        Toast.show({
          type: "success",
          text1: "¡Inicio de sesión exitoso!",
          text2: `Bienvenido, ${response.access_token}!`,
        });
      },
      onError: (error) => {
        console.log(error);
        Toast.show({
          type: "error",
          text1: "Error al iniciar sesión",
          text2: error instanceof Error ? error.message : "Ocurrió un error",
        });
      },
    });
  };

  return (
    <View className="flex-1 bg-background">
      <SafeAreaView style={{ flex: 1 }}>
        {/* Logo siempre arriba */}
        <View className="flex-row items-center gap-4 px-6 pt-4">
          <View className="p-3 rounded-2xl bg-primary/20 neon-glow">
            <Zap size={25} color={isDarkMode ? "#45cd55" : "black"} />
          </View>
          <Text className="text-3xl font-bold text-foreground">
            SportsConnect
          </Text>
        </View>

        <View className="flex-1 justify-center px-6 gap-8">
          <View className="items-start gap-2 mb-2">
            <Text className="text-3xl font-bold text-foreground">
              Crea tu cuenta
            </Text>
            <Text className="text-lg font-bold text-muted-foreground">
              Únete a la comunidad y comienza a jugar
            </Text>
          </View>

          <View className="gap-8 w-full">
            <Input
              control={control}
              name="email"
              placeholder="Ingresa tu correo electrónico"
              icon={<Mail size={20} color="#888" />}
              type="email"
              label="Correo Electrónico"
            />

            <Input
              control={control}
              name="password"
              placeholder="Ingresa tu contraseña"
              icon={<Lock size={20} color="gray" />}
              type="password"
              label="Contraseña"
            />
            <Pressable>
              <Text className="text-sm text-primary">
                ¿Olvidaste tu contraseña?
              </Text>
            </Pressable>
            <Pressable
              className="bg-primary w-full neon-glow rounded-2xl active:opacity-80 py-4 items-center justify-center shadow-md mt-2"
              onPress={handleSubmit(onSubmit)}
            >
              <Text className="text-foreground font-semibold text-lg">
                {isSubmitting ? "Registrando..." : "Regístrate"}
              </Text>
            </Pressable>
          </View>

          <View className="flex-row items-center justify-center gap-2 mt-4">
            <Text className="text-center text-muted-foreground">
              ¿Ya tienes una cuenta?
            </Text>
            <Pressable
              className="items-end justify-end"
              onPress={() => navigation.navigate("Login")}
            >
              <Text className="text-primary font-semibold">Inicia sesión</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
