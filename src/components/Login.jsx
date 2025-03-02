import React from 'react'
import Header from './Header'
import { BG_URL } from '../utils/constants'

function Login() {
  return (
    <div>
    <Header/>
    <div className="absolute w-full">
      <img className="h-screen object-cover w-full" src={BG_URL} alt="logo" />
    </div>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
    >
      <h1 className="font-bold text-3xl py-4">
        {/* {isSignInForm ? "Sign In" : "Sign Up"} */}
      </h1>

      {/* {!isSignInForm && (
        <input
          ref={name}
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"
        />
      )} */}
      <input
        type="text"
        placeholder="Email Address"
        className="p-4 my-4 w-full bg-gray-700"
      />
      <input
        type="password"
        placeholder="Password"
        className="p-4 my-4 w-full bg-gray-700"
      />
      <p className="text-red-500 font-bold text-lg py-2"></p>
      <button
        className="p-4 my-6 bg-red-700 w-full rounded-lg"
      >
      </button>
      <p className="py-4 cursor-pointer" >
       
      </p>
    </form>
  </div>
  )
}

export default Login
