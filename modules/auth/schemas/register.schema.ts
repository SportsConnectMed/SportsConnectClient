import {
  email,
  maxLength,
  minLength,
  nonEmpty,
  nullable,
  object,
  pipe,
  string,
  picklist,
  url,
} from "valibot";
import { SkillLevelEnum } from "../enums/skill-level.enum";
import { SportTypeEnum } from "../enums/sport-type.enum";

export const RegisterSchema = object({
  username: pipe(
    string(),
    nonEmpty("Username is required"),
    minLength(3, "Username must be at least 3 characters long"),
    maxLength(30, "Username must be at most 30 characters long"),
  ),

  email: pipe(
    string(),
    nonEmpty("Email is required"),
    email("Invalid email address"),
  ),

  password: pipe(
    string(),
    minLength(8, "Password must be at least 8 characters long"),
    maxLength(128, "Password must be at most 128 characters long"),
  ),

  full_name: pipe(
    string(),
    nonEmpty("Full name is required"),
    minLength(2, "Full name must be at least 2 characters long"),
    maxLength(100, "Full name must be at most 100 characters long"),
  ),

  city: pipe(
    string(),
    nonEmpty("City is required"),
    minLength(2, "City must be at least 2 characters long"),
    maxLength(100, "City must be at most 100 characters long"),
  ),

  avatar_url: nullable(pipe(string(), url())),

  favorite_sport: nullable(picklist(SportTypeEnum)),

  skill_level: nullable(picklist(SkillLevelEnum)),

  position: nullable(
    pipe(
      string(),
      minLength(2, "Position must be at least 2 characters long"),
      maxLength(50, "Position must be at most 50 characters long"),
    ),
  ),

  bio: nullable(
    pipe(
      string(),
      minLength(10, "Bio must be at least 10 characters long"),
      maxLength(500, "Bio must be at most 500 characters long"),
    ),
  ),
});
