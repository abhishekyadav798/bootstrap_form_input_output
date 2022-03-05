import React, { useState, useEffect } from 'react'

import {  Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function Card () {
  var [initial, finalvalue] = useState([
    {
      humidity: 80,
      weather_temperature: 70,
      minimum_temperature: 15,
      maximum_temperature: 25
    }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      button()
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  function button () {
    // finalvalue(Math.floor(Math.random()*(100-50)))

    finalvalue([
      {
        humidity: 90,
        weather_temperature: 70,
        minimum_temperature: 15,
        maximum_temperature: 25
      }
    ])
  }

  return (
    <div id='component_2_weather'>
      <button onClick={() => button()}>click to update</button>
      <Row>
        <Row>
          <Col style={{ marginTop: '20px', marginLeft: '0px' }}>
            <a style={{ fontSize: '13px', color: ' rgb(20, 20, 20)' }}>
              New York City <br />
              <span style={{ color: 'red' }}> Sunny</span> <br />
              <span style={{ color: ' rgb(129, 142, 146)' }}>
                {' '}
                Precipitation:{initial[0].humidity}%
              </span>
            </a>
          </Col>

          <Col>
            <a
              style={{
                color: 'rgb(59, 200, 255)',
                marginTop: '26px',
                fontSize: '42px',
                fontWeight: '400'
              }}
            >
              31<sup>&deg;</sup>
            </a>
            <a>
              <br />
              <span>
                32<sup>&deg;</sup>/25<sup>&deg;</sup>
              </span>
            </a>
          </Col>
        </Row>
      </Row>
    </div>
  )
}

export default function Auto_update () {
  return (
    <div>
      <Card />
    </div>
  )
}
