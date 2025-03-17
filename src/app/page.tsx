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
      <div style={{ backgroundImage: `url('/images/gradient-bg.svg')` }} className="mainLayout w-full text-white flex flex-col justify-self-center items-center bg-cover bg-center">
        <div style={{ backgroundImage: `url('/images/noise-bg.svg')` }} className=" w-full  text-white flex flex-col justify-self-center items-center bg-cover bg-center">
          <Navbar />
          <div className="navItem" id="home"> <HomePage /> </div>
          <div className="navItem" id="aboutme"> <AboutMe /> </div>
          <div className="navItem" id="discography"> <Discography /> </div>
          <div className="navItem" id="events"> <Events /> </div>
          <div className="navItem" id="gallery"> <Gallery /> </div>
          <Footer />
        </div>
      </div>

    </>

  )
}

export default page