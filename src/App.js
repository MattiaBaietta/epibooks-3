import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import { Col, Container, Row } from 'react-bootstrap'
import BookList from './components/BookList'

import fantasy from './data/fantasy.json'


function App() {
  return (
    <Container>
      <MyNav />
          <BookList  books={fantasy} />
      <MyFooter />
    </Container>
  )
}

export default App
