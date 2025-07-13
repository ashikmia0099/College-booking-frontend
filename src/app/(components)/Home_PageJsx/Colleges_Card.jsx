'use client'

import React, { useEffect, useState } from 'react'
import image1 from '../../../../public/banner/college1.jpg'
import image2 from '../../../../public/banner/college2.jpg'
import image3 from '../../../../public/banner/college3.jpg'
import image4 from '../../../../public/banner/college4.jpg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FaStar } from 'react-icons/fa'
import Link from 'next/link'
import { useAuth } from '../../../../AuthContext/AuthContext'

export default function Colleges_Card() {

    const { college_Data, setcollege_Data } = useAuth();


    useEffect(() => {
        fetch('https://college-booking-backend.vercel.app/all_college')
            .then(res => res.json())
            .then(data => {
                setcollege_Data(data);
            })
    }, [])

    return (
        <div className='bg-white'>
            <div className="  max-w-7xl mx-auto bg-[#ffffff]  lg:px-[88px]">
                <div className=' '>
                    <h1 className=' text-3xl md:text-5xl text-center text-black py-10 uppercase font-bold'>Our All College</h1>
                </div>

                <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 mt-6 mb-10'>


                    {
                        college_Data?.slice(-6).map((data, index) => (
                            <div key={data._id} className=' border-2 shadow-lg  rounded-2xl mb-10'>

                                <img src={data.College_Image} alt={data.College_Name} className=' w-full h-60 rounded-t-2xl' />
                                <div className=' py-5 px-3 space-y-2'>
                                    <h3 className=' text-xl font-bold text-black'>{data.College_Name}</h3>
                                    <div className='space-y-2'>
                                        <h4 className=' text-black'><span className='font-bold text-black'>Admission Start</span> : {data.Admission_Start}</h4>

                                    </div>
                                    <div className='space-y-2'>
                                        <h4 className=' text-black'><span className='font-bold text-black'>Event Date</span> :{data.Events}</h4>

                                        <h4>
                                            <span className='font-bold text-black'>Sports</span> :
                                            {data.Sports_Name?.split(',').map((sport, index) => (
                                                <span key={index} className=' text-black'>
                                                    {sport.trim()}
                                                    {index !== data.Sports_Name.split(',').length - 1 ? ', ' : ''}
                                                </span>
                                            ))}
                                        </h4>



                                    </div>
                                    <div className=' flex items-center gap-x-2'>
                                        <div>
                                            <h4><span className='font-bold text-black'>Rating</span> :</h4>
                                        </div>
                                        <div className=' flex items-center gap-x-1'>
                                            <span className='text-sm text-yellow-500'><FaStar /></span>
                                            <span className='text-sm text-yellow-500'><FaStar /></span>
                                            <span className='text-sm text-yellow-500'><FaStar /></span>
                                            <span className='text-sm text-yellow-500'><FaStar /></span>
                                            <span className='text-sm text-yellow-500'><FaStar /></span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Link href={`/Colleges/${data._id}`}>  <Button className="w-60 rounded-full mt-2 " >Details</Button></Link>
                                    </div>
                                </div>
                            </div>


                        ))
                    }


                </div>

                <div className=' pb-10 flex justify-center'>
                    <Button className="text-xl font-bold px-12 rounded-full">See All College</Button>
                </div>
            </div>
        </div>
    )
}
