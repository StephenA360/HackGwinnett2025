import { useState } from 'react'
import './App.css'
import {StepList} from "./Components/recipeList.tsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecipeList recipes={[]}/>
      <div className="flex-row" id="footer">
        <button>View Recipes</button>
        <button>Start Cooking</button>
        <button>Create Recipe</button>
      </div>
    </>
  )
}

export default App
