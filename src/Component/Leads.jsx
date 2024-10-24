import React, { useState } from 'react';


const Leads = () => {
    const [filter, setFilter] = useState('All');

    // Sample data for leads
    const leadsData = [
        { id: 1, name: 'John Doe', email: 'john@example.com', status: 'New', contactDate: '2024-09-22' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'In Progress', contactDate: '2024-09-19' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Completed', contactDate: '2024-09-15' },
        { id: 4, name: 'Alice Cooper', email: 'alice@example.com', status: 'New', contactDate: '2024-09-12' },
        { id: 5, name: 'John Doe', email: 'john@example.com', status: 'New', contactDate: '2024-09-22' },
        { id: 6, name: 'Jane Smith', email: 'jane@example.com', status: 'In Progress', contactDate: '2024-09-19' },
        { id: 7, name: 'Bob Johnson', email: 'bob@example.com', status: 'Completed', contactDate: '2024-09-15' },
        { id: 8, name: 'Alice Cooper', email: 'alice@example.com', status: 'New', contactDate: '2024-09-12' },
    ];

    // Function to filter leads based on selected filter
    const filteredLeads = leadsData.filter((lead) => {
        if (filter === 'All') return true;
        return lead.status === filter;
    });

    return (
        <div className="leads-container">
            <h1>Leads Section</h1>

            {/* Filter dropdown */}
            <div className="leads-filter">
                <label htmlFor="filter">Filter by Status: </label>
                <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="New">New</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>

            {/* Leads table */}
            <table className="leads-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Contact Date</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredLeads.map((lead) => (
                        <tr key={lead.id}>
                            <td>{lead.id}</td>
                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.status}</td>
                            <td>{lead.contactDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Show a message if no leads match the filter */}
            {filteredLeads.length === 0 && (
                <p className="no-leads">No leads match the selected filter.</p>
            )}
        </div>
    );
};

export default Leads;
