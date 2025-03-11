import React from "react"
import OTPInput from "@/components/otp"

type Props = {
  setOTP: React.Dispatch<React.SetStateAction<string>>
  onOTP: string
}

const OPTForm = ({ onOTP, setOTP }: Props) => {
  return (
    <div>
      <h2 className="text-gravel md:text-4xl font-bold">Enter OTP</h2>
      <p className="text-gravel md:text-sm">please enter your otp</p>
      <div className="w-full justify-center items-center flex py-5">
        <OTPInput otp={onOTP} setOtp={setOTP}></OTPInput>
      </div>
    </div>
  )
}

export default OPTForm
