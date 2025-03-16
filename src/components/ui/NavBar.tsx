import React from 'react'
import Image from 'next/image'

function NavBar() {
  return (
    <div className="navBar w-[1440px] h-[170px] fixed text-lg  z-[50] backdrop-blur-lg border-2 border-red-900">
      <div className="navBar ${neuton.className} w-full flex flex-col justify-between items-center mx-auto p-5">
        <div className="logo p-3">
          <Image src="/images/logo.png" width={35} height={35} alt="Logo" />
        </div>

        <div>
          <ul className="flex flex-row justify-between">
            <li className="p-10 hover:text-gray-200">
              <a href="#home">home</a>
            </li>
            <li className="p-10 hover:text-gray-200">
              <a href="#aboutme">about me</a>
            </li>
            <li className="p-10 hover:text-gray-200">
              <a href="#discography">discography</a>
            </li>
            <li className="p-10 hover:text-gray-200">
              <a href="#events">events</a>
            </li>
            <li className="p-10 hover:text-gray-200">
              <a href="#gallery">gallery</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar