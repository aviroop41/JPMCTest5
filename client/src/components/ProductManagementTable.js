import React, { useState, useEffect } from 'react';

const ProductManagementTable = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        // Mock fetch call
        const response = await new Promise((resolve) =>
            setTimeout(() => resolve([
                { id: 1, name: 'Product 1', price: '$20', available: true },
                { id: 2, name: 'Product 2', price: '$30', available: false },
                { id: 3, name: 'Product 3', price: '$40', available: true },
            ]), 1000)
        );
        setProducts(response);
        setLoading(false);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleEdit = (id) => {
        // Mock edit functionality
        console.log(`Editing product with id: ${id}`);
    };

    return (
        <div className="overflow-x-auto">
            <h2 className="text-xl font-bold mb-4">Product Management</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Price</th>
                            <th className="py-2 px-4 border-b">Available</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{product.id}</td>
                                <td className="py-2 px-4 border-b">{product.name}</td>
                                <td className="py-2 px-4 border-b">{product.price}</td>
                                <td className="py-2 px-4 border-b">{product.available ? 'Yes' : 'No'}</td>
                                <td className="py-2 px-4 border-b">
                                    <button 
                                        onClick={() => handleEdit(product.id)}
                                        className="text-blue-600 hover:underline">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ProductManagementTable;