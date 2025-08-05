'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

interface CarouselProps {
    images: string[];
}
const Carousel: React.FC<CarouselProps> = ({ images }) => {
    return (
        <>
            <div className='w-full max-w-3xl mx-auto my-6'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}>
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <Image
                            src={src}
                            alt={`Car image ${index + 1}`} 
                            width={800}
                            height={400}
                            className='rounded-xl object-cover w-full h-auto'
                            />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </>
    )
}
export default Carousel;
