'use client';
import EmiCalculator from "../components/Calculator";
import CarAffordability from "../components/CarAffordability";
import Navbar from "../components/Navbar";

export default function EmiCalculatorPage() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-16">
                <div className="w-full lg:w-1/2">
                    <EmiCalculator />
                    <div className="text-black font-bold text-center mt-6 px-4 py-3 rounded-xl bg-white/50">
                        <p>
                            If you&rsquo;re getting confused, consider checking what amount of car will be good for you according to your income.
                        </p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <CarAffordability />
                </div>
            </div>
        </div>
    );
}
