'use client'

import React, { useState } from 'react'
import { useAuth } from '../../../../../../AuthContext/AuthContext'
import Swal from 'sweetalert2'

export default function Auth({ onSwitchToSignIn }) {
  const [error, setError] = useState({})
  const [passwordLength, setPasswordLength] = useState('')
  const { RegisterWithEmailPassword, updateUserProfile } = useAuth()

  const handelSubmit = async (e) => {
    e.preventDefault()

    const form = new FormData(e.target)
    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password')
    const Confirm_Password = form.get('confirmpassword')

    if (name.length < 6) {
      setError({ name: 'Name must have at least 6 characters.' })
      return
    }

    if (password.length < 8) {
      setPasswordLength('Password should be at least 8 characters.')
      return
    }

    if (password !== Confirm_Password) {
      setPasswordLength('Password Not Matched.')
      return
    }

    try {
      // 1️⃣ Register with Firebase
      await RegisterWithEmailPassword(email, password)

      // 2️⃣ Update Firebase profile
      await updateUserProfile({ displayName: name })

      // 3️⃣ Send user data to your MongoDB via API
      const newUser = { name, email, createdAt: new Date().toISOString() }

      const response = await fetch('https://college-booking-backend-ro5u.onrender.com/all_users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })

      if (!response.ok) {
        throw new Error('Failed to save user to database')
      }

      // 4️⃣ Show success alert
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registration successful!',
        showConfirmButton: false,
        timer: 1500
      })

      e.target.reset()
    } catch (err) {
      console.error('Error:', err)

      let errorMessage
      switch (err.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'This email is already in use.'
          break
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.'
          break
        case 'auth/weak-password':
          errorMessage = 'Password must be at least 6 characters.'
          break
        default:
          errorMessage = err.message || 'An unexpected error occurred.'
      }
      setError({ firebase: errorMessage })
    }
  }

  return (
    <div>
      <h1 className='text-3xl capitalize font-bold text-center pb-10 text-black'>Sign Up</h1>

      <form onSubmit={handelSubmit}>
        <legend className="text font-semibold text-black"> Name </legend>
        <input type="text" name="name" className="input w-full text-white hover:bg-black" placeholder="Name" required />

        <legend className="text font-semibold pt-2 text-black">Email</legend>
        <input type="email" name="email" className="input w-full text-white" placeholder="Email" required />

        <legend className="text font-semibold pt-2 text-black">Password</legend>
        <input type="password" name="password" className="input w-full text-white" placeholder="Password" required />

        <legend className="text font-semibold pt-2 text-black">Confirm Password</legend>
        <input type="password" name="confirmpassword" className="input w-full text-white" placeholder="Confirm Password" required />

        {passwordLength && <p className="text-red-500 mt-1">{passwordLength}</p>}
        {error.firebase && <p className="text-red-500 mt-1">{error.firebase}</p>}

        <button className="btn btn-primary w-full mt-3">Submit</button>
      </form>

      <div
        className="h-10 items-center flex justify-center rounded-full mt-5 cursor-pointer border-2 border-gray-400"
        onClick={onSwitchToSignIn}
      >
        <h3 className="capitalize font-medium text-black">
          Already have an account?
          <span className="font-bold pl-1 text-blue-400 hover:border-b-2 border-blue-400">Sign In</span>
        </h3>
      </div>
    </div>
  )
}
