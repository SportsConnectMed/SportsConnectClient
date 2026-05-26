import axios from "axios";

import { getStorage } from "../storage/secure-storage";

import { STORAGE_KEYS } from "../storage/storage.keys";

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

api.interceptors.request.use(async (config) => {
  const token = await getStorage(STORAGE_KEYS.accessToken);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
