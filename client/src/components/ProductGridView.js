import React, { useEffect, useState } from 'react'; // Import React and hooks to manage component state

const ProductGridView = () => {
    const [products, setProducts] = useState([]); // State to hold product data
    const [loading, setLoading] = useState(true); // State to manage loading status

    useEffect(() => {
        // Mock fetch call to get products
        const fetchProducts = async () => {
            try {
                const response = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            data: [
                                { id: 1, name: 'Treasury Management A', description: 'Comprehensive treasury service', price: '$200', successRate: 'High' },
                                { id: 2, name: 'Treasury Management B', description: 'Advanced liquidity management', price: '$300', successRate: 'Medium' },
                                { id: 3, name: 'Treasury Management C', description: 'Risk management solutions', price: '$250', successRate: 'High' },
                                { id: 4, name: 'Treasury Management D', description: 'Optimized cash flow management', price: '$400', successRate: 'Low' },
                            ],
                        });
                    }, 1000);
                });
                setProducts(response.data); // Set fetched products to state
            } catch {
                // Fallback to mock data if fetch fails
                setProducts([
                    { id: 1, name: 'Mock Product 1', description: 'Description of Mock Product 1', price: '$150', successRate: '75%' },
                    { id: 2, name: 'Mock Product 2', description: 'Description of Mock Product 2', price: '$250', successRate: '85%' },
                    { id: 3, name: 'Mock Product 3', description: 'Description of Mock Product 3', price: '$300', successRate: '90%' },
                ]);
            } finally {
                setLoading(false); // Loading complete
            }
        };
        fetchProducts();
    }, []); // Empty dependency array for componentDidMount behavior

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {loading ? ( // Conditional rendering based on loading state
                <div className="col-span-full text-center">Loading products...</div>
            ) : (
                products.map(product => ( // Map through products to create card elements
                    <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col">
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="mb-2">{product.description}</p>
                        <span className="text-green-500 font-bold">{product.price}</span>
                        <span className="mt-2 inline-block bg-yellow-300 text-black rounded-full px-2 py-1">{product.successRate}</span>
                        <div className="mt-4">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">View Details</button>
                            <button className="mt-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">Purchase</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProductGridView;