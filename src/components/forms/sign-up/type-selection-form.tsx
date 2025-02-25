"use client"
import React from "react"
import { FieldValue, FieldValues, UseFormRegister } from "react-hook-form"
import UserTypeCard from "./user-type-card"

// 这是第一步的表单，选择用户类型

type Props = {
  register: UseFormRegister<FieldValues>
  userType: "owner" | "student"
  setUserType: React.Dispatch<React.SetStateAction<"owner" | "student">>
}

const TypeSelectionForm = ({ register, userType, setUserType }: Props) => {
  return (
    <div>
      <div className="text-gravel md:text-4xl font-bold">create an account</div>
      <p className="text-iridium md:text-sm mt-1">
        Tell us about yourself! What do you do? Let's tailor your
        <br /> experience so it best suits you
      </p>
      <UserTypeCard
        value="owner"
        title="i own a business"
        text="setting up my account for my company"
        register={register}
        userType={userType}
        setUserType={setUserType}
      ></UserTypeCard>
      <UserTypeCard
        value="student"
        title="i own a student"
        text="setting up my account for myself"
        register={register}
        userType={userType}
        setUserType={setUserType}
      ></UserTypeCard>
    </div>
  )
}

export default TypeSelectionForm
