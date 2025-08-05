'use client'
import React, { useState } from 'react';
import Carousel from './components/Carousel';
import Car360Viewer from './components/Car360viewer';
import CarDetails from './components/Cardetails';
import Link from 'next/link';
import Navbar from './components/Navbar';

const carouselImages = [
  '/images/car360/car1.jpg',
  '/images/car360/car2.jpg',
  '/images/car360/car3.jpg',
  '/images/car360/car4.jpg',
  '/images/car360/car5.jpg',
  '/images/car360/car6.jpg',
  '/images/car360/car7.jpg',
  '/images/car360/car8.jpg',
];

export default function Home() {
  const [show360View, setShow360View] = useState(false);
  return (
    <div className="">
      <Navbar />
      {show360View && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-black/70 bg-opacity-80 flex items-center justify-center">
          <div className="relative w-full max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-4">
            <h1 className='text-center text-xl font-bold'>360° View</h1>
            <button
              onClick={() => setShow360View(false)}
              className="absolute top-2 right-4 flex text-white px-3 py-1"
            >
              <div className='relative w-6 h-6 cursor-pointer'>
                <span className='bg-black absolute left-0 top-1/2 px-[1.5px] py-[14px] transform rotate-45'></span>
                <span className='bg-black absolute left-0 top-1/2 px-[1.5px] py-[14px] transform -rotate-45'></span>
              </div>
            </button>

            <Car360Viewer />
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-[65%]">
          <Carousel images={carouselImages} />
        </div>

        <div className="lg:w-[35%] px-3">
          <CarDetails
            carName="2021 Mahindra Thar LX 4 STR Hard Top Diesel MT 4WD"
            variant="4 X 4 Petrol"
            year={2021}
            kmDriven={23456}
            fuelType="Diesel"
            transmission="Manual"
            location="Bengaluru"
            price="12,75,000"
          />
          <div className=" my-3">
            <button onClick={() => { setShow360View(true) }} className='cursor-pointer bg-white/60 py-3 max-w-2xl w-full font-bold rounded-xl'>Take a look with 360° View</button>
          </div>
        </div>
      </div>


    </div>
  );
}
