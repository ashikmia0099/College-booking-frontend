'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../../../../../AuthContext/AuthContext'

export default function SignIn({ onSwitchToSignUp }) {
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const { setUser, SignInWithEmailPassword } = useAuth()
  const router = useRouter() // ✅ initialize router

  const handleEmailSignIn = (e) => {
    e.preventDefault()

    const form = e.target
    const email = form.email.value
    const password = form.password.value

    SignInWithEmailPassword(email, password)
      .then((result) => {
        const loggedInUser = result.user
        setUser(loggedInUser)

        // ✅ Show success alert then navigate
        import('sweetalert2').then(Swal => {
          Swal.default.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login Successful!',
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            router.push('/') // ✅ Navigate to homepage after alert
          })
        })
      })
      .catch((error) => {
        console.error('Login error:', error)
        setErrorMessage(error.message)
      })
  }

  return (
    <div>
      <h1 className="text-3xl capitalize font-bold text-center pb-10 text-black">
        Sign In
      </h1>

      <form onSubmit={handleEmailSignIn}>
        <legend className="text font-semibold pt-2 text-black">Email</legend>
        <input
          type="email"
          name="email"
          className="input w-full text-white"
          placeholder="Email"
          required
        />

        <legend className="text font-semibold pt-2 text-black">Password</legend>
        <input
          type="password"
          name="password"
          className="input w-full text-white"
          placeholder="Password"
          required
        />

        <button className="btn btn-primary w-full mt-3">Submit</button>

        {errorMessage && (
          <p className="text-red-500 pt-2 text-sm font-medium">{errorMessage}</p>
        )}
      </form>

      <div
        className="border-2 border-gray-400 h-10 items-center flex justify-center rounded-full mt-5 cursor-pointer"
        onClick={onSwitchToSignUp}
      >
        <h3 className="capitalize font-medium text-black">
          Don&apos;t have an account?
          <span className="font-bold pl-1 text-blue-400 hover:border-b-2 border-blue-400 ">
            Sign Up
          </span>
        </h3>
      </div>
    </div>
  )
}
