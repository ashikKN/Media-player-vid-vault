import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistory ,deleteHistory } from '../services/allAPI'
import { useAccordionButton } from 'react-bootstrap'

function WatchHistory() {

  // to get data outside function
  const [watchData, setWatchData] = useState([])
  const getAllWatchHistory = async () => {
    // make api call
    const { data } = await getHistory()
    setWatchData(data)
  }

  useEffect(() => {
    getAllWatchHistory()
  }, [])

  // console.log(watchData);

  const handleDeleteHistory = async(id)=>{
    // make api call
    await deleteHistory(id)
    // get all history
    getAllWatchHistory()
  }

  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
        <h3>Watch History</h3>
        <Link className='d-flex align-items-center' style={{ textDecoration: 'none', fontSize: '20px' }} to={'/home'}>
          <i class="fa-solid fa-arrow-left fs-5 me-2"></i>Back to Home</Link>
      </div>

      <table className="container table mt-5 mb-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
          </tr>
        </thead>

        <tbody>

          {
            watchData?.length > 0 ?
              watchData.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item?.caption}</td>
                  <td><a href={item?.embedlink} target='_blank'>{item?.embedlink}</a></td>
                  <td>{item?.timeStamp}</td>
                  <td><button onClick={()=>handleDeleteHistory(item?.id)} className='btn'><i className="fa-solid fa-trash" style={{color: '#93010f'}}></i></button></td>
                </tr>
              ))

              : <p>Nothing to display</p>

          }
        </tbody>

      </table>

    </>
  )
}

export default WatchHistory
