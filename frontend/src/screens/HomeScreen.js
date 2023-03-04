import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import { Products } from '../product'

const HomeScreen = () => {
  return (
    <Row>
      {
        Products.map((product,index)=>(
            <Col sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
            </Col>
        ))
      }
    </Row>
  )
}

export default HomeScreen
