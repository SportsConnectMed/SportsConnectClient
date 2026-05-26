import { api } from "@app/services/api/axios";
import { AuthResponseType } from "@modules/auth/types/auth-response.types";
import { LoginType } from "@modules/auth/types/auth.types";
import { AUTH_ROUTES } from "../constants/routes";
import { UserResponseType } from "../types/user-response.types";

export async function meApi() {
  const response = await api.get<UserResponseType>(AUTH_ROUTES.me, {});

  return response.data;
}
