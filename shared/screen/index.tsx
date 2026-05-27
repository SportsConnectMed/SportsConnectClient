import { View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  children: React.ReactNode;
}

export function Screen({ children }: Props) {
  return (
    <View className="flex-1 bg-background">
      <SafeAreaView className="flex-1">{children}</SafeAreaView>
    </View>
  );
}
