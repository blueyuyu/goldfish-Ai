import React from "react"
import { AuthContentProvider } from "@/context/use-auth-context"
import { FormProvider } from "react-hook-form"

type Props = {}

const signInFormProvider = (props: Props) => {
  return (
    <AuthContentProvider>
      <FormProvider>
        <form></form>
      </FormProvider>
    </AuthContentProvider>
  )
}

export default signInFormProvider
