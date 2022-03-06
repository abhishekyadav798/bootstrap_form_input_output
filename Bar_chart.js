import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const Bar_Chart = () => {
  const data = {
    labels: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    datasets: [
      {
        label: 'Hours Studied in Geeksforgeeks',
        data: [2, 5, 7, 9, 7, 6, 4],
        fill: true,
        backgroundColor: 'rgba(6, 156,51, .3)',
        borderColor: '#02b844'
      }
    ]
  }

  return (
    <div >
      <Bar data={data} />
    </div>
  )
}

export default Bar_Chart
