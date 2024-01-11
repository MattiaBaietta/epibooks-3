
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'
import { useState } from 'react'
import { useEffect } from 'react'

function CommentArea(asin) {

  const [comments, setcomments] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [isError, setisError] = useState(false)
  async function Commenti() {
    if (!asin) {
      setisLoading(false)
      return
    }
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
        asin,
        {
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZmJkZWUwZGQxZDAwMTgyZDE3NWUiLCJpYXQiOjE3MDQ3MjEzNzUsImV4cCI6MTcwNTkzMDk3NX0.4ZXIQ3PvGX5u4WX-8mHRnz2sJe3gax22dar7QBMlpos",
          },
        }
      )
      console.log(response)
      if (response.ok) {
        let comments = await response.json()
        setcomments(comments)
        setisLoading(false)
        setisError(false)
      } else {
        console.log('error')
        setisLoading(false)
        setisError(true)
      }
    } catch (error) {
      console.log(error)
      setisLoading(false)
      setisError(true)
    }
  }

   useEffect(() => {
    Commenti()
  }, [asin])




  return (
    <div data-testid="comment-area" className="w-50 text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      {AddComment(asin)}
      <CommentList  commentsToShow={comments} />
    </div>
  )
}



export default CommentArea
