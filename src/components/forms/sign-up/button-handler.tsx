"use client"
import { useAuthContextHook } from "@/context/use-auth-context"
import React from "react"

// 定义组件的属性类型
type props = {}

// 定义组件
const ButtonHandler = ({}: props) => {
  // 获取当前的步骤
  // name email password
  // 获取当前的步骤
  const { currentStep } = useAuthContextHook()

  return <div>aaads</div>
}

export default ButtonHandler
