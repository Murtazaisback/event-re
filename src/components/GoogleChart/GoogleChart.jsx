import React from 'react';
import Chart from 'react-google-charts';

const SimpleColumnChart = () => {
  const data = [
    ['', ''],
    ['Work', 11],
    ['Eat', 2],
    ['Sleep', 7],
  ];

  return (
    <div>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          title: '',
          legend: 'none',
          backgroundColor: 'transparent',
          chartArea: { width: '95%', height: '100%' },
          hAxis: {
            title: '',
            minValue: 0,
            gridlines: { color: 'transparent' },
            textPosition: 'none', // Remove x-axis labels
          },
          vAxis: {
            title: '',
            gridlines: { color: 'transparent' },
          },
          colors: ['#00ff00'],
        }}
        legendToggle
      />
    </div>
  );
};

export default SimpleColumnChart;
