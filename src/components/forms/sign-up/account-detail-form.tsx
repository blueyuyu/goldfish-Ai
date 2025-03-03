"use client"
import React from "react"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"
import { USER_REGISTRATION_FORM } from "@/constants/form"
import FormGenerator from "../form-generator"

type Props = {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

// 第二步，详细的表单内容
const AccountDetailForm = ({errors,register}: Props) => {
  return (
    <div>
      <h2 className="text-gravel md:text-4xl font-bold">account details</h2>
      <p className="text-iridium md: text-sm mb-1">Enter your email and password</p>
      {USER_REGISTRATION_FORM.map((field) => 
        (<FormGenerator
            key={field.id}
            {...field}
            errors={errors}
            register={register}
            name={field.name}
          />)
      )}
    </div>
  )
}

export default AccountDetailForm
