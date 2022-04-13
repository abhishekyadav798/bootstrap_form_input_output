import React, { useState, useEffect } from 'react'
import { Row, Col, Card, CardBody, CardImg, Tooltip } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Suits from './suits.jpeg'
import Pro from './pro.jpeg'

function Expand_div_on_click () {
  const [isShown, setIsShown] = useState(false)

  const [initial, finalimage] = useState(Suits)
  const [initialvalue, finalvalue] = useState(false)

  const handleMouseEnter = e => {
    finalimage(Pro)
  }
  const handleMouseLeave = e => {
    finalimage(Suits)
  }

  return (
    <div>
      <Row>
        <Col>
          <Card
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <CardImg variant='top' src={initial} />
            <CardBody></CardBody>

            {isShown && (
              <div>
                <a
                  onMouseEnter={() => finalvalue(true)}
                  onMouseLeave={() => finalvalue(false)}
                >
                  <img
                    src={Pro}
                    onMouseEnter={handleMouseEnter}
                    style={{ height: '70px', width: '70px' }}
                  />{' '}
                </a>
                <a>
                  <img
                    src={Suits}
                    onMouseEnter={handleMouseLeave}
                    style={{ height: '70px', width: '70px' }}
                  />{' '}
                </a>
              </div>
            )}

            {initialvalue && <div>price 55$</div>}

            <h6>jackets and coats</h6>
            <a>fashonable and luxurious</a>
          </Card>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </div>
  )
}

export default Expand_div_on_click
