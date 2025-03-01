import React from 'react'
import Image from 'next/image'

function NavBar() {
  return (
    <div className="navBar ${neuton.className} w-[1440px] flex flex-col justify-between items-center mx-auto p-5">
      <div className="logo  p-3">
        <Image src="/logo.png" height={40} width={40} alt="Logo" />
      </div>

      <div className="">
        <ul className="flex flex-row justify-between">
          <li className="p-10 font-thin">
            <a href="">home</a>
          </li>
          <li className="p-10">
            <a href="">about me</a>
          </li>
          <li className="p-10">
            <a href="">discography</a>
          </li>
          <li className="p-10">
            <a href="">events</a>
          </li>
          <li className="p-10">
            <a href="">gallery</a>
          </li>
        </ul>
      </div>


    </div>
  )
}

export default NavBar