import { ListGroup } from 'react-bootstrap';
import SingleComment from './SingleComment';

const CommentList = ({ commentsToShow }) => (
  <ListGroup  style={{ color: 'black' }} className="mt-2">
    {commentsToShow.map((comment) => (
      <SingleComment data-testid="comment-item" comment={comment} key={comment._id} />
    ))}
  </ListGroup>
);

export default CommentList;
