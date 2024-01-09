
import SingleBook from './SingleBook'
import { Col, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'
import { useState } from 'react'


function BookList(books) {

  const [searchQuery, setsearchQuery]=useState("")
  const [titoloLibro, settitoloLibro]=useState("")
  
  return (
    <>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Search a book</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search here"
              value={searchQuery}
              onChange={(e) => setsearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <div className='d-flex '>
        <Row className="w-50 ">

          {books.filter((b) =>
              b.title.toLowerCase().includes(searchQuery)
            )
            .map((b) => (
              <Col onClick={() => settitoloLibro(b.asin)} xs={6} md={6} key={b.asin}>

                {
                SingleBook(b)
                }
              </Col>
            ))}
        </Row>

        {CommentArea (titoloLibro)}
      </div>
    </>
  )
}


export default BookList
