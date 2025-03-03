"use client"
import { useAuthContextHook } from "@/context/use-auth-context"
import { useFormContext } from "react-hook-form"
import React from "react"
import { useSignUpForm } from "@/hooks/sign-up/use-sign-up"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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

  if (currentStep === 1) {
    return (
      <div className="w-full flex flex-col gap-3 items-center">
        <Button
          type="submit"
          className="w-full"
          onClick={() => {
            setCurrentStep((pre: number) => pre + 1)
          }}
        >
          Continue
        </Button>
        <p>
          Already have an account?
          <Link href="/auth/sign-in" className="font-bold">
            Sign In
          </Link>
        </p>
      </div>
    )
  }
  if (currentStep === 2) {
    return (
      <div className="w-full flex flex-col gap-3 items-center">
        <Button
          type="submit"
          className="w-full"
          {...(isName &&
            isEmail &&
            isPassword && {
              onClick: () => {
                onGenerateOTP(getValues("email"), getValues("password"), setCurrentStep)
              },
            })}
          onClick={() => {
            setCurrentStep((pre: number) => pre + 1)
          }}
        >
          continue
        </Button>
      </div>
    )
  }

  if (currentStep === 3) {
    return (
      <div className="w-full flex flex-col gap-3 items-center">
        <Button type="submit" className="w-full">
          Create an account
        </Button>
        <p>
          Already have an account?
          <Link href="/auth/sign-in" className="font-bold">
            Sign In
          </Link>
        </p>
      </div>
    )
  }
}

export default ButtonHandler
