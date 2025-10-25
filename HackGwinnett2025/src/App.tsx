import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {StepList} from "./Components/stepList.tsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StepList steps={}/>
    </>
  )
}

export default App
