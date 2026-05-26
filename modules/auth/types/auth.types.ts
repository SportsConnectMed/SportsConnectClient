import { InferInput } from "valibot";
import { LoginSchema } from "../schemas/login.schema";

export type LoginType = InferInput<typeof LoginSchema>;
