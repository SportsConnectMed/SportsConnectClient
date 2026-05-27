import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Eye,
  EyeOff,
  LocateFixed,
  Lock,
  Mail,
  MapPin,
  User,
  Zap,
} from "lucide-react-native";
import { useDarkMode } from "@/shared/hooks/dark-mode.hook";
import { useForm, Controller } from "react-hook-form";
import { LoginType } from "@/modules/auth/types/auth.types";
import { LoginSchema } from "@/modules/auth/schemas/login.schema";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { Input } from "@/shared/ui/Input";
import { useLogin } from "../hooks/use-login";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { Navigation } from "@/app/navigation/types";
import { RegisterType } from "../types/register.types";
import { RegisterSchema } from "../schemas/register.schema";
import { useRegister } from "../hooks/use-register";
import { ScrollView } from "react-native-gesture-handler";
import { REGISTER_DEFAULT_VALUES } from "../constants/register-default-values";
import { Select } from "@/shared/ui/Select";
import { SkillLevelOptions } from "../constants/skill-level-options";
import { SportTypeOptions } from "../constants/sport-type-options";

export function RegisterScreen() {
  const isDarkMode = useDarkMode();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    setError,
  } = useForm<RegisterType>({
    resolver: valibotResolver(RegisterSchema),
    defaultValues: REGISTER_DEFAULT_VALUES,
  });

  const { mutate } = useRegister();
  const navigation = useNavigation<Navigation>();

  const onSubmit = (data: RegisterType) => {
    mutate(data, {
      onSuccess: () => {
        Toast.show({
          type: "success",
          text1: "¡Registro exitoso!",
        });
        navigation.replace("Login");
      },
      onError: (error) => {
        console.log(error.stack);
        Toast.show({
          type: "error",
          text1: "Error al registrarse",
          text2: error instanceof Error ? error.message : "Ocurrió un error",
        });
      },
    });
  };

  return (
    <View className="flex-1 bg-background">
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-row items-center gap-4 px-6 pt-4 pb-6">
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
                name="username"
                placeholder="Ingresa tu nombre de usuario"
                icon={<User size={20} color="#888" />}
                type="text"
                label="Nombre de Usuario"
              />
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
                name="full_name"
                placeholder="Ingresa tu nombre completo"
                type="text"
                label="Nombre Completo"
              />
              <Input
                control={control}
                name="city"
                placeholder="Ingresa tu ciudad"
                icon={<MapPin size={20} color="#888" />}
                type="text"
                label="Ciudad"
              />
              <Input
                control={control}
                name="password"
                placeholder="Ingresa tu contraseña"
                icon={<Lock size={20} color="#888" />}
                type="password"
                label="Contraseña"
              />
              <Controller
                control={control}
                name="skill_level"
                render={({ field, fieldState }) => (
                  <Select
                    label="Nivel de habilidad"
                    placeholder="Selecciona tu nivel de habilidad"
                    options={SkillLevelOptions}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name="favorite_sport"
                render={({ field, fieldState }) => (
                  <Select
                    label="Deporte favorito"
                    placeholder="Selecciona el deporte que más te gusta"
                    options={SportTypeOptions}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
              <Input
                control={control}
                name="position"
                placeholder="Ingresa la posición que juegas (opcional)"
                icon={<LocateFixed size={20} color="#888" />}
                type="text"
                label="Posición"
              />

              <Input
                control={control}
                name="bio"
                placeholder="Ingresa tu biografía"
                type="text"
                label="Biografía"
                multiline
              />
              <Pressable
                className="bg-primary w-full neon-glow rounded-2xl active:opacity-80 py-4 items-center justify-center shadow-md mt-2"
                onPress={handleSubmit(onSubmit)}
              >
                <Text className="text-white font-semibold text-lg">
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
                <Text className="text-primary font-semibold">
                  Inicia sesión
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
