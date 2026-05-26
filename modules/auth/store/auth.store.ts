import { create } from "zustand";
import { UserResponseType } from "../types/user-response.types";

interface AuthState {
  user: UserResponseType | null;

  accessToken: string | null;

  isAuthenticated: boolean;

  setSession: (user: UserResponseType, token: string) => void;

  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  accessToken: null,

  isAuthenticated: false,

  setSession: (user, token) =>
    set({
      user,
      accessToken: token,
      isAuthenticated: true,
    }),

  logout: () =>
    set({
      user: null,
      accessToken: null,
      isAuthenticated: false,
    }),
}));
