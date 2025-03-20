"use client"
import React, { Children, use } from "react"
import { AuthContentProvider } from "@/context/use-auth-context"
import { FormProvider } from "react-hook-form"
import { useSignInForm } from "@/hooks/sign-up/use-sign-in"
import { Loader } from "@/components/loader"

type Props = {
  children: React.ReactNode
}

const SignInFormProvider = ({ children }: Props) => {
  const { methods, onHandleSubmit, loading } = useSignInForm()
  return (
    <AuthContentProvider>
      <FormProvider {...methods}>
        <form className="h-full w-full" onSubmit={onHandleSubmit}>
          <div className="h-full flex flex-col gap-4">
            <Loader loading={loading}>{children}</Loader>
          </div>
        </form>
      </FormProvider>
    </AuthContentProvider>
  )
}

export default SignInFormProvider
