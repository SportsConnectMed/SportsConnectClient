import * as SecureStore from "expo-secure-store";

export async function setStorage(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

export async function getStorage(key: string) {
  return await SecureStore.getItemAsync(key);
}

export async function removeStorage(key: string) {
  await SecureStore.deleteItemAsync(key);
}
