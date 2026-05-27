import Toast from "react-native-toast-message";

import { useMutation } from "@tanstack/react-query";

import { loginApi } from "../api/login.api";
import { meApi } from "../api/me.api";

import { useAuthStore } from "../store/auth.store";
import { STORAGE_KEYS } from "@/app/services/storage/storage.keys";
import { setStorage } from "@/app/services/storage/secure-storage";
import { registerApi } from "../api/register.api";

export function useRegister() {
  console.log("Calling Register");
  return useMutation({
    mutationFn: registerApi,

    onError: () => {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Error registrando el usuario",
      });
    },
  });
}
