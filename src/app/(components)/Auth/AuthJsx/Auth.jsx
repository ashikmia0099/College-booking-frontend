'use client'

import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook, FaGithub } from 'react-icons/fa'
import SignUp from '../SignUp/SignUp/SignUp'
import SignIn from '../Signin/SignInJsx/SignIn'
// import SignIn from '../Signin/SignInJsx/SignIn'
// import SignUp from '../SignUp/SignUp' // ✅ Make sure this path is correct

export default function Auth() {
  const [showSignUp, setShowSignUp] = useState(false)

  const handleToggleToSignUp = () => setShowSignUp(true)
  const handleToggleToSignIn = () => setShowSignUp(false)

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto bg-white lg:px-[88px]">
        <div className="space-y-6 mx-auto px-10 border-2 py-10 rounded-2xl ">
          <div className="px-3 py-3 rounded-xl justify-center items-center grid grid-cols-2 gap-x-20">
            <div className="space-y-10">
              <h1 className="text-3xl font-bold capitalize text-center text-black">Come Join Us</h1>
              <p className="text-black text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cumque nam dolore assumenda.
              </p>

              <div className="flex gap-x-5 items-center justify-center">
                <span className="p-3 bg-[#d7dadf] rounded-full text-2xl"><FcGoogle /></span>
                <span className="p-3 bg-[#d7dadf] rounded-full text-2xl text-[#0866FF]"><FaFacebook /></span>
                <span className="p-3 bg-[#d7dadf] rounded-full text-2xl text-[#000000]"><FaGithub /></span>
              </div>
            </div>

            {/* Right side: SignIn or SignUp */}
            <div>
              {showSignUp ? (
                <SignUp onSwitchToSignIn={handleToggleToSignIn} />
              ) : (
                <SignIn onSwitchToSignUp={handleToggleToSignUp} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
