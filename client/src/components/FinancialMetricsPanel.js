import React, { useEffect, useState } from 'react';

const FinancialMetricsPanel = () => {
  const [financialData, setFinancialData] = useState({
    creditScore: 700,
    riskAppetite: 5,
    historicalTrend: [600, 650, 700, 720, 750],
  });

  useEffect(() => {
    // Mock API call to fetch financial metrics
    const fetchData = async () => {
      // Simulating a fetch call with mock data
      const mockApiResponse = {
        creditScore: 720, // Mock credit score
        riskAppetite: 6, // Mock risk appetite
        historicalTrend: [620, 645, 670, 720, 740], // Mock historical trend
      };
      setFinancialData(mockApiResponse);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Financial Metrics</h2>
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <h3 className="text-lg font-medium">Credit Score</h3>
          <div className="w-24 h-24 rounded-full border-4 border-blue-500 flex items-center justify-center text-xl font-bold">
            {financialData.creditScore}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Risk Appetite</h3>
          <input
            type="range"
            min="1"
            max="10"
            value={financialData.riskAppetite}
            className="slider"
            readOnly
          />
        </div>
        <div>
          <h3 className="text-lg font-medium">Historical Trend</h3>
          <div className="flex space-x-2">
            {financialData.historicalTrend.map((value, index) => (
              <div
                key={index}
                className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialMetricsPanel;