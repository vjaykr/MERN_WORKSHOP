import { useState } from 'react'
import './App.css'
import AddArticle from './AddArticle'
import ArticleList from './ArticleList'

import Navbar from './Navbar'

function App() {

  return (
    <>
    <nav className='navbar bg-light'>
      <div className='container'>
        <h4>arcticle list </h4>
        </div>
    </nav>
      
      <Navbar />
      <ArticleList />
      <AddArticle />
    </>
  )
}

export default App;
