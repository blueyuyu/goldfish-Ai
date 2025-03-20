import React, { useState } from "react"
import { useSignIn } from "@clerk/nextjs"
import { useForm } from "react-hook-form"
import { useToast } from "../use-toast"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserLoginProps, UserLoginSchema } from "@/schemas/auth.schema"

type Props = {}

export const useSignInForm = () => {
  const { toast } = useToast()
  const { isLoaded, signIn, setActive } = useSignIn()
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  // 表单注入
  const methods = useForm<UserLoginProps>({
    resolver: zodResolver(UserLoginSchema),
    mode: "onChange",
  })

  // 提交
  const onHandleSubmit = methods.handleSubmit(async (value: UserLoginProps) => {
    // 没加载完，不执行
    if (!isLoaded) return
    try {
      setLoading(true)
      const { email, password } = value
      const authenticated = await signIn.create({
        identifier: email,
        password,
      })
      if (authenticated.status === "complete") {
        setLoading(false)
        toast({
          title: "login success",
          description: "welcome back",
        })
        router.push("/dashboard")
      }
    } catch (error: any) {
      setLoading(false)
      if (error.errors[0].code === "invalid_identifier_or_password") {
        toast({
          title: "login failed",
          description: error.message,
        })
      }
    }
  })

  return {
    methods,
    onHandleSubmit,
    loading,
  }
}
