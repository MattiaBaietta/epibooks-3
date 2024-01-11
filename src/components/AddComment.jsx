
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'








function AddComment(asin) {

  const [comment, setcomment] = useState({ comment: "", rate: "1",})


  async function sendComment(e) {
    e.preventDefault()

    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify({...comment,elementId:asin}),
          headers: {
            'Content-type': 'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZmJkZWUwZGQxZDAwMTgyZDE3NWUiLCJpYXQiOjE3MDQ3MjEzNzUsImV4cCI6MTcwNTkzMDk3NX0.4ZXIQ3PvGX5u4WX-8mHRnz2sJe3gax22dar7QBMlpos",
          },
        }
      )
      if (response.ok) {
        alert("commento inserito")
         setcomment({
           comment: '',
           rate: 1,
         })
      }
      else {
        console.log(asin)
        alert('something went wrong')
      }
    }
    catch (error) {

      console.log('error')
    }
  }

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group>
          <Form.Label>Comment text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add comment here"
            value={comment.comment}
            onChange={(e) =>

              setcomment({
                ...comment,
                comment: e.target.value,
                
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setcomment({
                ...comment,
                rate: e.target.value,
                
                
              })

            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          
          Submit
        </Button>
      </Form>
    </div>
  )
}


export default AddComment
