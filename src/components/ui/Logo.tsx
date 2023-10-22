import Image from 'next/image'
import React from 'react'
import LogoIcon from "../../../public/logo.svg"
export default function Logo() {
  return (
    <>
   <Image src={LogoIcon} alt="logo" width="100" height="100" />
    </>
  )
}
