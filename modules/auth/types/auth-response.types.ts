import { InferInput } from "valibot";
import { AuthResponseSchema } from "../schemas/auth-response.schema";

export type AuthResponseType = InferInput<typeof AuthResponseSchema>;
