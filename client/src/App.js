import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import CustomerProfilePage from './pages/CustomerProfilePage';
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
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<div className="flex items-center justify-center h-screen text-2xl">Welcome to Our App</div>} />
          <Route path="/customer-profile" element={<CustomerProfilePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;