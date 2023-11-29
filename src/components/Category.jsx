import React, { useEffect, useState } from 'react'
import { Button, Form, Modal, Row ,Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteCategory, getAVideo, getAllCategory, saveCategory, updateCategory } from '../services/allAPI';
import VideoCard from './VideoCard';


function Category() {
  // to access output of api call {data} outside function 
  // create state for category
  const [allCategory, setAllCategory] = useState([])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // create state for getting category name from text box
  const [categoryName, setCategoryName] = useState("")

  // console.log(categoryName);
  const handleCategory = async () => {
    if (categoryName) {
      // make category name as object because json server accept object typed datas
      const body = {
        categoryName, allVideos: []
      }
      // make api call to add category to json server
      const response = await saveCategory(body)

      if (response.status > 200 && response.status < 300) {
        // hide modal
        handleClose()
        // reset state
        setCategoryName("")
        // call handle get category
        handleGetCategory()
        toast.success("category added")
      } else {
        toast.error("Uploading error....Perform the operation after sometime")
      }
    } else {
      toast.info("Please provide category name")
    }
  }

  const handleGetCategory = async () => {
    // make api call
    const { data } = await getAllCategory()
    // console.log(data);
    setAllCategory(data)
  }
  // console.log(allCategory);

  const handleDeleteCategory = async (id) => {
    // make api call
    await deleteCategory(id)
    // get all category
    handleGetCategory()
  }

  useEffect(() => {
    handleGetCategory()
  }, [categoryName])

  const dragOver = (e) => {
    console.log("Dragging over the category");
    e.preventDefault()
  }

  const videoDropped = async (e, categoryId) => {
    // console.log("inside category id :"+categoryId);
    const videoCardId = e.dataTransfer.getData("cardId")
    // console.log("Video card Id :"+videoCardId);
    // get details of video to be dropped
    const { data } = await getAVideo(videoCardId)
    // console.log(data);
    // get details of category
    const selectedCategory = allCategory.find(item => item.id === categoryId)
    selectedCategory.allVideos.push(data)
    // console.log(selectedCategory);
    // to store in json server make this api call
    await updateCategory(categoryId, selectedCategory)
    handleGetCategory()
  }

  return (
    <>

      <div className='d-grid'>
        <button onClick={handleShow} className="btn btn-info">Add New Category</button>
      </div>

      {
        allCategory ? allCategory?.map(item => (

          <div className="border rounded  mt-3 mb-3 p-3 rounded" droppable onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDropped(e, item?.id)}>

            <div className='d-flex justify-content-between align-items-center'>
              <h6>{item?.categoryName}</h6>
              <button onClick={() => handleDeleteCategory(item?.id)} className="btn"><i className='fa-solid fa-trash text-danger'></i></button>
            </div>
            {
              // checking category and allvideos array inside category
              item?.allVideos&&
              <Row>
                {
                  item.allVideos.map(card=>(
                    <Col sm={12}>
                     <VideoCard displayData={card} insideCategory={true}/>
                    </Col>
                  ))
                }
              </Row>
            }
          </div>

        ))
          : <p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to Display !!!</p>

      }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2 mt-2" controlId="formBasicEmail">
              <Form.Control onChange={(e) => setCategoryName(e.target.value)} type="text" placeholder="Enter Category Name" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position='top-center'
        theme='colored'
        autoClose={1500}
      />


    </>
  )
}

export default Category
