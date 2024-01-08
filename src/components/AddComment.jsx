import { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

class AddComment extends Component {
  state = {
    comment: {
      comment: '',
      rate: 1,
      elementId: this.props.asin,
    },
  }
  
  async sendComment (e) {
    e.preventDefault()
    if(!this.props.asin)
    {
      return
    }
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(this.state.comment),
          headers: {
            'Content-type': 'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZmJkZWUwZGQxZDAwMTgyZDE3NWUiLCJpYXQiOjE3MDQ3MjEzNzUsImV4cCI6MTcwNTkzMDk3NX0.4ZXIQ3PvGX5u4WX-8mHRnz2sJe3gax22dar7QBMlpos",
          },
        }
      )
      if (response.ok) {
        console.log(this.state.comment)
        console.log(this.props.asin)
        alert('Comment was sent!')
        this.setState({
          comment: {
            comment: '',
            rate: 1,
            elementId: this.props.asin,
          },
        })
      } else {
        console.log(this.state.comment)
        console.log(this.props.asin)
        console.log('error')
        alert('something went wrong')
      }
    } catch (error) {
      console.log(this.state.comment)
      console.log(this.props.asin)
      console.log('error')
    }
  }
  componentDidMount(){
    console.log("sendcomment didmound ok")
    this.sendComment()
  }
  componentDidUpdate(prevProps)
  {
    if(prevProps.asin!==this.props.asin)
    {
      console.log("sendcomment ok")
      this.sendComment()
    }
  }
  render() {
    return (
      <div className="my-3">
        <Form onSubmit={this.sendComment}>
          <Form.Group>
            <Form.Label>Comment text</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add comment here"
              value={this.state.comment.comment}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    comment: e.target.value,
                  },
                })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comment.rate}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    rate: e.target.value,
                  },
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
}

export default AddComment
