import { InferInput } from "valibot";
import { UserResponseSchema } from "../schemas/user-response.schema";

export type UserResponseType = InferInput<typeof UserResponseSchema>;
