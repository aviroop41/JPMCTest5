import React, { useEffect, useState } from 'react';

const DynamicPricingIndicator = () => {
    const [pricingData, setPricingData] = useState(null);

    useEffect(() => {
        const fetchPricingData = async () => {
            // Mock fetch call for pricing data
            const mockData = [
                { id: 1, price: "$100", tooltip: "Standard pricing for all customers." },
                { id: 2, price: "$120", tooltip: "Premium pricing for loyal customers." },
                { id: 3, price: "$80", tooltip: "Discount pricing for new customers." },
            ];
            // Simulate API call delay
            setTimeout(() => {
                setPricingData(mockData);
            }, 1000);
        };

        fetchPricingData();
    }, []);

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Dynamic Pricing</h2>
            <div className="grid grid-cols-3 gap-4">
                {pricingData ? pricingData.map(item => (
                    <div key={item.id} className="relative border rounded-lg p-4 hover:bg-gray-100 transition">
                        <span className="text-xl font-bold">{item.price}</span>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                            <span className="tooltip tooltip-bottom" data-tip={item.tooltip}>
                                <i className="fas fa-info-circle"></i>
                            </span>
                        </div>
                    </div>
                )) : (
                    <p>Loading pricing information...</p>
                )}
            </div>
        </div>
    );
};

export default DynamicPricingIndicator;