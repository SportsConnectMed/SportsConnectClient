import { InferInput } from "valibot";
import { RegisterSchema } from "../schemas/register.schema";

export type RegisterType = InferInput<typeof RegisterSchema>;
