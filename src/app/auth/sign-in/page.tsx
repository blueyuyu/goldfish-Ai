"use client"
import React from "react"
import SignInFormProvider from "@/components/forms/sign-in/form-provider"
import LoginForm from "@/components/forms/sign-in/login-form"

type Props = {}

const SignIn = (props: Props) => {
  return (
    <>
      <SignInFormProvider>
        <LoginForm />
      </SignInFormProvider>
    </>
  )
}

export default SignIn
