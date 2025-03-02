import React from 'react'
import icon from '../assets/react.svg'
function Header() {
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0"  alt="logo" />
        <div className="flex p-2 justify-between">
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
          >
            HomePage
          </button>
          <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={icon}
          />
          <button  className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
    </div>
  )
}

export default Header
