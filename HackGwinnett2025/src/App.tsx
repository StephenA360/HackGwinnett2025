import { useState } from 'react'
import './App.css'
import RecipeList from './Components/recipeList.tsx'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [currStep, changeStep] = useState(0)
  function showModal(){
    setIsVisible(!isVisible)
  }
  return (
    <>
      {isVisible && <dialog>
        
      </dialog>
      }
      
      <RecipeList recipes={[]}/>
      <div className="flex-row" id="footer">
        <button>View Recipes</button>
        <button onClick={showModal}>Start Cooking</button>
          
            
        
        <button>Create Recipe</button>
      </div>
    </>
  )
}

export default App
