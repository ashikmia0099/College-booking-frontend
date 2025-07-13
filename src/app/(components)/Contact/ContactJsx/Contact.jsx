

'use client'
import React, { useEffect } from 'react'

import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'


function Contact() {




    return (
        <div className='max-w-[1596px] mx-auto bg-white'>
            <div >

                <h1 className={` text-3xl  font-extrabold uppercase leading-10 md:leading-14 lg:leading-20 xl:leading-28 text-center px-5 md:px-[10%] xl:px-[20%] pt-16 text-black`}>
                    We Have love from You
                </h1>
                <p className={` px-5 md:px-[10%] xl:px-[15%] text-[16px] text-center py-10 text-black `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odit nam laudantium officiis corporis earum suscipit quia repudiandae enim voluptate, eaque repellendus asperiores molestias facere, sit ducimus odio accusantium quidem.</p>
            </div>

            <div className=' grid md:grid-cols-2 gap-y-10 xl:gap-y-22 gap-0 md:gap-10 xl:gap-20 px-5 xl:px-36 pb-16 xl:pb-36 pt-10 lg:pt-20'>

                {/* phone */}


                <div  className='px-5 xl:px-10 py-6 rounded-2xl shadow-xl shadow-[#91aab4] '>
                    <div className=' h-16 w-16 bg-[#cfeefab7] rounded-sm flex items-center justify-center'>
                        <FaPhoneAlt className=' text-3xl text-[#11aeec]' />
                    </div>
                    <h4 className=' text-2xl font-bold text-black pt-3'>Phone</h4>
                    <p className=' text-[16px] lg:text-lg font-semibold leading-6 pt-3 text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, voluptatem nemo nulla magni cumque odit. </p>
                    <div className=' pt-4 space-y-1.5'>
                        <h4 className=' text-lg lg:text-xl font-bold text-[#0881b1]'>
                            +881652442452
                        </h4>
                        <h4 className=' text-lg lg:text-xl font-bold text-[#0881b1]'>
                             +881652442452
                        </h4>
                    </div>
                </div>


                {/* // email */}

                <div  className='px-5 xl:px-10 py-6 rounded-2xl shadow-xl shadow-[#91aab4] '>
                    <div className=' h-16 w-16 bg-[#cfeefab7] rounded-sm flex items-center justify-center'>
                        <MdOutlineEmail className=' text-3xl text-[#11aeec]' />
                    </div>
                    <h4 className=' text-2xl font-bold text-black pt-3'>Email</h4>
                    <p className=' text-[16px] lg:text-lg font-semibold leading-6 pt-3  text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, aliquid ratione. Pariatur non quos quae.</p>
                    <div className=' pt-4 space-y-1.5'>
                        <h4 className=' text-lg lg:text-xl font-bold text-[#0881b1]'>
                           ashik@gamil.com
                        </h4>
                        <h4 className=' text-lg lg:text-xl font-bold text-[#0881b1]'>
                           ashik@gamil.com
                        </h4>
                    </div>
                </div>


                {/* // Location */}

                <div className='px-5 xl:px-10 py-6 rounded-2xl shadow-xl shadow-[#91aab4] '>
                    <div className=' h-16 w-16 bg-[#cfeefab7] rounded-sm flex items-center justify-center'>
                        <FaMapMarkerAlt className=' text-3xl text-[#11aeec]' />
                    </div>
                    <h4 className=' text-2xl font-bold text-black pt-3'>Location</h4>
                    <p className=' text-[16px] lg:text-lg font-semibold leading-6 pt-3 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, repellendus aperiam ullam nulla voluptates quasi.</p>
                    <div className=' pt-4 space-y-1.5'>
                        <h4 className=' text-lg lg:text-xl font-bold text-[#0881b1]'>
                            Dhaka, Bangladesh
                        </h4>
                    </div>
                </div>


                {/* // time */}


                <div  className='px-5 xl:px-10 py-6 rounded-2xl shadow-xl shadow-[#91aab4] '>
                    <div className=' h-16 w-16 bg-[#cfeefab7] rounded-sm flex items-center justify-center'>
                        <FaRegClock className=' text-3xl text-[#11aeec]' />
                    </div>
                    <h4 className=' text-2xl font-bold text-black pt-3'>Opening Day</h4>
                    <p className=' text-[16px] lg:text-lg font-semibold leading-6 pt-3  text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis reiciendis fugit doloribus voluptates sint ipsa. </p>
                    <div className=' pt-4 space-y-1.5'>
                        <h4 className=' text-lg lg:text-xl font-bold text-[#0881b1]'>
                            Saturdery-Twesday
                        </h4>
                        
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Contact