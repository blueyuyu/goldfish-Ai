"use client"
import React, { useState } from "react"

type InitialValueProps = {
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const InitialValues: InitialValueProps = {
  currentStep: 1,
  setCurrentStep: () => undefined,
}

const authContext = React.createContext(InitialValues)

const { Provider } = authContext

export const AuthContentProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStep, setCurrentStep] = useState<number>(InitialValues.currentStep)

  const values = {
    currentStep,
    setCurrentStep,
  }
  return (
    // 这里是最终展现的
    <Provider value={values}>{children}</Provider>
  )
}

export const useAuthContextHook = () => {
  const state = React.useContext(authContext)
  return state
}

// TODO 对这一块的数据传递不太理解！！！
