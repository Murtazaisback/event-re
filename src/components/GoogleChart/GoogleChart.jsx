import React from 'react';
import Chart from 'react-google-charts';

const ColumnChart = () => {
  const data = [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
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
          title: 'My Daily Activities',
          chartArea: { width: '50%' },
          hAxis: {
            title: 'Total Hours',
            minValue: 0,
          },
          vAxis: {
            title: 'Task',
          },
        }}
        legendToggle
      />
    </div>
  );
};

export default ColumnChart;
