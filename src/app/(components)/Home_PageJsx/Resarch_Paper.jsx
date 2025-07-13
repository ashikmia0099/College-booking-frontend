'use client'

import image1 from '../../../../public/banner/college1.jpg'
import image2 from '../../../../public/banner/college2.jpg'
import image3 from '../../../../public/banner/college3.jpg'
import image4 from '../../../../public/banner/college4.jpg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Resarch_Paper() {
    return (
        <div className='bg-white'>
            <div className="  max-w-7xl mx-auto bg-[#ffffff]  lg:px-[88px] ">
                <div className=' '>
                    <h1 className=' text-3xl  md:text-5xl text-center text-black py-10 uppercase font-bold'>Most Popular Resarch Paper</h1>
                </div>



                <Swiper
                    slidesPerView={1}
                    spaceBetween={2}

                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}


                    modules={[Autoplay]}
                    className="mySwiper"

                >
                    <SwiperSlide><div className=''>
                        <div className=' flex items-center justify-between px-2 py-2'>
                            <span className=' text-lg uppercase font-semibold text-black'>hello </span>
                            <span className=' text-lg uppercase font-semibold text-black'>hello </span>
                        </div>
                        <div className=' relative'>
                            <Image src={image1} className=' w-full h-60 rounded-2xl'></Image>
                            <div className=' h-20 w-20 rounded-2xl bg-[#ffffffb0] grid items-center justify-center absolute top-2 right-2'>
                                <h1 className=' text-3xl font-extrabold'>10</h1>
                                
                                <h1 className=' text-xl font-semibold capitalize -mt-2'>july</h1>
                            </div>
                        </div>
                        <div className=' py-5 px-3 space-y-2'>
                            <h3 className=' text-xl font-bold text-black'>The premier choice for business marketing highly.</h3>

                        </div>
                    </div>
                    </SwiperSlide>
                   
                    <SwiperSlide><div className=''>
                        <div className=' flex items-center justify-between px-2 py-2'>
                            <span className=' text-lg uppercase font-semibold text-black'>hello </span>
                            <span className=' text-lg uppercase font-semibold text-black'>hello </span>
                        </div>
                        <div className=' relative'>
                            <Image src={image1} className=' w-full h-60 rounded-2xl'></Image>
                            <div className=' h-20 w-20 rounded-2xl bg-[#ffffffb0] grid items-center justify-center absolute top-2 right-2'>
                                <h1 className=' text-3xl font-extrabold'>10</h1>
                                
                                <h1 className=' text-xl font-semibold capitalize -mt-2'>july</h1>
                            </div>
                        </div>
                        <div className=' py-5 px-3 space-y-2'>
                            <h3 className=' text-xl font-bold text-black'>The premier choice for business marketing highly.</h3>

                        </div>
                    </div>
                    </SwiperSlide>
                   
                    <SwiperSlide><div className=''>
                        <div className=' flex items-center justify-between px-2 py-2'>
                            <span className=' text-lg uppercase font-semibold text-black'>hello </span>
                            <span className=' text-lg uppercase font-semibold text-black'>hello </span>
                        </div>
                        <div className=' relative'>
                            <Image src={image1} className=' w-full h-60 rounded-2xl'></Image>
                            <div className=' h-20 w-20 rounded-2xl bg-[#ffffffb0] grid items-center justify-center absolute top-2 right-2'>
                                <h1 className=' text-3xl font-extrabold'>10</h1>
                                
                                <h1 className=' text-xl font-semibold capitalize -mt-2'>july</h1>
                            </div>
                        </div>
                        <div className=' py-5 px-3 space-y-2'>
                            <h3 className=' text-xl font-bold text-black'>The premier choice for business marketing highly.</h3>

                        </div>
                    </div>
                    </SwiperSlide>
                   
                    <SwiperSlide><div className=''>
                        <div className=' flex items-center justify-between px-2 py-2'>
                            <span className=' text-lg uppercase font-semibold text-black'>hello </span>
                            <span className=' text-lg uppercase font-semibold text-black' >hello </span>
                        </div>
                        <div className=' relative'>
                            <Image src={image1} className=' w-full h-60 rounded-2xl'></Image>
                            <div className=' h-20 w-20 rounded-2xl bg-[#ffffffb0] grid items-center justify-center absolute top-2 right-2'>
                                <h1 className=' text-3xl font-extrabold'>10</h1>
                                
                                <h1 className=' text-xl font-semibold capitalize -mt-2'>july</h1>
                            </div>
                        </div>
                        <div className=' py-5 px-3 space-y-2'>
                            <h3 className=' text-xl font-bold text-black'>The premier choice for business marketing highly.</h3>

                        </div>
                    </div>
                    </SwiperSlide>
                   
                    <SwiperSlide><div className=''>
                        <div className=' flex items-center justify-between px-2 py-2'>
                            <span className=' text-lg uppercase font-semibold text-black'>hello </span>
                            <span className=' text-lg uppercase font-semibold text-black'>hello </span>
                        </div>
                        <div className=' relative'>
                            <Image src={image1} className=' w-full h-60 rounded-2xl'></Image>
                            <div className=' h-20 w-20 rounded-2xl bg-[#ffffffb0] grid items-center justify-center absolute top-2 right-2'>
                                <h1 className=' text-3xl font-extrabold'>10</h1>
                                
                                <h1 className=' text-xl font-semibold capitalize -mt-2'>july</h1>
                            </div>
                        </div>
                        <div className=' py-5 px-3 space-y-2'>
                            <h3 className=' text-xl font-bold text-balck'>The premier choice for business marketing highly.</h3>

                        </div>
                    </div>
                    </SwiperSlide>
                   
                    <SwiperSlide><div className=''>
                        <div className=' flex items-center justify-between px-2 py-2'>
                            <span className=' text-lg uppercase font-semibold text-black'>hello </span>
                            <span className=' text-lg uppercase font-semibold text-black'>hello </span>
                        </div>
                        <div className=' relative'>
                            <Image src={image1} className=' w-full h-60 rounded-2xl'></Image>
                            <div className=' h-20 w-20 rounded-2xl bg-[#ffffffb0] grid items-center justify-center absolute top-2 right-2'>
                                <h1 className=' text-3xl font-extrabold'>10</h1>
                                
                                <h1 className=' text-xl font-semibold capitalize -mt-2'>july</h1>
                            </div>
                        </div>
                        <div className=' py-5 px-3 space-y-2'>
                            <h3 className=' text-xl font-bold text-black'>The premier choice for business marketing highly.</h3>

                        </div>
                    </div>
                    </SwiperSlide>
                   

                </Swiper>


            </div>
        </div>
    )
}




