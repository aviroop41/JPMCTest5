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
        <nav className="w-full bg-gradient-to-r bg-black p-4 shadow-lg">
          <ul className="flex justify-center space-x-8">
            <li><Link to="/" className="text-white font-semibold hover:text-yellow-300 transition duration-300">Home</Link></li>
            <li><Link to="/customer-profile" className="text-white font-semibold hover:text-yellow-300 transition duration-300">Customer Profile</Link></li>
            <li><Link to="/product-catalog" className="text-white font-semibold hover:text-yellow-300 transition duration-300">Product Catalog</Link></li>
            <li><Link to="/analytics-reporting" className="text-white font-semibold hover:text-yellow-300 transition duration-300">Analytics Reporting</Link></li>
            <li><Link to="/settings" className="text-white font-semibold hover:text-yellow-300 transition duration-300">Settings</Link></li>
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