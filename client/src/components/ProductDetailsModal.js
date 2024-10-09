import React, { useState, useEffect } from 'react';

// Mock data for product details
const mockProductDetails = {
  id: 1,
  name: "Business Treasury Account",
  description: "A comprehensive treasury management solution for small businesses.",
  benefits: [
    "Easy account management.",
    "Access to various financial tools.",
    "Dedicated customer service."
  ],
  requirements: [
    "Valid business registration.",
    "Minimum balance requirements.",
    "Identification documents."
  ],
  pricing: "Subscription starts at $29.99/month"
};

const ProductDetailsModal = ({ isOpen, onClose }) => {
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    // Mock fetch call to backend API
    const fetchProductDetails = async () => {
      // Simulating a successful fetch with mock data
      setProductDetails(mockProductDetails);
    };

    fetchProductDetails();
  }, []);

  if (!productDetails) return null;

  return (
    <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box">
        <h2 className="text-2xl font-bold">{productDetails.name}</h2>
        <p className="mt-2">{productDetails.description}</p>
        <div className="mt-4">
          <h3 className="font-semibold">Benefits:</h3>
          <ul className="list-disc list-inside">
            {productDetails.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Requirements:</h3>
          <ul className="list-disc list-inside">
            {productDetails.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 font-semibold">Pricing: {productDetails.pricing}</div>
        <div className="modal-action">
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;