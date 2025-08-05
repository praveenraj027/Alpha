// import Carousel from './components/Carousel'
import Car360Viewer from './components/Car360viewer'
import CarDetails from './components/Cardetails';

const images = [
  "/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg",
]
export default function Home() {
  return (
    <>
      <main>
        <h1 className='text-2xl font-bold text-center mb-4'>Car Details</h1>
        {/* <Car360Viewer /> */}
        <CarDetails
          carName={"Mahindra Thar"}
          variant="Petrol Manual"
          year={2024}
          kmDriven = {10000}
          fuelType='Petrol'
          location='Jabalpur, M.P.'
          price="13,52,000"
          transmission='Manual'
           />
      </main>
    </>
  );
}
