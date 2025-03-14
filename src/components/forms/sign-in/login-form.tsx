import React from "react"
import { useFormContext } from "react-hook-form"
import { USER_LOGIN_FORM } from "@/constants/form"
import FormGenerator from "@/components/forms/form-generator"

type Props = {}

const LoginForm = (props: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Login</h2>
      <p className="text-iridium md-text-sm">You will receive a one time password</p>
      {USER_LOGIN_FORM.map((field) => {
        return (
          <FormGenerator
            key={field.id}
            name={field.name}
            type={field.type}
            label={field.label}
            placeholder={field.placeholder}
            inputType={field.inputType}
            register={register}
            errors={errors}
          ></FormGenerator>
        )
      })}
    </>
  )
}

export default LoginForm
