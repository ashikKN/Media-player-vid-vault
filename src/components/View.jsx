import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from '../components/VideoCard'
import { getAllVideos } from '../services/allAPI'
import { useState } from 'react'


function View({uploadVideoServerResponse}) {

//  state lifting
 const [deleteVideoStatus,setDeleteVideoStatus] = useState(false)

 const [allVideos,setAllVideos] = useState([])

 const getAllUploadedVideos = async ()=>{
    // make api call to get all videos
    const {data} = await getAllVideos()
    setAllVideos(data)
 }

 useEffect(()=>{
  setDeleteVideoStatus(false)
  getAllUploadedVideos()
 } , [uploadVideoServerResponse,deleteVideoStatus])

// console.log(allVideos);

  return (
      <Row>
        {
        allVideos?.length>0?
        allVideos?.map(video=>(
          <Col sm={12} md={6} lg={4} xl={3}>
            {/* video card is the child of view so i use props to share details of video */}
          <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
         </Col>
        ))
        :<p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to Display</p>
        }
      </Row>
  )
}

export default View
