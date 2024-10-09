import React, { useEffect, useState } from 'react';

const IntegrationManagement = () => {
  const [integrations, setIntegrations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock API data
  const mockData = [
    { id: 1, name: 'Payment Gateway', status: 'Connected' },
    { id: 2, name: 'CRM System', status: 'Disconnected' },
    { id: 3, name: 'Email Service', status: 'Connected' },
  ];

  useEffect(() => {
    // Mock fetch call
    setTimeout(() => {
      setIntegrations(mockData);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Integration Management</h2>
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="border-b p-2">Integration</th>
              <th className="border-b p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {integrations.map((integration) => (
              <tr key={integration.id} className="hover:bg-gray-100">
                <td className="border-b p-2">{integration.name}</td>
                <td className={`border-b p-2 ${integration.status === 'Connected' ? 'text-green-500' : 'text-red-500'}`}>
                  {integration.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default IntegrationManagement;