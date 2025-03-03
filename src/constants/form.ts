// form 表单的字段元素
type UserRegistrationProps = {
  id: string
  name: string
  type: "email" | "text" | "password"
  placeholder: string
  inputType: "input" | "select"
  options?: { id: string; label: string; value: string }[]
  label?: string
}

// TODO YUYU1
export const USER_REGISTRATION_FORM: UserRegistrationProps[] = [
  {
    id: "1",
    name: "fullname",
    type: "text",
    placeholder: "enter fullname",
    inputType: "input",
    label: "fullname",
  },
  {
    id: "2",
    name: "email",
    type: "text",
    placeholder: "enter email",
    inputType: "input",
    label: "email",
  },
  {
    id: "3",
    name: "conformEmail",
    type: "email",
    placeholder: "enter conformEmail",
    inputType: "input",
    label: "conformEmail",
  },
  {
    id: "4",
    name: "password",
    type: "text",
    placeholder: "enter password",
    inputType: "input",
    label: "password",
  },
  {
    id: "5",
    name: "conformPassword",
    type: "text",
    placeholder: "enter conformPassword",
    inputType: "input",
    label: "conformPassword",
  },
]

export const USER_LOGIN_FORM: UserRegistrationProps[] = [
  {
    id: "1",
    name: "email",
    type: "text",
    placeholder: "Enter your email",
    inputType: "input",
  },
  {
    id: "2",
    name: "password",
    type: "text",
    placeholder: "enter password",
    inputType: "input",
  },
]
