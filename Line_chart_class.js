import React from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import 'bootstrap/dist/css/bootstrap.min.css'

const data = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ],
  datasets: [
    {
      label: 'Stock B',
      fill: 'true',
      lineTension: 0.1,
      backgroundColor: 'rgb(255, 233, 225)',
      borderColor: 'red', // The main line color
      borderCapStyle: 'butt',
      borderDash: [5], // try [5, 15] for instance
      borderDashOffset: 0.0,
      borderJoinStyle: 'bevel',
      pointBorderColor: 'pink',
      pointBackgroundColor: 'blue',
      pointBorderWidth: 0.4,
      pointHoverRadius: 4,
      pointHoverBackgroundColor: 'yellow',
      pointHoverBorderColor: 'brown',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: true
      data: [65, 59, 80, 81, 56, 55, 40, , 60, 55, 30, 78],
      spanGaps: true
    },
    {
      label: 'Stock B',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgb(214, 235, 255)',
      borderColor: 'rgb(167, 105, 0)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'white',
      pointBackgroundColor: 'black',
      pointBorderWidth: 1,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: 'brown',
      pointHoverBorderColor: 'yellow',
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: false
      data: [10, 20, 60, 95, 64, 78, 90, , 70, 40, 70, 89],
      spanGaps: true
    }
  ]
}

const options = {
  // title:{
  //   display:false,
  //   text:'Average Rainfall per month',
  //   fontSize:10
  // },
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      display: false //this will remove all the x-axis grid lines
    },
    y: {
      display: false
    }
  }
}

export default class Chart3 extends React.Component {
  render () {
    return (
      <div>
        <Line data={data} options={options} />
      </div>
    )
  }
}
