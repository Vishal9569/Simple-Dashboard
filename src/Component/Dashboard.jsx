import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Link } from 'react-router-dom';
import { RiDashboardFill } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";
import { TbReportSearch } from "react-icons/tb";

const Dashboard = () => {

    const chartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Questions Answered',
                data: [100, 200, 150, 300, 250, 400, 350],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
        ],
    };


    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'User Engagement',
                data: [65, 59, 80, 81, 56, 55],
                fill: true,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };


    const chartOptions = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 100,
                },
                grid: {
                    display: false,
                }
            },
            x: {
                barThickness: 50,
                maxBarThickness: 80,
                grid: {
                    display: false,
                }
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };


    const lineChartOptions = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: true,
            },
        },
    };

    return (
        <div className="dashboard-container">

            <div className="sidebar">
                <h2 className="sidebar-title">EzyMetrics</h2>
                <nav>
                    <ul className="sidebar-menu">
                        <Link to={"/"} ><li><RiDashboardFill className="logo" />Dashboard</li></Link>
                        <Link to={"/Leads"} ><li><FaUserGroup className='logo' />Leads</li></Link>
                        <Link to={"/Analytics"} ><li><SiGoogleanalytics className='logo' />Analytics</li></Link>
                        <Link to={"/Report"} ><li><TbReportSearch className='logo4' />Report</li></Link>
                    </ul>
                </nav>
            </div >


            <div className="main-content">

                <div className="filters">
                    <select>
                        <option>Timeframe: All-time</option>
                    </select>
                    <select>
                        <option>People: All</option>
                    </select>
                    <select>
                        <option>Topic: All</option>
                    </select>
                </div >

                <div className="chart-container"  >

                    <div>
                        <Bar data={chartData} options={chartOptions} />
                    </div>


                    <div  >
                        <Line data={lineChartData} options={lineChartOptions} />
                    </div>
                </div >


                <div className="stats-cards">
                    <div className="card">
                        <h3>Active Users</h3>
                        <p>27/80</p>
                    </div>
                    <div className="card">
                        <h3>Questions Answered</h3>
                        <p>3,298</p>
                    </div>
                    <div className="card">
                        <h3>Av. Session Length</h3>
                        <p>2m 34s</p>
                    </div>
                    <div className="card">
                        <h3>Knowledge Gain</h3>
                        <p>+34%</p>
                    </div>
                </div >

                <div className="topics-cards">

                    <div className="topics-card">
                        <h3>Strongest Topics</h3>
                        <ul>
                            <li>Covid Protocols: 95% Correct</li>
                            <li>Cyber Security Basics: 92% Correct</li>
                            <li>Social Media Policies: 89% Correct</li>
                        </ul>
                    </div >

                    <div className="topics-card">
                        <h3>Weakest Topics</h3>
                        <ul>
                            <li>Food Safety: 74% Correct</li>
                            <li>Compliance Basics: 52% Correct</li>
                            <li>Company Networking: 36% Correct</li>
                        </ul>
                    </div >
                </div >
            </div >
        </div >
    );
};

export default Dashboard;
