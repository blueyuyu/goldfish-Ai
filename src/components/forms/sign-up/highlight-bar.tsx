"use client"
import { useAuthContextHook } from "@/context/use-auth-context"
import React from "react"
import { cn } from "@/lib/utils"

// 定义组件的属性类型
type props = {}

// 定义组件
const HighLightBar = ({}: props) => {
  const { currentStep } = useAuthContextHook()

  return (
    <div className="grid grid-cols-3 gap-2">
      <div
        className={cn(
          "rounded-full bg-orange h-3",
          currentStep === 1 ? "bg-orange" : "bg-stone-200",
        )}
      ></div>
      <div
        className={cn(
          "rounded-full bg-orange h-3",
          currentStep === 2 ? "bg-orange" : "bg-stone-200",
        )}
      ></div>
      <div
        className={cn(
          "rounded-full bg-orange h-3",
          currentStep === 3 ? "bg-orange" : "bg-stone-200",
        )}
      ></div>
    </div>
  )
}

export default HighLightBar
