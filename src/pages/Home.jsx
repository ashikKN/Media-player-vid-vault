import React, { useState } from 'react'
import Add from '../components/Add';
import View from '../components/View';
import Category from '../components/Category';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';



function Home() {

  // state lifting for add and view sibling
  const [uploadVideoServerResponse,setUploadVideoServerResponse] = useState({})

  return (
    <>
      <div className="container title d-flex align-items-center justify-content-between mt-5 mb-5">
        <div className="add"> <Add setUploadVideoServerResponse={setUploadVideoServerResponse}/> </div>
        <Link to={'/watch-history'} className='fs-5' style={{textDecoration:'none',color:'grey'}}>Watch History</Link>
      </div>

      <Row className="container-fluid w-100">
          <Col lg={8} className="all-videos">
            <h3>All Videos</h3>
            <div className="videos w-100">
              <View uploadVideoServerResponse={uploadVideoServerResponse}/>
            </div>
          </Col>
          <Col></Col>
          <Col lg={3} className='category'>
            <Category/>
          </Col>
      </Row>
    </>
  )
}

export default Home
