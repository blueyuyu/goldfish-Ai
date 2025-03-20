import React from "react"
import { useFormContext } from "react-hook-form"
import { USER_LOGIN_FORM } from "@/constants/form"
import FormGenerator from "@/components/forms/form-generator"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Props = {}

const LoginForm = (props: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold pt-[160px]">Login</h2>
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
      <Button type="submit">Submit</Button>
      <p className="text-iridium text-sm pt-1 text-center font-bold">
        Don't have an account?{" "}
        <Link
          className="text-iridium font-extrabold"
          href={{
            pathname: "/auth/sign-up",
          }}
        >
          Create One
        </Link>
      </p>
    </>
  )
}

export default LoginForm
