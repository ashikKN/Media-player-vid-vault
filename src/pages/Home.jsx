import React from 'react'
import Add from '../components/Add';
import View from '../components/View';
import Category from '../components/Category';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';



function Home() {
  return (
    <>
      <div className="container title d-flex align-items-center justify-content-between mt-5 mb-5">
        <div className="add"> <Add/> </div>
        <Link to={'/watch-history'} style={{textDecoration:'none',color:'grey'}}>Watch History</Link>
      </div>

      <Row className="container mt-5 mb-5 justify-content-between">
          <Col lg={8} className="all-videos">
            <h3>All Videos</h3>
            <div className="videos">
              <View/>
            </div>
          </Col>
          <Col lg={3} className='category ms-5'>
            <Category/>
          </Col>
      </Row>
    </>
  )
}

export default Home
