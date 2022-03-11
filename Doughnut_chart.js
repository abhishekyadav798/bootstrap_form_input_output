import React from 'react'
import {  Doughnut } from 'react-chartjs-2'

const state = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        'rgb(56, 156, 250)',
        'rgb(56, 221, 250)',
        'rgb(56, 250, 224)',
        'rgb(56, 250, 121)',
        'rgb(176, 250, 56)'
      ],
      hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
      ],
      data: [65, 59, 80, 81, 56],
      radius: 75,
      borderRadius: 1
    }
  ]
}

export default class Chart5 extends React.Component {
  render () {
    return (
      <div className='Chart4'>
        <Doughnut
          data={state}
          options={{
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
          }}
        />
      </div>
    )
  }
}
