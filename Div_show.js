import React, { Component } from 'react'


import { Row, Col } from 'reactstrap'
// import {nameContext} from './Context_1';


import 'bootstrap/dist/css/bootstrap.min.css'

function Div_show()  {

  // const nameValue = useContext (nameContext);
  
    return (
      <div>
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
          <div>
          {/* {nameValue} */}
          </div>
          
        </Col>
      </Row>
      </div>
    )
  }

  export default  Div_show() 
