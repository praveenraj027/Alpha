'use client';
import { useState } from 'react';

export default function CarAffordabilityCalculator() {
  const [income, setIncome] = useState(50000);
  const [emiPercent, setEmiPercent] = useState(20); // % of income
  const [interestRate, setInterestRate] = useState(9); // annual %
  const [tenure, setTenure] = useState(60); // months

  const maxEmi = (income * emiPercent) / 100;
  const r = interestRate / 12 / 100;

  // Reverse EMI formula to get Loan Amount
  const loanAmount = (maxEmi * (Math.pow(1 + r, tenure) - 1)) / (r * Math.pow(1 + r, tenure));
  const carPrice = loanAmount / 0.85; // assuming 85% financed

  return (
    <div className="max-w-xl mx-auto mt-12 p-8 bg-white/60 rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-center text-blue-600">Car Affordability Calculator</h2>

      <div className="space-y-4">
        <div>
          <label className="block font-semibold">Monthly Income (₹)</label>
          <input
            type="number"
            className="w-full border rounded px-3 py-2"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
          />
        </div>

        <div>
          <label className="block font-semibold">EMI % of Income</label>
          <input
            type="range"
            min={10}
            max={40}
            step={1}
            value={emiPercent}
            onChange={(e) => setEmiPercent(Number(e.target.value))}
            className="w-full cursor-grab"
          />
          <p className="text-sm text-gray-600 mt-1">{emiPercent}% of ₹{income} = ₹{maxEmi.toFixed(0)}</p>
        </div>

        <div>
          <label className="block font-semibold">Interest Rate (% per annum)</label>
          <input
            type="number"
            step="0.1"
            className="w-full border rounded px-3 py-2"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
        </div>

        <div>
          <label className="block font-semibold">Time period of loan (in months)</label>
          <input
            type="number"
            className="w-full border rounded px-3 py-2"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="bg-white/70 p-4 rounded-lg">
        <p className="text-lg font-medium text-green-700">Max EMI: ₹{maxEmi.toFixed(2)}</p>
        <p className="text-sm text-gray-700">Loan Eligibility: ₹{loanAmount.toFixed(0)}</p>
        <p className="text-xl font-bold text-blue-800 mt-2">
          Estimated Car Price You Can Afford: ₹{carPrice.toFixed(0)}
        </p>
      </div>
    </div>
  );
}
