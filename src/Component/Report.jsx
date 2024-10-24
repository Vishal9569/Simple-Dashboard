import React from 'react';
import { jsPDF } from 'jspdf';
import { CSVLink } from 'react-csv';


const Report = () => {
    const reportData = [
        { id: 1, name: 'Covid Protocols', score: '95%', status: 'Strong' },
        { id: 2, name: 'Cyber Security Basics', score: '92%', status: 'Strong' },
        { id: 3, name: 'Social Media Policies', score: '89%', status: 'Strong' },
        { id: 4, name: 'Food Safety', score: '74%', status: 'Weak' },
        { id: 5, name: 'Compliance Basics Procedures', score: '52%', status: 'Weak' },
        { id: 6, name: 'Company Networking', score: '36%', status: 'Weak' }
    ];


    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text('Performance Report', 20, 20);


        doc.setFontSize(12);
        doc.text('ID', 20, 40);
        doc.text('Name', 40, 40);
        doc.text('Score', 120, 40);
        doc.text('Status', 160, 40);

        reportData.forEach((row, index) => {
            const yPos = 50 + index * 10;
            doc.text(row.id.toString(), 20, yPos);
            doc.text(row.name, 40, yPos);
            doc.text(row.score, 120, yPos);
            doc.text(row.status, 160, yPos);
        });

        doc.save('report.pdf');
    };


    const csvHeaders = [
        { label: 'ID', key: 'id' },
        { label: 'Name', key: 'name' },
        { label: 'Score', key: 'score' },
        { label: 'Status', key: 'status' }
    ];

    return (
        <div className="report-container">

            <div className="report-table">
                <h1>Report Overview</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reportData.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.score}</td>
                                <td>{row.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h2>Generate Reports</h2>

            <div className="report-buttons">

                <button onClick={generatePDF} className="report-button">
                    Download PDF
                </button>


                <CSVLink
                    data={reportData}
                    headers={csvHeaders}
                    filename={"report.csv"}
                    className="report-button"
                >
                    Download CSV
                </CSVLink>
            </div>


        </div>
    );
};

export default Report;
