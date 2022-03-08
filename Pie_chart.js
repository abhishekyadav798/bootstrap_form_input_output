import React from 'react'
import {  Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import 'bootstrap/dist/css/bootstrap.min.css'

const Chart4 = () => {
  const pieChartData = {
    labels: ['October', 'November', 'December'],
    datasets: [
      {
        data: [8137119, 9431691, 10266674],
        label: 'Infected People',
        backgroundColor: ['#2FDE00', '#00A6B4', '#ff6600'],
        hoverBackgroundColor: ['#175000', '#003350', '#993d00']
      }
    ]
  }
  const options = {
    title: {
      display: true,
      text: 'COVID-19 Cases of Last 3 Months',
      fontSize: 15
    },
    plugins: {
      legend: {
        display: true, //Is the legend shown?
        position: 'top' //Position of the legend.
      }
    }
  }
  return (
    <div className='Chart4'>
      <Pie data={pieChartData} options={options} />
    </div>
  )
}

export default Chart4
