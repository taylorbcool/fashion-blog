import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../auth/axiosWithAuth.js'
import Post from '../components/Post.js'

import { Spinner } from 'reactstrap'

const PostList = () => {
  const { isLoading, setIsLoading } = useState(true)
  const { posts, setPosts } = useState([])

  useEffect(() => {
    axiosWithAuth.get('/posts')
    .then(res => {
      setPosts(res.data)
      console.log(res.data)
      setIsLoading(false)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return(
    <>
    {isLoading && <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" color='primary' />}
    {!isLoading && (
      <>
        {posts.map(post => (<Post key={post._id} post={post} />))}
      </>
    )}
    </>
  )
}

export default PostList