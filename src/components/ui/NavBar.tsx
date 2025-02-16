import React from 'react'

function NavBar() {
  return (
    <div className="navBar ${neuton.className} w-[1440px] flex flex-col justify-between items-center mx-auto p-5">
      <div className="logo  p-3">
        <img src="./logo.png" height="40px" width="40px" alt="Logo" />
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