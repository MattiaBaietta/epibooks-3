
import { Card } from 'react-bootstrap'

import { useState } from 'react'





function Singlebook(book) {
  //const [selected,setselected]=useState(false)

  return (
    <>
      <Card data-testid="cardgroup-item"
        //  onClick={() => setselected(!selected)}
        //  style={{ border: selected ? '3px solid red' : 'none' }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>
            {book.title}
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}


export default Singlebook
