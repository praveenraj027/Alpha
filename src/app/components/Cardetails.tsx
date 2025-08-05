'use client'
import React from 'react';
interface CarDetailsProps {
    carName: string;
    variant: string;
    year: number;
    kmDriven: number;
    fuelType: string;
    location: string;
    price: string;
    transmission: string;
}

const CarDetails: React.FC<CarDetailsProps> = ({ carName, variant, year, kmDriven, fuelType, location, price, transmission }) => {
    return (
        <>
            <div className='bg-white shadow-md rounded-xl p-6 max-w-xl mx-auto'>
                <h2 className="text-2xl text-black font-bold mb-2">{carName}</h2>
                <p className='text-gray-600 mb-4'>{variant}</p>
                <div className='grid grid-cols-2 gap-4 text-sm'>
                    <p className='text-black font-bold'>Year: {year}</p>
                    <p className='text-black font-bold'>KM Driven: {kmDriven} Km</p>
                    <p className='text-black font-bold'>Fuel Type: {fuelType}</p>
                    <p className='text-black font-bold'>Location: {location}</p>
                    <p className='text-black font-bold'>Transmission: {transmission}</p>
                </div>
                <div className='text-xl font-semibold text-green-600 mt-4'>₹{price}</div>
            </div>
        </>
    )
}
export default CarDetails;