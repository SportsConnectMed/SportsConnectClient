import { Pressable, Text, View } from "react-native";

type Props = {
  navigation: any;
};

export function ForgotPasswordScreen({ navigation }: Props) {
  return (
    <View className="flex-1 items-center justify-center gap-4 bg-zinc-950 px-6">
      <Text className="text-3xl font-bold text-white">
        Recuperar contraseña
      </Text>

      <Pressable
        className="rounded-xl bg-red-500 px-6 py-4"
        onPress={() => navigation.goBack()}
      >
        <Text className="font-semibold text-white">Volver</Text>
      </Pressable>
    </View>
  );
}
