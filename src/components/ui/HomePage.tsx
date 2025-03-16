import React from 'react'
import Image from 'next/image'
import TextScroll from './TextScroll'
import BackgroundGlow from './BackgroundGlow'

function HomePage() {
  return (
    <div className='w-[1440px] bg-black h-screen flex flex-col justify-end items-center p-5'>

      <div className="HomePage flex flex-col items-center justify-end">

        <TextScroll />

        <div className="heroImage w-full h-full flex justify-end items-center mb-[62px] ">
          <BackgroundGlow />
          <Image className='z-[10]' src="/images/heroimagekinge.png" alt="hero image" width={380} height={380} />
        </div>


        <div className="ctaDiscoverButton z-[10] flex flex-col items-center justify-items-end mb-[62px] ">
          <button className="rounded-full h-[60px] w-[250px] bg-white text-black text-lg">
            discover my work
          </button>
        </div>

      </div>

    </div>
  )
}

export default HomePage