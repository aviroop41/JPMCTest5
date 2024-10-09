import React, { useState, useEffect } from 'react';

const CustomerProfileCard = () => {
    const [companyInfo, setCompanyInfo] = useState({
        companyName: '',
        industry: '',
        revenue: '',
        lastUpdated: ''
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // Mock data to simulate API call
        const fetchData = async () => {
            const response = await Promise.resolve({
                companyName: 'Acme Corp',
                industry: 'Manufacturing',
                revenue: '$1,000,000',
                lastUpdated: '2023-10-01'
            });
            setCompanyInfo(response);
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompanyInfo({ ...companyInfo, [name]: value });
    };

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        // Here you would typically post the updated data back to the server
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold">Customer Profile</h2>
            <div className="mt-4">
                <label className="block">
                    Company Name:
                    <input
                        type="text"
                        name="companyName"
                        value={companyInfo.companyName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`mt-1 p-2 border ${isEditing ? 'border-blue-400' : 'border-gray-300'} rounded focus:outline-none focus:ring`}
                    />
                </label>
                <label className="block mt-4">
                    Industry:
                    <input
                        type="text"
                        name="industry"
                        value={companyInfo.industry}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`mt-1 p-2 border ${isEditing ? 'border-blue-400' : 'border-gray-300'} rounded focus:outline-none focus:ring`}
                    />
                </label>
                <label className="block mt-4">
                    Revenue:
                    <input
                        type="text"
                        name="revenue"
                        value={companyInfo.revenue}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`mt-1 p-2 border ${isEditing ? 'border-blue-400' : 'border-gray-300'} rounded focus:outline-none focus:ring`}
                    />
                </label>
                <label className="block mt-4">
                    Last Updated:
                    <input
                        type="text"
                        name="lastUpdated"
                        value={companyInfo.lastUpdated}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`mt-1 p-2 border ${isEditing ? 'border-blue-400' : 'border-gray-300'} rounded focus:outline-none focus:ring`}
                    />
                </label>
            </div>
            <div className="mt-6 flex justify-end">
                <button 
                    onClick={handleEditClick}
                    className={`px-4 py-2 text-white rounded ${isEditing ? 'bg-red-500' : 'bg-blue-500'}`}
                >
                    {isEditing ? 'Cancel' : 'Edit'}
                </button>
                {isEditing && (
                    <button 
                        onClick={handleSaveClick}
                        className="ml-2 px-4 py-2 text-white bg-green-500 rounded"
                    >
                        Save
                    </button>
                )}
            </div>
        </div>
    );
};

export default CustomerProfileCard;