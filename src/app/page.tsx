import React from 'react'
import Navbar from '../components/ui/NavBar'
import HomePage from '@/components/ui/HomePage'
import Discography from '@/components/ui/Discography'
import Events from '@/components/ui/Events'
import Gallery from '@/components/ui/Gallery'
import AboutMe from '@/components/ui/AboutMe'

function page() {
  return (
    <>
      <div className="mainLayout w-[1440px] bg-black h-screen text-white justify-self-center">
        <div className="navBar w-[1440px] fixed">
          <Navbar />
        </div>
        <HomePage />
        <AboutMe />
        <Discography />
        <Events />
        <Gallery />

      </div>


    </>

  )
}

export default page