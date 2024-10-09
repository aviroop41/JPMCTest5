import React, { useEffect, useState } from 'react';

const CurrentProductsGrid = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        // Mock fetch call to simulate API data retrieval for current products
        const fetchCurrentProducts = async () => {
            // Simulating a successful fetch with mock data
            const mockData = [
                { id: 1, name: 'Treasury Management Service', usage: '75%', performance: 'Excellent' },
                { id: 2, name: 'High-Interest Business Account', usage: '50%', performance: 'Good' },
                { id: 3, name: 'Cash Flow Forecasting Tool', usage: '90%', performance: 'Outstanding' }
            ];
            setProducts(mockData);
        };

        fetchCurrentProducts();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {products.map(product => (
                <div key={product.id} className="border rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-sm mb-1">Usage: <strong>{product.usage}</strong></p>
                    <p className="text-sm mb-2">Performance: <strong>{product.performance}</strong></p>
                    <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Manage</button>
                </div>
            ))}
        </div>
    );
};

export default CurrentProductsGrid;