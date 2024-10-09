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

    useEffect(() => {
        // Mock fetch for customer data
        const fetchCustomerData = async () => {
            const response = await fetch('http://localhost:8080/api/customer-profile');
            const data = await response.json();
            // Mock data fallback
            const mockData = { companyName: 'Mock Company', industry: 'Finance', revenue: 1000000, lastUpdated: '2023-10-01' };
            setCustomerData(data || mockData);
        };

        const fetchFinancialMetrics = async () => {
            const response = await fetch('http://localhost:8080/api/financial-metrics');
            const data = await response.json();
            const mockMetrics = { creditScore: 750, riskAppetite: 6, trendHistory: [1, 2, 3, 4, 5] };
            setFinancialMetrics(data || mockMetrics);
        };

        const fetchCurrentProducts = async () => {
            const response = await fetch('http://localhost:8080/api/current-products');
            const data = await response.json();
            const mockProducts = [{ id: 1, name: 'Product A', usageStats: 'High', performanceMetrics: 'Excellent' }];
            setCurrentProducts(data || mockProducts);
        };

        const fetchPurchaseHistory = async () => {
            const response = await fetch('http://localhost:8080/api/purchase-history');
            const data = await response.json();
            const mockHistory = [{ date: '2023-09-01', amount: 500, status: 'Completed' }];
            setPurchaseHistory(data || mockHistory);
        };

        const fetchRecommendations = async () => {
            const response = await fetch('http://localhost:8080/api/recommendations');
            const data = await response.json();
            const mockRecommendations = [{ id: 1, productName: 'Recommendation A', matchScore: 85 }];
            setRecommendations(data || mockRecommendations);
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