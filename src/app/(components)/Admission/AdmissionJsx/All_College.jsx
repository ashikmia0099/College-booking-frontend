'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import college1 from '../../../../../public/banner/college1.jpg'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useAuth } from '../../../../../AuthContext/AuthContext'
import Link from 'next/link'

// Zod Schema
const formSchema = z.object({
  username: z.string().min(2, 'Candidate name is required'),
  subject: z.string().min(1, 'Subject is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(6, 'Phone is required'),
  address: z.string().min(1, 'Address is required'),
  dob: z.string().min(1, 'Date of Birth is required'),
})

export default function All_College() {

  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      subject: '',
      email: '',
      phone: '',
      address: '',
      dob: '',
    },
  })



  const { college_Data, setcollege_Data } = useAuth();


  useEffect(() => {
    fetch('http://localhost:5000/all_college')
      .then(res => res.json())
      .then(data => {
        setcollege_Data(data);
      })
  }, [])


  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto bg-white lg:px-[88px]">
        <h1 className="text-3xl md:text-5xl text-center text-black py-10 uppercase font-bold">
          Our All College List
        </h1>

        {/* College Card */}
        <div className="space-y-6 pb-20 px-3 lg:px-0">
          {
            college_Data?.map((data, index) => (
              <div className="border-2 border-gray-500 px-3 py-3 rounded-xl md:flex justify-between items-center">
                <div className="md:flex gap-x-5">
                 
                  <img src={data.College_Image} alt={data.College_Name}  className="h-40 w-full md:h-14 md:w-14 rounded-lg" />
                  <div>
                    <h4 className="text-lg font-semibold capitalize text-black py-2 md:py-0">{data.College_Name}</h4>
                    <div className="md:flex items-center gap-x-5">
                      <h4 className=' text-black'><span className="font-semibold text-black">Admission start:</span> {data.Admission_Start}</h4>
                      <h4 className=' text-black py-2 md:py-0'><span className="font-semibold className=' text-black'">Admission end:</span> {data.Admission_End}</h4>
                    </div>
                  </div>
                </div>

                {/* Admission Now Popover */}
                <div>
                  <Link href={`/Admission/${data._id}`}>
                  <Button className="rounded-full cursor-pointer" onClick={() => setIsPopoverOpen(true)}>
                    Admission Now
                  </Button>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
