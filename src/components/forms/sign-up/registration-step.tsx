"use client"
import { useAuthContextHook } from "@/context/use-auth-context"
import React, { useState } from "react"
import { useFormContext } from "react-hook-form"
import TypeSelectionForm from "./type-selection-form"
import { loadGetInitialProps } from "next/dist/shared/lib/utils"

type Props = {}

// 这一块是注册的步骤条，获取到当前步骤，根据步骤显示不同的表单
// onOtp 是一个状态变量，用于存储 OTP（一次性密码）的值。
const RegistrationFormStep = (props: Props) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext()
  const { currentStep } = useAuthContextHook()
  const [onOtp, setOnOtp] = useState<string>("")
  const [onUserType, setOnUserType] = useState<"owner" | "student">("owner")

  setValue("otp", onOtp)
  // console.log(' currentStep', currentStep)
  // TODO yuyu  注册步骤所在位置

  switch (currentStep) {
    case 1:
      console.log("进入第一步", true)
      return (
        <TypeSelectionForm
          register={register}
          userType={onUserType}
          setUserType={setOnUserType}
        ></TypeSelectionForm>
      )
      break
    case 2:
      return <div>RegistrationFormStep</div>
      break

    case 3:
      return <div>RegistrationFormStep</div>
      break

    default:
      return <div>RegistrationFormStep</div>
      break
  }
}

export default RegistrationFormStep
