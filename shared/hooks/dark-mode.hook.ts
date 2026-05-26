import { useColorScheme } from "react-native";

/**
 * Hook para obtener explícitamente si la aplicación se encuentra en Modo Oscuro.
 * Cumple con el estándar de React Native y NativeWind v5.
 * @returns {boolean} true si el modo oscuro está activo, false en caso contrario.
 */
export function useDarkMode(): boolean {
  const colorScheme = useColorScheme();

  return colorScheme === "dark";
}
