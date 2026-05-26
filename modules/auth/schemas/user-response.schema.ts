import { boolean, nullable, object, string } from "valibot";

export const UserResponseSchema = object({
  id: string(),
  username: string(),
  email: string(),
  full_name: nullable(string()),
  city: nullable(string()),
  avatar_url: nullable(string()),
  is_active: boolean(),
  is_verified: boolean(),
  role: string(),
  favorite_sport: string(),
  skill_level: string(),
  position: string(),
  bio: string(),
  created_at: string(),
  updated_at: string(),
});
