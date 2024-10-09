import React, { useEffect, useState } from 'react'; // Import React and hooks
import PerformanceDashboard from '../components/PerformanceDashboard'; // Import components
import SegmentationChart from '../components/SegmentationChart';
import ProductPerformanceGraph from '../components/ProductPerformanceGraph';
import TrendAnalysisChart from '../components/TrendAnalysisChart';
import DownloadableReportButton from '../components/DownloadableReportButton';

const mockPerformanceData = { /* Mock data for PerformanceDashboard */ };
const mockSegmentationData = [ /* Mock data for SegmentationChart */ ];
const mockProductPerformanceData = [ /* Mock data for ProductPerformanceGraph */ ];
const mockTrendData = [ /* Mock data for TrendAnalysisChart */ ];

const AnalyticsReportingPage = () => {
    const [performanceData, setPerformanceData] = useState(mockPerformanceData); // State for performance data
    const [segmentationData, setSegmentationData] = useState(mockSegmentationData); // State for segmentation data
    const [productPerformanceData, setProductPerformanceData] = useState(mockProductPerformanceData); // State for product performance data
    const [trendData, setTrendData] = useState(mockTrendData); // State for trend data

    useEffect(() => {
        // Mock fetch calls
        fetch('http://localhost:8080/performance') // Fetch performance data
            .then(response => response.json())
            .then(data => setPerformanceData(data))
            .catch(() => setPerformanceData(mockPerformanceData)); // Fallback to mock data

        fetch('http://localhost:8080/segmentation') // Fetch segmentation data
            .then(response => response.json())
            .then(data => setSegmentationData(data))
            .catch(() => setSegmentationData(mockSegmentationData)); // Fallback to mock data

        fetch('http://localhost:8080/product-performance') // Fetch product performance data
            .then(response => response.json())
            .then(data => setProductPerformanceData(data))
            .catch(() => setProductPerformanceData(mockProductPerformanceData)); // Fallback to mock data
        
        fetch('http://localhost:8080/trends') // Fetch trend data
            .then(response => response.json())
            .then(data => setTrendData(data))
            .catch(() => setTrendData(mockTrendData)); // Fallback to mock data
    }, []);

    return (
        <div className="flex flex-col items-center justify-center space-y-4 p-4"> {/* Main container */}
            <PerformanceDashboard data={performanceData} /> {/* Performance dashboard component */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full"> {/* Responsive grid for charts */}
                <SegmentationChart data={segmentationData} /> {/* Segmentation chart component */}
                <ProductPerformanceGraph data={productPerformanceData} /> {/* Product performance graph */}
                <TrendAnalysisChart data={trendData} /> {/* Trend analysis chart */}
            </div>
            <DownloadableReportButton /> {/* Downloadable report button component */}
        </div>
    );
};

export default AnalyticsReportingPage;  // Export the module for use in other components