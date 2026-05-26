import { api } from "@app/services/api/axios";
import { AuthResponseType } from "@modules/auth/types/auth-response.types";
import { LoginType } from "@modules/auth/types/auth.types";
import { AUTH_ROUTES } from "../constants/routes";

export async function loginApi(body: LoginType) {
  const response = await api.post<AuthResponseType>(AUTH_ROUTES.login, body);

  return response.data;
}
