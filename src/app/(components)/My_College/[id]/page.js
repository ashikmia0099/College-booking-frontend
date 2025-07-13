
'use client'

import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

import image1 from '../../../../../public/banner/college1.jpg'
import { useAuth } from '../../../../../AuthContext/AuthContext';
import { Button } from '@/components/ui/button';

export default function Page() {



    const { college_Data, setcollege_Data } = useAuth();
    const [singledata, setSingleData] = useState([]);


    const params = useParams();
    const roter = useRouter();
    const id = params?.id;





    useEffect(() => {
        fetch('http://localhost:5000/user_colleges')
            .then(res => res.json())
            .then(data => {
                setcollege_Data(data);
            })
    }, [])


    console.log('college data', college_Data)





    useEffect(() => {
        if (college_Data.length > 0 && id) {
            const found = college_Data.find(data => data._id === id)
            setSingleData(found)
            console.log('Matched college item:', found)
        }
    }, [college_Data, id])

    console.log('college data single', singledata)



    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto lg:px-[88px]">
                <h1 className=" text-3xl md:text-5xl text-center text-black py-10 uppercase font-bold">
                    {singledata?.College_Name}
                </h1>

                <div className=' grid md:grid-cols-2 gap-x-10 lg:h-[70vh] items-center px-3 lg:px-0'>
                    <div>

                        <img src={singledata.College_Image} className=' h-[300px] lg:h-[400px] w-full rounded-2xl' />
                    </div>


                    <div className='md:space-y-3 pt-5 md:px-0'>
                        <div className=' md:grid grid-cols-2 items-center justify-between'>
                            <p className='text-lg font-semibold text-black'>Subject : <span className=' font-normal'>{singledata?.Subject}.</span></p>
                            <p className='text-lg font-semibold text-black'> Date  Of Birth : <span className=' font-normal'>{singledata?.Birth_Date}.</span></p>

                        </div>

                        <div className=' md:grid grid-cols-2 items-center justify-between'>
                            <p className='text-lg font-semibold text-black'>Student Email : <span className=' font-normal text-black'>{singledata?.studentEmail}</span> </p>

                            <p className='text-lg font-semibold text-black'>Student Name : <span className=' font-normal'>{singledata?.studentName}.</span> </p>

                        </div>



                        <div className=' md:grid grid-cols-2 items-center justify-between'>
                            <p className='text-lg font-semibold text-black'>Phone : <span className=' font-normal'>{singledata?.Phone}.</span> </p>

                            <p className='text-lg font-semibold text-black'>Address : <span className=' font-normal text-black'>{singledata?.Address}</span> </p>

                        </div>


                        <div className=' md:grid grid-cols-2 items-center justify-between'>
                            <p className='text-lg font-semibold text-black'>Admission Start: <span className=' font-normal'>{singledata?.Admission_Start}.</span> </p>
                            <p className='text-lg font-semibold text-black'>Admission End: <span className=' font-normal'>{singledata?.Admission_End}.</span> </p>

                        </div>
                        <div className=' md:grid grid-cols-2 items-center justify-between'>
                            <p className='text-lg font-semibold text-black'>Admission Process: <span className=' font-normal'>{singledata?.Admission_Process}.</span> </p>
                            <p className='text-lg font-semibold text-black'>Events : <span className=' font-normal'>{singledata?.Events}.</span> </p>

                        </div>
                        <div className=' md:grid grid-cols-2 items-center justify-between'>
                            <p className='text-lg font-semibold text-black'>Resarchs : <span className=' font-normal'>{singledata?.Resarch_Name}.</span> </p>
                            <p className='text-lg font-semibold text-black'>Addmited At : <span className=' font-normal'>{singledata?.Sports_Name}.</span> </p>

                        </div>
                        <p className='text-lg font-semibold text-black'>Sports : <span className=' font-normal'>{singledata?.Sports_Name}.</span> </p>



                        <Button className="w-full rounded-full mt-10">
                            Admission Now
                        </Button>
                    </div>



                </div>
            </div>
        </div>
    )
}

