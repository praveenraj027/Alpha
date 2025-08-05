'use client';
import React from 'react';
import { MapPin, Fuel, Gauge, Calendar, Settings2 } from 'lucide-react';

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

const CarDetails: React.FC<CarDetailsProps> = ({
  carName,
  variant,
  year,
  kmDriven,
  fuelType,
  location,
  price,
  transmission,
}) => {
  return (
    <div className="bg-white/60 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mx-auto mt-12 min-h-[500px] overflow-y-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">{carName}</h2>
      <p className="text-gray-500 text-sm mb-4">{variant}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-600" />
          <span><strong>Year:</strong> {year}</span>
        </div>

        <div className="flex items-center gap-2">
          <Gauge className="w-5 h-5 text-gray-600" />
          <span><strong>KM Driven:</strong> {kmDriven.toLocaleString()} km</span>
        </div>

        <div className="flex items-center gap-2">
          <Fuel className="w-5 h-5 text-gray-600" />
          <span><strong>Fuel:</strong> {fuelType}</span>
        </div>

        <div className="flex items-center gap-2">
          <Settings2 className="w-5 h-5 text-gray-600" />
          <span><strong>Transmission:</strong> {transmission}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-gray-600" />
          <span><strong>Location:</strong> {location}</span>
        </div>
      </div>

      <div className='mt-6'>
        <p className='font-bold'>Fixed On-road price: </p>
        <div className="flex items-center">
          <p className='text-3xl font-bold text-green-700'>₹{price} </p> <p className='px-2 opacity-70'>+ 1% TCS</p>
        </div>
      </div>
      <p className='py-2'>Or</p>
      <p>start your EMI with ₹25214/month </p>
      <div>
        <a href="/calculator"><button className='bg-purple-950 w-full py-3 text-white text-xl font-bold mt-6 rounded-xl cursor-pointer'>
          Calculate your EMI
        </button>
        </a>
      </div>
    </div>

  );
};

export default CarDetails;
