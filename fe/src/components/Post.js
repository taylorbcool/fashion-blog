import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'

const Post = props => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.post.img_url} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.post.author}</CardTitle>
          <CardSubtitle>{props.post.body}</CardSubtitle>
          <CardText>{props.post.items}</CardText>
          <Button>Like</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Post