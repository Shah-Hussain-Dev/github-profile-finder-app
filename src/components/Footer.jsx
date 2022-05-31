import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="">
      <Row>
        <Col md={12} sm={11} lg={12}  className="d-flex flex-column justify-content-center">
          
        <div >
          <p className="text-center mt-3">Design and developed by Shah Hussain 💙</p>
          
        </div>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer