import "./global.css";

import { useFonts } from "expo-font";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { RootNavigator } from "@/app/navigation/root.navigator";
import { QueryProvider } from "./app/providers/query-provider";
import { ToastProvider } from "./app/providers/toast-provider";

export default function App() {
  const [loaded] = useFonts({
    BeVietnamBlack: require("./assets/fonts/BeVietnamPro-Black.ttf"),
    BeVietnamBlackItalic: require("./assets/fonts/BeVietnamPro-BlackItalic.ttf"),
    BeVietnamBold: require("./assets/fonts/BeVietnamPro-Bold.ttf"),
    BeVietnamBoldItalic: require("./assets/fonts/BeVietnamPro-BoldItalic.ttf"),
    BeVietnamExtraBold: require("./assets/fonts/BeVietnamPro-ExtraBold.ttf"),
    BeVietnamExtraBoldItalic: require("./assets/fonts/BeVietnamPro-ExtraBoldItalic.ttf"),
    BeVietnamExtraLight: require("./assets/fonts/BeVietnamPro-ExtraLight.ttf"),
    BeVietnamExtraLightItalic: require("./assets/fonts/BeVietnamPro-ExtraLightItalic.ttf"),
    BeVietnamItalic: require("./assets/fonts/BeVietnamPro-Italic.ttf"),
    BeVietnamLight: require("./assets/fonts/BeVietnamPro-Light.ttf"),
    BeVietnamLightItalic: require("./assets/fonts/BeVietnamPro-LightItalic.ttf"),
    BeVietnamMedium: require("./assets/fonts/BeVietnamPro-Medium.ttf"),
    BeVietnamMediumItalic: require("./assets/fonts/BeVietnamPro-MediumItalic.ttf"),
    BeVietnamRegular: require("./assets/fonts/BeVietnamPro-Regular.ttf"),
    BeVietnamSemiBold: require("./assets/fonts/BeVietnamPro-SemiBold.ttf"),
    BeVietnamSemiBoldItalic: require("./assets/fonts/BeVietnamPro-SemiBoldItalic.ttf"),
    BeVietnamThin: require("./assets/fonts/BeVietnamPro-Thin.ttf"),
    BeVietnamThinItalic: require("./assets/fonts/BeVietnamPro-ThinItalic.ttf"),
  });

  if (!loaded) {
    return (
      <View className="flex-1 items-center justify-center bg-background dark:bg-background">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <QueryProvider>
      <ToastProvider>
        <GestureHandlerRootView style={styles.root}>
          <RootNavigator />
        </GestureHandlerRootView>
      </ToastProvider>
    </QueryProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
