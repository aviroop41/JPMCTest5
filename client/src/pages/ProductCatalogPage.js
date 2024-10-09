import React, { useState, useEffect } from 'react';
import SearchAndFilterSection from '../components/SearchAndFilterSection';
import ProductGridView from '../components/ProductGridView';
import ProductDetailsModal from '../components/ProductDetailsModal';
import DynamicPricingIndicator from '../components/DynamicPricingIndicator';

const ProductCatalogPage = () => {
    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);

    useEffect(() => {
        // Mock fetch call for product data
        const fetchProducts = async () => {
            const mockData = [
                { id: 1, name: 'Treasury Management Account', shortDescription: 'Efficient money management', price: '$200', successRate: '85%' },
                { id: 2, name: 'Cash Flow Solutions', shortDescription: 'Solutions for better cash flow', price: '$300', successRate: '90%' },
                { id: 3, name: 'Investment Management Tools', shortDescription: 'Tools to manage your investments efficiently', price: '$400', successRate: '88%' }
            ];
            setProducts(mockData);
        };
        fetchProducts();
    }, []);

    const handleProductClick = (id) => {
        setSelectedProductId(id);
    };

    return (
        <div className="flex flex-col items-center justify-center mx-auto w-full h-full p-4">
            <SearchAndFilterSection />
            <DynamicPricingIndicator />
            <ProductGridView products={products} onProductClick={handleProductClick} />
            {selectedProductId && <ProductDetailsModal productId={selectedProductId} onClose={() => setSelectedProductId(null)} />}
        </div>
    );
};

export default ProductCatalogPage;