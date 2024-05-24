import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(6)
  .max(20)
  .regex(
    /^[a-zA-Z0-9]+$/,
    "Invalid username: only alphanumeric characters are allowed!",
  );

export const emailValidation = z
  .string()
  .regex(
    /^[a-z]+@[a-z]+(?:\.gmail\.com|\.yahoo\.com)$/,
    "Invalid email: only gmail and yahoo are allowed!",
  );

export const passwordValidation = z.string().min(6);

export const signUpSchema = z.object({
  username: usernameValidation,
  email: emailValidation,
  password: passwordValidation,
});
