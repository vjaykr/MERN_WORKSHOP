import { useState } from 'react'
import './App.css'
import AddArticle from './AddArticle'
import ArticleList from './ArticleList'
import Asus from './asus'

function App() {

  return (
    <>
    <nav className='navbar bg-light'>
      <div className='container'>
        <h4>arcticle list </h4>
        </div>
    </nav>
      <h1 className='text-danger'>hello from me </h1>
      <Asus />
      <ArticleList />
      <AddArticle />
    </>
  )
}

export default App;
