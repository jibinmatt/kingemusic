import React from 'react'
import Image from 'next/image'

function AboutMe() {
  return (
    <div className='w-[1440px] h-screen flex flex-row justify-center items-center border-2 border-red-900'>

      <div className="w-[500px]">
        <Image src="/images/aboutmeimage.png" alt="side-profile-picture" width={300} height={300} className='aboutMeImage w-[300px]' />
      </div>
      <div className="w-[500px]">
        <p className='p-3'>Every artist has a story. King E has a mission.</p>
        <p className='p-3'>Hailing from Bengaluru, India, King E isn’t just another rapper — he’s a dreamer who uses music to heal and spread joy. He turned his struggles, stories and strength into lyrics that inspire, empower, and uplift.</p>
        <p className='p-3'>His music has become more than just an artform. He turned the same music into the voice of motivation. With every verse, he delivers motivation, resilience, and the belief that no dream is too big to chase.</p>
        <p className='p-3'>Join the journey towards the mission. </p>
        <p className='p-3'>Inspire and be inspired. Let’s make the world a better place,
          one song at a time.</p>
      </div>
    </div>
  )
}

export default AboutMe