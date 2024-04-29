import { useState } from 'react'
import './App.css'
import Dice1 from './Components/Dice1'
import Dice2 from './Components/Dice2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Dice1/>
    <Dice2/>
    </>
  )
}

export default App
