import { z } from "zod";

const regexPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;

export const registerSchema = z
    .object({
        fullname: z
            .string()
            .min(4, "Your fullname must be at least 4 Character")
            .max(20, "Your fullname must be at most 20 Character"),
        email: z.string().email("Please enter a valid email"),
        password: z
            .string()
            .min(6, "Password must be at least 6 characters")
            .regex(
                regexPassword,
                "Password harus mengandung angka, huruf besar, kecil dan simbol"
            ),
    })
    .required();

export type RegisterSchema = z.infer<typeof registerSchema>;
