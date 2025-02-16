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
      <div className="mainLayout w-[1440px] bg-black h-screen text-white justify-self-center">

        <div className="navBar w-[1440px] fixed text-xl">
          <div className="navBar ${neuton.className} w-[1440px] flex flex-col justify-between items-center mx-auto p-5">
            <div className="logo  p-3">
              <img src="./logo.png" height="40px" width="40px" alt="Logo" />
            </div>

            <div className="">
              <ul className="flex flex-row justify-between">
                <li className="p-10 font-thin">
                  <a href="#home">home</a>
                </li>
                <li className="p-10">
                  <a href="#aboutme">about me</a>
                </li>
                <li className="p-10">
                  <a href="#discography">discography</a>
                </li>
                <li className="p-10">
                  <a href="#events">events</a>
                </li>
                <li className="p-10">
                  <a href="#gallery">gallery</a>
                </li>
              </ul>
            </div>


          </div>
        </div>

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