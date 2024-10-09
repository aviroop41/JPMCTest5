import React, { useEffect, useState } from 'react';

// Performance Dashboard Component
const PerformanceDashboard = () => {
    const [metrics, setMetrics] = useState({
        successRate: 0,
        totalRecommendations: 0,
        conversionRate: 0,
        averageResponseTime: 0,
    });

    useEffect(() => {
        // Mock API call to fetch performance metrics
        const fetchMetrics = async () => {
            // Simulated API delay
            const simulatedDelay = new Promise(resolve => setTimeout(resolve, 1000));
            await simulatedDelay;

            // Mock data
            const mockData = {
                successRate: 75, // Example: 75%
                totalRecommendations: 150,
                conversionRate: 60, // Example: 60%
                averageResponseTime: 2.5, // Example: in seconds
            };

            setMetrics(mockData);
        };

        fetchMetrics();
    }, []);

    return (
        <div className="bg-white rounded-lg shadow p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg text-center">
                <h3 className="text-lg font-semibold">Success Rate</h3>
                <p className="text-2xl">{metrics.successRate}%</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
                <h3 className="text-lg font-semibold">Total Recommendations</h3>
                <p className="text-2xl">{metrics.totalRecommendations}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
                <h3 className="text-lg font-semibold">Conversion Rate</h3>
                <p className="text-2xl">{metrics.conversionRate}%</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
                <h3 className="text-lg font-semibold">Avg. Response Time</h3>
                <p className="text-2xl">{metrics.averageResponseTime}s</p>
            </div>
        </div>
    );
};

export default PerformanceDashboard;