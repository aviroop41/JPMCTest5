import React, { useState, useEffect } from 'react';

// SearchAndFilterSection component for searching and filtering products
const SearchAndFilterSection = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [recentSearches, setRecentSearches] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('');
    const [priceRange, setPriceRange] = useState([0, 1000]); // Default price range

    // Mock data for popular products
    const mockPopularProducts = [
        { id: 1, name: 'Product 1', description: 'Treasury Management Product 1', category: 'Liquidity' },
        { id: 2, name: 'Product 2', description: 'Treasury Management Product 2', category: 'Cash Flow' },
        { id: 3, name: 'Product 3', description: 'Treasury Management Product 3', category: 'Investments' },
    ];

    useEffect(() => {
        // Simulating an API call
        setPopularProducts(mockPopularProducts);
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategoryFilter(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPriceRange(event.target.value.split(',').map(Number));
    };

    const filteredProducts = popularProducts.filter(product => {
        const withinPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
        const matchesCategory = categoryFilter ? product.category === categoryFilter : true;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return withinPriceRange && matchesCategory && matchesSearch;
    });

    return (
        <div className="p-4 bg-gray-100">
            <h2 className="text-lg font-bold">Search and Filter</h2>
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search for products..."
                className="border rounded p-2 mb-4 w-full"
                aria-label="Search Products"
            />

            <div className="flex space-x-4 mb-4">
                <select onChange={handleCategoryChange} className="border rounded p-2">
                    <option value="">All Categories</option>
                    <option value="Liquidity">Liquidity</option>
                    <option value="Cash Flow">Cash Flow</option>
                    <option value="Investments">Investments</option>
                </select>

                <input
                    type="text"
                    value={priceRange.join(',')}
                    onChange={handlePriceChange}
                    placeholder="Enter price range (min,max)"
                    className="border rounded p-2"
                    aria-label="Price Range"
                />
            </div>

            <div>
                <h3 className="font-semibold">Popular Products</h3>
                <ul className="list-disc pl-5">
                    {filteredProducts.map(product => (
                        <li key={product.id}>{product.name}: {product.description}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchAndFilterSection;