import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React from "react"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

type Props = {
  key: string
  name: string
  type: "email" | "text" | "password"
  placeholder: string
  inputType: "select" | "input" | "textarea"
  options?: { id: string; label: string; value: string }[]
  label?: string
  register: UseFormRegister<any>
  errors: FieldErrors<FieldValues>
  lines?: number
  form?: string
  defaultValue?: string
}

// 表单生成器
const FormGenerator = ({
  name,
  type,
  placeholder,
  inputType,
  options,
  label,
  register,
  errors,
  lines,
  form,
  defaultValue,
}: Props) => {
  switch (inputType) {
    case "input":
      return (
        <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
          {label && label}
          <Input
            id={`input-${label}`}
            type={type}
            placeholder={placeholder}
            form={form}
            defaultValue={defaultValue}
            {...register(name)}
          ></Input>
          <ErrorMessage
            name={name}
            errors={errors}
            render={({ message }) => (
              <p className="text-red-500 mt-2">{message === "Required" ? "" : message}</p>
            )}
          ></ErrorMessage>
        </Label>
      )
    default:
      break
    case "select":
      return (
        <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
          {label && label}
          <select id={`input-${label}`} form={form} defaultValue={defaultValue} {...register(name)}>
            {options?.length &&
              options?.map((item) => (
                <select value={item.value} id={item.id}>
                  {item.label}
                </select>
              ))}
          </select>
          <ErrorMessage
            name={name}
            errors={errors}
            render={({ message }) => (
              <p className="text-red-500 mt-2">{message === "Required" ? "" : message}</p>
            )}
          ></ErrorMessage>
        </Label>
      )
    case "textarea":
      return (
        <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
          {label && label}
          <Textarea
            id={`input-${label}`}
            placeholder={placeholder}
            form={form}
            defaultValue={defaultValue}
            {...register(name)}
          ></Textarea>
          <ErrorMessage
            name={name}
            errors={errors}
            render={({ message }) => (
              <p className="text-red-500 mt-2">{message === "Required" ? "" : message}</p>
            )}
          ></ErrorMessage>
        </Label>
      )
  }
}

export default FormGenerator
