import React from 'react'
import { Line } from 'react-chartjs-2'

const state = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

const options = {
  title: {
    display: false,
    text: 'Average Rainfall per month',
    fontSize: 10
  },
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

export default class Line_chart_without_axis extends React.Component {
  render () {
    return ( 
      <div className='App'>
        <Line data={state} options={options} />
      </div>
    )
  }
}
