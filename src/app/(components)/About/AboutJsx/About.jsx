

'use client'

import React, { useState } from 'react'
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

// Zod Schema
const formSchema = z.object({
  collegename: z.string().min(2, 'college name is required'),
  username: z.string().min(2, 'Candidate name is required'),
  username: z.string().min(2, 'Candidate name is required'),
  subject: z.string().min(1, 'Subject is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(6, 'Phone is required'),
  address: z.string().min(1, 'Address is required'),
  dob: z.string().min(1, 'Date of Birth is required'),
})

export default function About() {

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

  const onSubmit = (data) => {
    console.log('Form submitted:', data)
    setIsPopoverOpen(false) // close popup on submit
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto bg-white lg:px-[88px]">
        

        {/* College Card */}
        <div className="space-y-6 w-[60%] mx-auto pb-20">
          <h1 className="text-5xl text-center text-black py-10 uppercase font-bold">
          Admission Now
        </h1>
          <div className=" px-3 py-3 rounded-xl justify-center items-center">
            {/* Admission Now Popover */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="w-full"> {/* Ensure this has w-full */}
                      <FormLabel className="text-black">College Name</FormLabel>
                      <FormControl>
                        <div className="w-full text-black"> {/* ✅ Wrapper for safety */}
                          <Input placeholder="College name"  {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="w-full"> {/* Ensure this has w-full */}
                      <FormLabel className="text-black">Candidate Name</FormLabel>
                      <FormControl>
                        <div className="w-full text-black"> {/* ✅ Wrapper for safety */}
                          <Input placeholder="Your name"  {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Your subject" className="text-black" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Email" className={ 'text-black'} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">Phone Number</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Phone number" className="text-black" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Your address" className="text-black" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">Date of Birth</FormLabel>
                      <FormControl>
                        <Input placeholder="dd-mm-yyyy" className="text-black" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

