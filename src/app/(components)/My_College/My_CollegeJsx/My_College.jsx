
'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import college1 from '../../../../../public/banner/college1.jpg'
import { Button } from '@/components/ui/button'
import { useParams, useRouter } from 'next/navigation'
import { useAuth } from '../../../../../AuthContext/AuthContext'
import Link from 'next/link'


export default function My_College() {



    const { college_Data, setcollege_Data, user, setUser } = useAuth();
    const [singledata, setSingleData] = useState([]);
    const [userAlldata, setuserAlldata] = useState([]);


    const params = useParams();
    const roter = useRouter();
    const id = params?.id;




    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/user_colleges/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setuserAlldata(data)

                });
        }
    }, [user]);



    console.log("User's admitted college:", userAlldata);

    useEffect(() => {
        if (college_Data.length > 0 && id) {
            const found = college_Data.find(data => data._id === id)
            setSingleData(found)
            console.log('Matched college item:', found)
        }
    }, [college_Data, id])

    console.log('college data single', singledata)





    // user data

    useEffect(() => {
        fetch('http://localhost:5000/all_users')
            .then(res => res.json())
            .then(data => {
                setUser(data);
            })
    }, [])


    console.log('user data', user)



    // useEffect(() => {
    //     if (user?.length > 0 && id) {
    //         const found = user.find(data => data._id === id)
    //         setuserSingleData(found)
    //         console.log('Matched college item:', found)
    //     }
    // }, [user, id])

    // console.log('single uer  data single', userSingleData)






    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto bg-white lg:px-[88px]">
                <h1 className="text-3xl md:text-5xl text-center text-black py-10 uppercase font-bold">
                    My College
                </h1>

                {/* College Card */}
                <div className="space-y-6 pb-20 px-3 lg:px-0">
                    {
                        userAlldata?.map((data, index) => (
                            <div key={data._id} className="border-2 border-gray-400 px-3 py-3 rounded-xl  md:flex justify-between items-center">
                                <div className=" md:flex gap-x-5">

                                    <img src={data.College_Image} alt="College" className=" h-40 w-full md:h-14 md:w-14 rounded-lg" />
                                    <div>
                                        <h4 className="text-lg font-semibold capitalize text-black pt-5 md:pt-0">{data.College_Name}</h4>
                                        <div className="flex items-center gap-x-5 pt-3 md:pt-0">
                                            <h4 className='text-black'>
                                                <span className="font-semibold text-black">Admission At :</span>{' '}
                                                {new Date(data.admittedAt).toLocaleDateString('en-US', {
                                                    day: '2-digit',
                                                    month: 'long',
                                                    year: 'numeric',
                                                })}
                                            </h4>
                                        </div>
                                    </div>
                                </div>

                                {/* Admission Now Popover */}
                                <div className=' pt-3 md:pt-0'>
                                    <Link href={`/My_College/${data._id}`}>
                                        <Button className="rounded-full cursor-pointer" onClick={() => setIsPopoverOpen(true)}>
                                            College Details
                                        </Button></Link>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
