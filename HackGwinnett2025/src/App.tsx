import { useState } from 'react'
import './App.css'
import {StepList} from "./Components/stepList.tsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StepList steps={[]}/>
      <div className="flex-row" id="footer">
        <button>View Recipes</button>
        <button>Create Recipe</button>
      </div>
    </>
  )
}

export default App
