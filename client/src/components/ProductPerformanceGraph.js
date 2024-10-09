import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const ProductPerformanceGraph = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        // Mock fetch call
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { month: 'January', salesVolume: 150, satisfactionScore: 85, churnRate: 5 },
                    { month: 'February', salesVolume: 200, satisfactionScore: 90, churnRate: 6 },
                    { month: 'March', salesVolume: 180, satisfactionScore: 88, churnRate: 4 },
                ]);
            }, 1000);
        });
        setData(response);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const chartData = {
        labels: data.map(item => item.month),
        datasets: [
            {
                label: 'Sales Volume',
                data: data.map(item => item.salesVolume),
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
            },
            {
                label: 'Customer Satisfaction Score',
                data: data.map(item => item.satisfactionScore),
                fill: false,
                backgroundColor: 'rgba(255,99,132,1)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 2,
            },
            {
                label: 'Churn Rate',
                data: data.map(item => item.churnRate),
                fill: false,
                backgroundColor: 'rgba(54,162,235,1)',
                borderColor: 'rgba(54,162,235,1)',
                borderWidth: 2,
            },
        ],
    };

    return (
        <div className="p-4">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
            )}
        </div>
    );
};

export default ProductPerformanceGraph;