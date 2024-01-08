import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  }
  async Commenti(){
    if(!this.props.asin)
    {
      this.setState({isLoading:false})
      return
    }
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
          this.props.asin,
        {
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZmJkZWUwZGQxZDAwMTgyZDE3NWUiLCJpYXQiOjE3MDQ3MjEzNzUsImV4cCI6MTcwNTkzMDk3NX0.4ZXIQ3PvGX5u4WX-8mHRnz2sJe3gax22dar7QBMlpos",
          },
        }
      )
      console.log(response)
      if (response.ok) {
        let comments = await response.json()
        this.setState({ comments: comments, isLoading: false, isError: false })
      } else {
        console.log('error')
        this.setState({ isLoading: false, isError: true })
      }
    } catch (error) {
      console.log(error)
      this.setState({ isLoading: false, isError: true })
    }
  }
  componentDidMount (){
    console.log("Mount ok")
    this.Commenti()

  }
  componentDidUpdate(prevProps){
    if(prevProps.asin!==this.props.asin)
    {
      console.log("update ok")
      this.Commenti()
    }


  }
  render() {
    return (
      <div className="w-50 text-center">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    )
  }
}

export default CommentArea
