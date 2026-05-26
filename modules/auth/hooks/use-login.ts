import Toast from "react-native-toast-message";

import { useMutation } from "@tanstack/react-query";

import { loginApi } from "../api/login.api";
import { meApi } from "../api/me.api";

import { useAuthStore } from "../store/auth.store";
import { STORAGE_KEYS } from "@/app/services/storage/storage.keys";
import { setStorage } from "@/app/services/storage/secure-storage";

export function useLogin() {
  const setSession = useAuthStore((state) => state.setSession);

  return useMutation({
    mutationFn: loginApi,

    onSuccess: async (data) => {
      try {
        await setStorage(STORAGE_KEYS.accessToken, data.access_token);

        const user = await meApi();

        await setStorage(STORAGE_KEYS.user, JSON.stringify(user));

        setSession(user, data.access_token);

        Toast.show({
          type: "success",
          text1: "Bienvenido",
        });
      } catch {
        Toast.show({
          type: "error",
          text1: "Error obteniendo usuario",
        });
      }
    },

    onError: () => {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Credenciales inválidas",
      });
    },
  });
}
