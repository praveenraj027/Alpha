'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs'
import Image from 'next/image';

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    return (
        <div className="w-full max-w-8xl mx-auto px-4 bg-transparent rounded-lg">
            <Swiper
                modules={[Navigation, Pagination, Thumbs]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                className=""
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-[300px] md:h-[500px] flex items-center justify-center overflow-hidden rounded-xl shadow-sm bg-transparent">
                            <Image
                                src={src}
                                alt={`Car image ${index + 1}`}
                                width={800}
                                height={200}
                                className="object-contain rounded-xl h-[400px] w-[600px]"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress
                watchOverflow={true}
                grabCursor={true}
                slideToClickedSlide={true}
                className='rounded-xl'
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className='p-1 mx-2 my-3 rounded-md hover:border-black transition-all duration-200 cursor-pointer'>
                            <Image
                                src={src}
                                alt={`Thumbnail ${index + 1}`}
                                width={120}
                                height={50}
                                className='object-contain w-full h-[100px]' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
