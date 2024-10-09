import React, { useState, useEffect } from 'react';

const NotificationCenter = () => {
    const [notifications, setNotifications] = useState([]);
    
    // Mock data for notifications
    const mockData = [
        { id: 1, type: 'Email', method: 'Send as Email', rules: 'Daily Summary', template: 'Default Template' },
        { id: 2, type: 'SMS', method: 'Send as SMS', rules: 'Immediately', template: 'Urgent Template' },
        { id: 3, type: 'Push', method: 'Send as Push Notification', rules: 'Weekly Digest', template: 'Digest Template' },
    ];

    useEffect(() => {
        // Simulating fetch call
        setNotifications(mockData);
    }, []);

    return (
        <div className="p-5 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Notification Center</h2>
            <table className="w-full table-auto">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2">Type</th>
                        <th className="px-4 py-2">Delivery Method</th>
                        <th className="px-4 py-2">Custom Rules</th>
                        <th className="px-4 py-2">Template</th>
                    </tr>
                </thead>
                <tbody>
                    {notifications.map(notification => (
                        <tr key={notification.id} className="border-b">
                            <td className="px-4 py-2">{notification.type}</td>
                            <td className="px-4 py-2">{notification.method}</td>
                            <td className="px-4 py-2">{notification.rules}</td>
                            <td className="px-4 py-2">{notification.template}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NotificationCenter;