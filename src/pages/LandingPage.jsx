import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
  const navigateByUrl = useNavigate()

  const navigate = ()=>{
    navigateByUrl('/home')
  }
  return (
    <>

      <Row className='mt-3 mb-3 align-items-center'>
        <Col></Col>
        <Col lg={4}>
          <h3>Welcome to <span className='text-warning fw-bolder fs-2'>Vid-Vault</span></h3>
          <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sit distinctio eius, debitis ratione nobis dicta beatae atque architecto maxime illum eaque laudantium recusandae iste, quod, non dignissimos ipsam culpa.</p>
          <button onClick={navigate} className="btn btn-info mt-3">Get Started</button>
        </Col>
        <Col></Col>
        <Col lg={6} >
          <img className='img-fluid' src="https://i.pinimg.com/originals/ab/45/bb/ab45bb4451536652faca51ae4f42d5dd.gif" alt="" />
        </Col>
      </Row>
      

      <div className="mt-3 mb-3 d-flex justify-content-center align-items-center flex-column">

        <h3>Features</h3>
        <div className="cards d-flex justify-content-evenly align-items-center w-100 mt-5 mb-5">
          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img height={'300'} width={'300px'} variant="top" src="https://cdn.dribbble.com/users/707433/screenshots/6720160/gears2.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img height={'300'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/0c/cd/96/0ccd96bc52dc46b1f5f3ea89cad58ecb.gif" />
            <Card.Body>
              <Card.Title>Categorize Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img height={'300'} width={'300px'} variant="top" src="https://cdn.dribbble.com/users/943550/screenshots/2373582/video-marketing_2.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

      </div>

      <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center w-100 border rounded p-5">
        <div className="content w-50">
          <h3 className='text-info mb-4' >Simple , Fast and Powerful</h3>
          <h6 style={{ textAlign: 'justify' }}><span className='text-warning fs-3 fw-bolder'>Play Everything :</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus sit quo alias, deserunt voluptatem rerum, quas maxime officiis dolorum iure facere placeat est, veritatis hic velit consequuntur perspiciatis soluta.</h6>

          <h6  style={{ textAlign: 'justify' }}><span className='text-warning fs-3 fw-bolder'>Categorize Videos :</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus sit quo alias, deserunt voluptatem rerum, quas maxime officiis dolorum iure facere placeat est, veritatis hic velit consequuntur perspiciatis soluta.</h6>

          <h6  style={{ textAlign: 'justify' }}><span className='text-warning fs-3 fw-bolder '>Managing History :</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus sit quo alias, deserunt voluptatem rerum, quas maxime officiis dolorum iure facere placeat est, veritatis hic velit consequuntur perspiciatis soluta.</h6>
        </div>

        <div className="video ms-5">
          <iframe width="700" height="400" src="https://www.youtube.com/embed/-BjZmE2gtdo" title="Taylor Swift - Lover (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>

    </>
  )
}

export default LandingPage
