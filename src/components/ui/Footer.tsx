import React from 'react'
import Image from 'next/image'
import TextScroll from './TextScroll'

function Footer() {
  return (
    <div className='w-[1440px] z-[1] bg-black h-screen flex flex-col justify-end items-center border-2 border-red-900'>
      <TextScroll />
      <p>Footer</p>
      <Image src="/images/ECLan-White.png" width={100} height={100} alt='E Clan logo' />
    </div>
  )
}

export default Footer