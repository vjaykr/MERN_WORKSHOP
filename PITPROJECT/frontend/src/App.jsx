import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddArticle from './AddArticle'
import ArticleList from './ArticleList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <nav className='navbar bg-light'>
      <div className='container'>
        <h4>arcticle list </h4>
        </div>
    </nav>
      <h1 className='text-danger'>hello from me </h1>
      <AddArticle />
      <ArticleList />


    </>
  )
}

export default App
