import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const Widget = ({ id, removeWidget }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null); // Ref to store the chart instance

    // This useEffect hook will run once when the component mounts
    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        // Dummy chart data
        const data = {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: 'Random Data',
                data: generateRandomData(),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        };

        // Chart configuration
        const config = {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        // Create the chart and store its instance in the chartInstance ref
        chartInstance.current = new Chart(ctx, config);

        // Cleanup function to destroy the chart when the component unmounts or updates
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy(); // Destroy the chart instance
            }
        };
    }, []);

    // Function to generate random data for the chart
    const generateRandomData = () => {
        return Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
    };

    return (
        <div className="widget">
            <button className="close-widget" onClick={() => removeWidget(id)}>
                X
            </button>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default Widget;
