import React from 'react'
import Navbar from '../components/ui/NavBar'
import HomePage from '@/components/ui/HomePage'
import Discography from '@/components/ui/Discography'
import Events from '@/components/ui/Events'
import Gallery from '@/components/ui/Gallery'
import AboutMe from '@/components/ui/AboutMe'
import Footer from '@/components/ui/Footer'

function page() {
  return (
    <>
      <div className="mainLayout w-[1440px] bg-black h-screen text-white justify-self-center ">

        <Navbar />
        <div className="navItem" id="home"> <HomePage /> </div>
        <div className="navItem" id="aboutme"> <AboutMe /> </div>
        <div className="navItem" id="discography"> <Discography /> </div>
        <div className="navItem" id="events"> <Events /> </div>
        <div className="navItem" id="gallery"> <Gallery /> </div>
        <Footer />
      </div>

    </>

  )
}

export default page