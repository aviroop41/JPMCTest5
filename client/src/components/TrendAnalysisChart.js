import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const TrendAnalysisChart = () => {
    const [data, setData] = useState({ labels: [], datasets: [] });
    
    useEffect(() => {
        // Mock fetch call
        const fetchTrendData = async () => {
            const mockData = {
                labels: ['January', 'February', 'March', 'April'],
                datasets: [
                    {
                        label: 'Customer Needs',
                        data: [10, 20, 15, 25],
                        fill: false,
                        backgroundColor: 'rgba(75, 192, 192, 1)',
                        borderColor: 'rgba(75, 192, 192, 0.2)',
                    },
                ],
            };
            setData(mockData);
        };

        fetchTrendData();
    }, []);
    
    return (
        <div className="p-5 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Trend Analysis</h2>
            <Line data={data} />
            <div className="mt-4">
                <span className="text-gray-500 text-sm">
                    This chart facilitates forecasting and strategic planning based on current trends, enhancing analytical capabilities.
                </span>
            </div>
        </div>
    );
};

export default TrendAnalysisChart;