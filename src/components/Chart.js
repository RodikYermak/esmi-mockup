import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
//   import faker from 'faker'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        position: 'left',
        text: 'Percent Change',
      },
    },
  };
  
  const labels = [2013, 2014, 2015, 2016, 2017, 2018];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Region',
        // data: labels.map(() => faker.datatype.number({ min: -20, max: 70 })),
        data: [0, 4.03, -0.25, 2.66, 1.89, 1.50],
        borderColor: '#204354',
        backgroundColor: '#204354',
      },
      {
        label: 'State',
        // data: labels.map(() => faker.datatype.number({ min: -20, max: 70 })),
        data: [0, 3.77, 0, 2.72, 1.98, 1.57],
        borderColor: '#3C84BF',
        backgroundColor: '#3C84BF',
      },
      {
        label: 'Nation',
        // data: labels.map(() => faker.datatype.number({ min: -20, max: 70 })),
        data: [0, 2.12, 2.32, 1.54, 2.26, 0.31],
        borderColor: '#C9EBFA',
        backgroundColor: '#C9EBFA',
      }
    ],
  };


function Chart() {
    return (
        <div>
            <Line options={options} data={data} />
        </div>
    )
}

export default Chart
