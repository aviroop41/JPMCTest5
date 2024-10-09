import React, { useEffect, useState } from 'react';

const UserAccessManagement = () => {
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/roles');
                const data = await response.json();
                setRoles(data);
            } catch (error) {
                // Mock data if fetch fails
                setRoles([
                    { id: 1, name: 'Admin', permissions: ['all'] },
                    { id: 2, name: 'Editor', permissions: ['edit', 'view'] },
                    { id: 3, name: 'Viewer', permissions: ['view'] }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchRoles();
    }, []);

    const handleRoleChange = (id) => {
        // Logic for role change
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">User Access Management</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="border-b-2 border-gray-300 px-4 py-2 text-left">Role</th>
                            <th className="border-b-2 border-gray-300 px-4 py-2 text-left">Permissions</th>
                            <th className="border-b-2 border-gray-300 px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.map((role) => (
                            <tr key={role.id}>
                                <td className="border-b border-gray-200 px-4 py-2">{role.name}</td>
                                <td className="border-b border-gray-200 px-4 py-2">{role.permissions.join(', ')}</td>
                                <td className="border-b border-gray-200 px-4 py-2">
                                    <button className="btn btn-primary" onClick={() => handleRoleChange(role.id)}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UserAccessManagement;