import React from 'react'
import Post from '../components/Post.js'

import { Spinner } from 'reactstrap'

const PostList = (props) => {

  return(
    <>
    {props.isLoading && <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" color='primary' />}
    {!props.isLoading && (
      <>
        {props.posts.map(post => (<Post key={post._id} post={post} />))}
      </>
    )}
    </>
  )
}

export default PostList