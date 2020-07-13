import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Container
} from 'reactstrap'

const Post = props => {
  return (
    <Col sm='5'>
      <Card>
        <CardImg top src={props.post.img_url} alt="Card image cap" />
        <CardBody>
          <CardTitle tag='h3'>{props.post.body}</CardTitle>
          <CardSubtitle tag='h5'>{props.post.author.username}</CardSubtitle>
          {props.post.items.map(item => (
            <CardText>{item.item}: {item.brand}, {item.price}</CardText>
          ))}
          <Button>Like</Button>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Post