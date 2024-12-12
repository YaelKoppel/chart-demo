import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

// Register all necessary components
Chart.register(...registerables);

const PieChart = () => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        // Destroy existing chart instance if it exists
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        // Create new chart
        chartInstanceRef.current = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['הוצאות', 'הכנסות', 'חסכונות'],
                datasets: [
                    {
                        label: 'מצב כלכלי',
                        data: [3000, 5000, 2000],
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    },
                ],
            },
        });

        // Cleanup: Destroy chart on component unmount
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, []);

    return (
        <div>
            <h2>תרשים עוגה</h2>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default PieChart;
