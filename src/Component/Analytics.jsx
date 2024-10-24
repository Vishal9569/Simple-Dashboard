import React, { useState } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

const Analytics = () => {

    const userEngagementData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Active Users',
                data: [30, 50, 40, 60, 80, 90, 100],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: true,
            },
        ],
    };

    const sessionLengthData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Average Session Length (minutes)',
                data: [2.5, 3.0, 2.8, 3.2, 3.5, 3.6, 4.0],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                fill: true,
            },
        ],
    };

    const knowledgeGainData = {
        labels: ['Module 1', 'Module 2', 'Module 3', 'Module 4'],
        datasets: [
            {
                label: 'Knowledge Gain (%)',
                data: [20, 45, 35, 50],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            },
        ],
    };

    const [timeFrame, setTimeFrame] = useState('All-time');

    return (
        <div className="analytics-container">
            <h1>Analytics</h1>


            <div className="analytics-filter">
                <label htmlFor="timeFrame">Timeframe: </label>
                <select id="timeFrame" value={timeFrame} onChange={(e) => setTimeFrame(e.target.value)}>
                    <option value="All-time">All-time</option>
                    <option value="Last Month">Last Month</option>
                    <option value="Last Week">Last Week</option>
                </select>
            </div>

            <div className="charts">

                <div className="chart">
                    <h3>Active Users Over Time</h3>
                    <Line data={userEngagementData} options={{ maintainAspectRatio: false }} />
                </div>


                <div className="chart">
                    <h3>Average Session Length</h3>
                    <Bar data={sessionLengthData} options={{ maintainAspectRatio: false }} />
                </div>


                <div className="chart">
                    <h3>Knowledge Gain by Module</h3>
                    <Doughnut data={knowledgeGainData} options={{ maintainAspectRatio: false }} />
                </div>
            </div>
        </div>
    );
};

export default Analytics;
