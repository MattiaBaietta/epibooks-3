import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'

class BookList extends Component {
  state = {
    titoloLibro: "",
    searchQuery: '',
  }

  render() {
    return (
      <>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Search a book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className='d-flex '>
          <Row className="w-50 ">

            {this.props.books
              .filter((b) =>
                b.title.toLowerCase().includes(this.state.searchQuery)
              )
              .map((b) => (
                <Col onClick={() => this.setState({ titoloLibro: b.asin })} xs={6} md={6} key={b.asin}>
                  
                  <SingleBook   book={b} />
                </Col>
              ))}
          </Row>
          
          <CommentArea asin={this.state.titoloLibro}/>
        </div>
      </>
    )
  }
}

export default BookList
