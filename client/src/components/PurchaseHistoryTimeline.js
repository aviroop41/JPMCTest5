import React, { useEffect, useState } from 'react';

// Mock data for purchase history
const mockData = [
    { date: '2023-01-15', amount: 2500, status: 'Completed' },
    { date: '2023-02-10', amount: 1500, status: 'Pending' },
    { date: '2023-03-05', amount: 3000, status: 'Completed' },
    { date: '2023-04-20', amount: 4500, status: 'Failed' },
];

// PurchaseHistoryTimeline component
const PurchaseHistoryTimeline = () => {
    const [purchaseHistory, setPurchaseHistory] = useState([]);

    useEffect(() => {
        // Mocking fetch call
        const fetchPurchaseHistory = () => {
            // In real scenario, un-comment below line
            // return fetch('http://localhost:8080/api/purchase-history').then(res => res.json());
            setPurchaseHistory(mockData); // Set mock data on fetch
        };
        fetchPurchaseHistory();
    }, []);

    return (
        <div className="flex flex-col space-y-4 p-4">
            <h2 className="text-xl font-semibold">Purchase History</h2>
            <div className="border-l-2 border-gray-300">
                {purchaseHistory.map((item, index) => (
                    <div key={index} className="flex items-start py-4">
                        <div className="relative left-[-10px] w-4 h-4 bg-blue-500 rounded-full"></div>
                        <div className="ml-4">
                            <p className="font-medium">{item.date}</p>
                            <p className="text-gray-600">Amount: ${item.amount}</p>
                            <p className={`text-sm ${item.status === 'Completed' ? 'text-green-500' : item.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}>{item.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PurchaseHistoryTimeline;