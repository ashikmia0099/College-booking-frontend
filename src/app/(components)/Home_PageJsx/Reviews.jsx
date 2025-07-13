

'use client';
import { IoStar } from 'react-icons/io5'
import { FaQuoteLeft } from "react-icons/fa";




import React, { useRef, useState } from 'react';


// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Reviews() {
    return (
        <div className='bg-white'>
            <div className="  max-w-7xl mx-auto bg-[#ffffff]  lg:px-[88px] ">
                <div className=' '>
                    <h1 className=' text-sm text-center text-black pt-10 pb-2 uppercase font-medium border-b-4 w-[50%] mx-auto '>--- What Our Student Say ---</h1>
                    <h1 className=' text-xl text-center text-black pt-5 pb-2 uppercase font-bold border-b-4 w-[50%] mx-auto '>Reviews</h1>
                </div>


                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}


                    modules={[Autoplay]}

                    className="mySwiper"
                >

                 
                    <SwiperSlide>
                        <div className=' space-y-7 mt-14 px-5 md:px-10 lg:px-20'>
                            <div className=' flex items-center gap-x-2.5 justify-center pt-6'>
                                <span className=' text-yellow-400 text-4xl '><IoStar /></span>
                                <span className=' text-yellow-400 text-4xl '><IoStar /></span>
                                <span className=' text-yellow-400 text-4xl '><IoStar /></span>
                                <span className=' text-yellow-400 text-4xl '><IoStar /></span>
                            </div>
                            <div className=' flex items-center justify-center'>
                                <p className=' text-5xl md:text-7xl text-black '><FaQuoteLeft /></p>
                            </div>

                            <div>
                                <p className='text-center text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto dolorum neque commodi eos facilis id modi, cupiditate quidem a debitis vel alias doloribus ut iure praesentium perferendis. Officiis, consequatur quia?</p>
                            </div>
                            <div>
                                <h3 className=' text-2xl text-center text-black'>Robart Karlson</h3>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' space-y-7 mt-14 px-5 md:px-10 lg:px-20'>
                            <div className=' flex items-center gap-x-2.5 justify-center pt-6'>
                                <span className=' text-yellow-400 text-4xl '><IoStar /></span>
                                <span className=' text-yellow-400 text-4xl '><IoStar /></span>
                                <span className=' text-yellow-400 text-4xl '><IoStar /></span>
                                <span className=' text-yellow-400 text-4xl '><IoStar /></span>
                            </div>
                            <div className=' flex items-center justify-center'>
                                <p className=' text-5xl md:text-7xl text-black '><FaQuoteLeft /></p>
                            </div>

                            <div>
                                <p className='text-center text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto dolorum neque commodi eos facilis id modi, cupiditate quidem a debitis vel alias doloribus ut iure praesentium perferendis. Officiis, consequatur quia?</p>
                            </div>
                            <div>
                                <h3 className=' text-2xl text-center text-black'>Robart Karlson</h3>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' space-y-7 mt-14 px-5 md:px-10 lg:px-20'>
                            <div className=' flex items-center gap-x-2.5 justify-center pt-6'>
                                <span className=' text-yellow-400 text-4xl '><IoStar /></span>
                                <span className=' text-yellow-400 text-4xl '><IoStar /></span>
                                <span className=' text-yellow-400 text-4xl '><IoStar /></span>
                                <span className=' text-yellow-400 text-4xl '><IoStar /></span>
                            </div>
                            <div className=' flex items-center justify-center'>
                                <p className=' text-5xl md:text-7xl text-black '><FaQuoteLeft /></p>
                            </div>

                            <div>
                                <p className='text-center text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto dolorum neque commodi eos facilis id modi, cupiditate quidem a debitis vel alias doloribus ut iure praesentium perferendis. Officiis, consequatur quia?</p>
                            </div>
                            <div>
                                <h3 className=' text-2xl text-center text-black'>Robart Karlson</h3>
                            </div>

                        </div>
                    </SwiperSlide>
                   


                </Swiper>






            </div>
        </div>
    )
}
