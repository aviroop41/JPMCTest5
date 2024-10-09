import React, { useEffect, useState } from 'react';
import UserAccessManagement from '../components/UserAccessManagement';
import IntegrationManagement from '../components/IntegrationManagement';
import NotificationCenter from '../components/NotificationCenter';
import ProductManagementTable from '../components/ProductManagementTable';

const mockUserAccessData = [...Array(4).keys()].map(i => ({
  id: i,
  role: `Role ${i + 1}`,
  permissions: ['Read', 'Write', 'Edit']
}));

const mockIntegrationData = [...Array(4).keys()].map(i => ({
  id: i,
  name: `Integration ${i + 1}`,
  status: i % 2 === 0 ? 'Connected' : 'Disconnected'
}));

const mockNotificationData = [...Array(4).keys()].map(i => ({
  id: i,
  type: `Notification Type ${i + 1}`,
  method: 'Email',
  customRules: []
}));

const mockProductData = [...Array(4).keys()].map(i => ({
  id: i,
  name: `Product ${i + 1}`,
  price: (i + 1) * 10,
  availability: true
}));

const SettingsPage = () => {
  const [userAccess, setUserAccess] = useState([]);
  const [integrationData, setIntegrationData] = useState([]);
  const [notificationData, setNotificationData] = useState([]);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Mock fetch calls
    setUserAccess(mockUserAccessData);
    setIntegrationData(mockIntegrationData);
    setNotificationData(mockNotificationData);
    setProductData(mockProductData);
  }, []);

  return (
    <div className="flex flex-col items-center p-4 space-y-8">
      <UserAccessManagement data={userAccess} />
      <IntegrationManagement data={integrationData} />
      <NotificationCenter data={notificationData} />
      <ProductManagementTable data={productData} />
    </div>
  );
};

export default SettingsPage;