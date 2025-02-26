"use client"
import { useAuthContextHook } from "@/context/use-auth-context"
import { useFormContext } from "react-hook-form"
import React from "react"
import { useSignUpForm } from "@/hooks/sign-up/use-sign-up"

// 定义组件的属性类型
type props = {}

// 定义组件
const ButtonHandler = ({}: props) => {
  // 获取当前的步骤
  // name email password
  // 获取当前的步骤
  const { currentStep, setCurrentStep } = useAuthContextHook()
  const { formState, getFieldState, getValues } = useFormContext()
  const { onGenerateOTP } = useSignUpForm()

  const { isDirty: isName } = getFieldState("fullname", formState)
  const { isDirty: isEmail } = getFieldState("email", formState)
  const { isDirty: isPassword } = getFieldState("password", formState)

  return <div>aaads</div>
}

export default ButtonHandler
