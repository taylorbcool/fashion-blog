import React, { useState, useEffect } from 'react'
import axiosWithAuth from './auth/axiosWithAuth.js'
import Header from './components/Header'
import PostList from './views/PostList'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    console.log('useEffect fired!')
    axiosWithAuth.get('/posts')
    .then(res => {
      setPosts(res.data)
      setLoading(false)
    })
    .catch(err => {
      console.log('axios error: ', err)
    })
  }, [])

  return (
    <div className="App">
      <Header/>
      <PostList posts={posts} loading={loading} />
    </div>
  );
}

export default App;
