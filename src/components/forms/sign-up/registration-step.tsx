"use client"
import { useAuthContextHook } from "@/context/use-auth-context"
import React, { useState } from "react"
import { useFormContext } from "react-hook-form"
import TypeSelectionForm from "./type-selection-form"
import { loadGetInitialProps } from "next/dist/shared/lib/utils"
import dynamic from "next/dynamic"
import { Spinner } from "@/components/spinner"

const DetailForm = dynamic(() => import("./account-detail-form"), {
  ssr: false,
  loading: Spinner,
})

const OtpForm = dynamic(() => import("./otp-form"), {
  ssr: false,
  loading: Spinner,
})

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
      return (
        <TypeSelectionForm
          register={register}
          userType={onUserType}
          setUserType={setOnUserType}
        ></TypeSelectionForm>
      )
    case 2:
      return <DetailForm register={register} errors={errors}></DetailForm>

    case 3:
      return <OtpForm setOTP={setOnOtp} onOTP={onOtp}></OtpForm>
      break

    default:
      return <div>RegistrationFormStep</div>
      break
  }
}

export default RegistrationFormStep
