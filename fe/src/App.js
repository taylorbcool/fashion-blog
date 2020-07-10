import React from 'react';
import Header from './components/Header'
import PostList from './views/PostList'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Picture feed here!</h1>
      <PostList />
    </div>
  );
}

export default App;
