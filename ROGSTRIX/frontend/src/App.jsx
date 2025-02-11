import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Asus from './Asus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>ROGSTRIX</h1>
     <Asus/>
    </>
  )
}

export default App
