import { email, minLength, nonEmpty, object, pipe, string } from "valibot";

export const LoginSchema = object({
  email: pipe(
    string(),
    nonEmpty("Email is required"),
    email("Invalid email address"),
  ),

  password: pipe(string(), nonEmpty("Password is required")),
});
