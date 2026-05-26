import { object, string } from "valibot";

export const AuthResponseSchema = object({
    access_token: string(),
    token_type: string(),
})
