import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Btn from './components/Btn'
import Myroute from './Myroute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Myroute/>
    </>
  )
}

export default App
