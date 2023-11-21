import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
      <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="/">
        <Link to={'/'} className='fs-4' style={{textDecoration:'none',color:'white'}}>
              <i className="fa-solid fa-cloud-arrow-up fa-bounce"></i>{' '}
              VID VAULT
        </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header