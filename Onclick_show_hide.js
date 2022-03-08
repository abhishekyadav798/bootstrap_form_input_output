import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Card () {
  const [initial, finalvalue] = useState('none')

  function this_button_1 () {
    finalvalue('block')
  }

  function this_button_2 () {
    finalvalue('none')
  }

  return (
    <div>
      <Row>this is row 1</Row>
      <Row style={{ display: initial }}>
        <a>this is row 2 </a>
      </Row>
      <Row>this is row 3</Row>
      <button onClick={() => this_button_1()}>click to show</button>
      <button onClick={() => this_button_2()}>click to hide</button>
    </div>
  )
}

export default function OnClick_show_hide () {
  return (
    <div>
      <Card />
    </div>
  )
}
