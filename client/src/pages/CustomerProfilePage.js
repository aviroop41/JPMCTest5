import React, { useEffect, useState } from 'react';
import CustomerProfileCard from '../components/CustomerProfileCard';
import FinancialMetricsPanel from '../components/FinancialMetricsPanel';
import CurrentProductsGrid from '../components/CurrentProductsGrid';
import PurchaseHistoryTimeline from '../components/PurchaseHistoryTimeline';
import AIRecommendationsPanel from '../components/AIRecommendationsPanel';

const CustomerProfilePage = () => {
    const [customerData, setCustomerData] = useState({});
    const [financialMetrics, setFinancialMetrics] = useState({});
    const [currentProducts, setCurrentProducts] = useState([]);
    const [purchaseHistory, setPurchaseHistory] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [error, setError] = useState(null); // Added error state

    useEffect(() => {
        // Mock fetch for customer data
        const fetchCustomerData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/customer-profile');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                const mockData = { companyName: 'Mock Company', industry: 'Finance', revenue: 1000000, lastUpdated: '2023-10-01' };
                setCustomerData(data || mockData);
            } catch (error) {
                setError('Failed to fetch customer data'); // Set error message
            }
        };

        const fetchFinancialMetrics = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/financial-metrics');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                const mockMetrics = { creditScore: 750, riskAppetite: 6, trendHistory: [1, 2, 3, 4, 5] };
                setFinancialMetrics(data || mockMetrics);
            } catch (error) {
                setError('Failed to fetch financial metrics'); // Set error message
            }
        };

        const fetchCurrentProducts = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/current-products');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                const mockProducts = [{ id: 1, name: 'Product A', usageStats: 'High', performanceMetrics: 'Excellent' }];
                setCurrentProducts(data || mockProducts);
            } catch (error) {
                setError('Failed to fetch current products'); // Set error message
            }
        };

        const fetchPurchaseHistory = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/purchase-history');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                const mockHistory = [{ date: '2023-09-01', amount: 500, status: 'Completed' }];
                setPurchaseHistory(data || mockHistory);
            } catch (error) {
                setError('Failed to fetch purchase history'); // Set error message
            }
        };

        const fetchRecommendations = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/recommendations');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                const mockRecommendations = [{ id: 1, productName: 'Recommendation A', matchScore: 85 }];
                setRecommendations(data || mockRecommendations);
            } catch (error) {
                setError('Failed to fetch recommendations'); // Set error message
            }
        };

        fetchCustomerData();
        fetchFinancialMetrics();
        fetchCurrentProducts();
        fetchPurchaseHistory();
        fetchRecommendations();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center py-10">
            <div className="w-full max-w-6xl mx-auto space-y-10">
                <CustomerProfileCard data={customerData} />
                <FinancialMetricsPanel metrics={financialMetrics} />
                <CurrentProductsGrid products={currentProducts} />
                <PurchaseHistoryTimeline history={purchaseHistory} />
                <AIRecommendationsPanel recommendations={recommendations} />
            </div>
        </div>
    );
};

export default CustomerProfilePage;