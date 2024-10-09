import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const SegmentationChart = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        // Mock fetch call
        const mockData = [
            { name: 'Industry A', value: 400 },
            { name: 'Industry B', value: 300 },
            { name: 'Industry C', value: 300 },
            { name: 'Industry D', value: 200 },
        ];
        setData(mockData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Customer Segmentation</h2>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default SegmentationChart;