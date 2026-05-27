import { api } from "@app/services/api/axios";
import { AUTH_ROUTES } from "../constants/routes";
import { UserResponseType } from "../types/user-response.types";
import { RegisterType } from "../types/register.types";

export async function registerApi(body: RegisterType) {
  const response = await api.post<UserResponseType>(AUTH_ROUTES.register, body);

  return response.data;
}
