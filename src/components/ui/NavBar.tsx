import React from 'react'

function NavBar() {
  return (
    <div className="navBar w-[1440px] flex flex-col justify-between items-center mx-auto p-5">
      <div className="logo h-[40px] w-[40px] ">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      <div className=" ">
        <ul className="flex flex-row justify-between p-5">
          <li className="p-5">
            <a href="">home</a>
          </li>
          <li className="p-5">
            <a href="">about me</a>
          </li>
          <li className="p-5">
            <a href="">discography</a>
          </li>
          <li className="p-5">
            <a href="">events</a>
          </li>
          <li className="p-5">
            <a href="">gallery</a>
          </li>
        </ul>
      </div>


    </div>
  )
}

export default NavBar