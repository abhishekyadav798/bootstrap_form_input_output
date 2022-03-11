import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

export default class Div_show extends React.Component {
  render () {
    return (
      <Row>
        <Col md='3'>
          <div>
            <a style={{ color: 'rgb(129, 142, 146)' }}>Dashboards </a>
          </div>
          <div>
            <a style={{ color: 'rgb(129, 142, 146)' }}>Defaults </a>
          </div>
          <div>
            <a style={{ color: 'rgb(129, 142, 146)' }}>Analytics </a>
          </div>
          <div>
            <a style={{ color: 'rgb(129, 142, 146)' }}>Saas </a>
          </div>
          <div>
            <a style={{ color: 'rgb(129, 142, 146)' }}>Social </a>
          </div>
          <div>
            <a style={{ color: 'rgb(129, 142, 146)' }}>Crypto </a>
          </div>
          <div>
            <a style={{ color: 'rgb(129, 142, 146)' }}>AppStack </a>
          </div>
        </Col>
      </Row>
    )
  }
}
