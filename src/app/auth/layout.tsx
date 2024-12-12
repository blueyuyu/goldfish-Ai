import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import Image from "next/image"
import React from "react"

type Props = {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const user = await currentUser()

  if (user) redirect("/")

  return (
    <div className="h-screen flex w-full justify-center">
      <div className="w-[600px] ld:w-full flex flex-col items-start p-6">
        <Image
          src="/images/logo.png"
          alt="LOGO"
          sizes="100vw"
          style={{
            width: "20%",
            height: "auto",
          }}
          width={0}
          height={0}
        ></Image>
        {children}
      </div>
      <div className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative bg-cream flex-col pt-10 pl-24 gap-3">
        <h2 className="text-gravel md:text-4xl font-bold">
          hi, I am your Ai powered sales assistant, blueSky!
        </h2>
        <p>
          blueSky is capable pf capturing lead information without a form ...
          <br />
          something never done before !!
        </p>
        <Image
          src="/images/app-ui.png"
          alt="app-ui"
          sizes="30"
          className="absolute shrink-0 !w-[1600px] top-48 max-w-[85%]"
          style={{
            width: "30%",
            height: "auto",
          }}
          loading="lazy"
          width={0}
          height={0}
        ></Image>
      </div>
    </div>
  )
}

export default Layout
