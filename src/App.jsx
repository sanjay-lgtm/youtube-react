import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DropDown from './Component/DropDown/DropDown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DropDown />
    </>
  )
}

export default App
