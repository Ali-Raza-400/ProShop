import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <Link to='/login'>
            <p>Sign In</p>
          </Link>
        ) : (
          <p disabled>Sign In</p>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <Link to='/shipping'>
            <p>Shipping</p>
          </Link>
        ) : (
          <p disabled>Shipping</p>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <Link to='/payment'>
            <p>Payment</p>
          </Link>
        ) : (
          <p disabled>Payment</p>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <Link to='/placeorder'>
            <p>Place Order</p>
          </Link>
        ) : (
          <p disabled>Place Order</p>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
