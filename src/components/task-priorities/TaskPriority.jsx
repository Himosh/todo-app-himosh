import React, { useContext, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { DataContext } from '../../dataContext';
import './TaskPriority.css'


function TaskPriority() {

  const { data, loading, error } = useContext(DataContext);
  const [series, setSeries] = useState([0, 0, 0]);

  useEffect(() => {
    if (data.length > 0) {
      const priorityCounts = data.reduce((acc, task) => {
        acc[task.priority.toLowerCase()] += 1;
        return acc;
      }, { high: 0, medium: 0, low: 0 });

      setSeries([priorityCounts.high, priorityCounts.medium, priorityCounts.low]);
    }
  }, [data]);

  const options = {
    chart: {
      width: 380,
      type: 'donut',
    },
    labels: ['High', 'Medium', 'Low'],
    colors: ['#EB5757', '#F2C94C', '#2F80ED'],
    dataLabels: {
      enabled: false,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    }],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 230,
    },
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="priority-container">
        <div className="priority-title">
          <h1>Task Priorities</h1>
        </div>
        <div className="chart-wrap">
          <ReactApexChart options={options} series={series} type="donut" width={320} />
        </div>
    </div>
  )
}

export default TaskPriority