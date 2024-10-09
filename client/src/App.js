import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import CustomerProfilePage from './pages/CustomerProfilePage';
import ProductCatalogPage from './pages/ProductCatalogPage';
import AnalyticsReportingPage from './pages/AnalyticsReportingPage';
import SettingsPage from './pages/SettingsPage'; // Importing SettingsPage
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <nav className="w-full bg-light p-4 text-center">
          <ul className="flex justify-center space-x-4">
            <li><Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link></li>
            <li><Link to="/customer-profile" className="text-blue-500 hover:text-blue-700">Customer Profile</Link></li>
            <li><Link to="/product-catalog" className="text-blue-500 hover:text-blue-700">Product Catalog</Link></li>
            <li><Link to="/analytics-reporting" className="text-blue-500 hover:text-blue-700">Analytics Reporting</Link></li>
            <li><Link to="/settings" className="text-blue-500 hover:text-blue-700">Settings</Link></li> {/* Link to SettingsPage */}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<div className="flex items-center justify-center h-screen text-2xl">Welcome to Our App</div>} />
          <Route path="/customer-profile" element={<CustomerProfilePage />} />
          <Route path="/product-catalog" element={<ProductCatalogPage />} />
          <Route path="/analytics-reporting" element={<AnalyticsReportingPage />} />
          <Route path="/settings" element={<SettingsPage />} /> {/* Route for SettingsPage */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;