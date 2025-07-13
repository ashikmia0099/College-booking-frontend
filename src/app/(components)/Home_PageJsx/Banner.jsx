'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import image1 from '../../../../public/banner/college1.jpg';
import image2 from '../../../../public/banner/college2.jpg';
import image3 from '../../../../public/banner/college3.jpg';
import image4 from '../../../../public/banner/college4.jpg';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <div className='bg-white'>
            <div className="max-w-7xl mx-auto bg-[#ffffff] lg:px-[88px]">
                <div>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                       
                     
                        modules={[Autoplay]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Image src={image1} alt="Banner 1" className='w-full h-[80vh] object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={image2} alt="Banner 2" className='w-full h-[80vh] object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={image3} alt="Banner 3" className='w-full h-[80vh] object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={image4} alt="Banner 4" className='w-full h-[80vh] object-cover' />
                        </SwiperSlide>

                        {/* Optional Progress Indicator */}
                        <div
                            className="autoplay-progress"
                            slot="container-end"
                            style={{
                                position: 'absolute',
                                right: '10px',
                                bottom: '10px',
                                width: '40px',
                                height: '40px',
                                zIndex: 10
                            }}
                        >
                            <svg viewBox="0 0 48 48" ref={progressCircle} style={{ transform: 'rotate(-90deg)' }}>
                                <circle
                                    cx="24"
                                    cy="24"
                                    r="20"
                                    stroke="gray"
                                    strokeWidth="4"
                                    fill="none"
                                    strokeDasharray="125.6"
                                    strokeDashoffset="calc(125.6 * var(--progress))"
                                />
                            </svg>
                            <span
                                ref={progressContent}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    fontSize: '12px',
                                    color: 'black',
                                }}
                            ></span>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
