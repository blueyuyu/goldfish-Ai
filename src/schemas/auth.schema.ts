import { ZodType, z } from "zod"
// 表单元素
export type UserRegistrationProps = {
  type: string
  fullname: string
  email: string
  confirmEmail: string
  confirmPassword: string
  otp: string
}

export const UserRegistrationSchema: ZodType<UserRegistrationProps> = z
  .object({
    type: z.string().min(1),
    fullname: z.string().min(4, { message: "your full name must be atleast 4 characters long" }),
    email: z.string().email({ message: "Incorrect email format" }),
    confirmEmail: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Your password must be atleast 8 characters long" })
      .max(64, {
        message: "Your password can not be longer then 64 characters long",
      })
      .refine(
        (value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ""),
        "password should contain only alphabets and numbers",
      ),
    confirmPassword: z.string(),
    otp: z.string().min(6, { message: "You must enter a 6 digit code" }),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: "passwords do not match",
    path: ["confirmPassword"],
  })
  .refine((schema) => schema.email === schema.confirmEmail, {
    message: "Your emails not match",
    path: ["confirmEmail"],
  })

// 登录功能
export type UserLoginProps = {
  email: string
  password: string
}

export const UserLoginSchema: ZodType<UserLoginProps> = z.object({
  email: z.string().email({ message: "Incorrect email format" }),
  password: z
    .string()
    .min(8, { message: "Your password must be at least 8 characters long" })
    .max(12, {
      message: "Your password can not be longer then 12 characters long",
    }),
})
