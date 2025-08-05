'use client';
import { useState } from 'react';

export default function EmiCalculator() {
  const [principal, setPrincipal] = useState(500000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [tenure, setTenure] = useState(60);

  const r = interestRate / 12 / 100;
  const emi = (principal * r * Math.pow(1 + r, tenure)) / (Math.pow(1 + r, tenure) - 1);
  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - principal;

  return (
    <div className="max-w-xl mx-auto mt-12 p-8 bg-white/60 rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-center text-blue-600">EMI Calculator</h2>

      <div className="space-y-4">
        <div>
          <label className="block font-semibold">Loan Amount (₹)</label>
          <input
            type="number"
            className="w-full border rounded px-3 py-2"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
          />
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

      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-lg font-medium text-green-700">Monthly EMI: ₹{emi.toFixed(2)}</p>
        <p className="text-sm text-gray-700">Total Interest: ₹{totalInterest.toFixed(2)}</p>
        <p className="text-sm text-gray-700">Total Payment: ₹{totalPayment.toFixed(2)}</p>
      </div>
    </div>
  );
}
