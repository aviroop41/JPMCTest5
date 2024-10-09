import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const AIRecommendationsPanel = () => {
    const [recommendations, setRecommendations] = useState([]);

    // Mock function to simulate fetching data
    const fetchRecommendations = async () => {
        // Simulated API call
        const mockData = [
            { id: 1, product: 'Cash Management Solution', score: 90 },
            { id: 2, product: 'Treasury Analytics Tool', score: 85 },
            { id: 3, product: 'Liquidity Management System', score: 80 },
        ];
        setRecommendations(mockData);
    };

    useEffect(() => {
        fetchRecommendations();
    }, []);

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Product Recommendations</h2>
            <div className="space-y-4">
                {recommendations.map(item => (
                    <div key={item.id} className="flex justify-between items-center p-4 border border-gray-200 rounded-md">
                        <div>
                            <h3 className="font-medium">{item.product}</h3>
                            <p className="text-sm text-gray-500">Matching Score: {item.score}</p>
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md flex items-center hover:bg-blue-600">
                            View Details <FaArrowRight className="ml-2" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AIRecommendationsPanel;