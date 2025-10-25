import { useState } from 'react'
import './App.css'
import RecipeList from './Components/recipeList.tsx'
import { StepsModal } from './Components/stepsModal.tsx'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  
  // Pizza recipe with steps
  const pizzaRecipe = {
    id: 1,
    name: "Pizza",
    description: "Home pizza with organic material",
    ingredients: "Pizza dough, tomato sauce, mozzarella cheese, olive oil, basil, your choice of toppings",
    instructions: "Make dough, add toppings, bake until golden",
    steps: [
      "Preheat your oven to 475°F (245°C). If you have a pizza stone, place it in the oven now",
      "Roll out the pizza dough on a floured surface to your desired thickness",
      "Spread a thin layer of tomato sauce over the dough, leaving a small border for the crust",
      "Sprinkle mozzarella cheese evenly over the sauce",
      "Add your favorite toppings",
      "Drizzle a little olive oil over the top and add fresh basil if desired",
      "Transfer pizza to the oven (or pizza stone) and bake for 12-15 minutes until crust is golden and cheese is bubbly",
      "Remove from oven, let cool for 2-3 minutes, slice, and serve hot"
    ]
  }

  const openModal = () => setIsVisible(true)
  const closeModal = () => setIsVisible(false)

  return (
    <>
      <StepsModal 
        open={isVisible} 
        onClose={closeModal} 
        steps={pizzaRecipe.steps}
      />
      
      <RecipeList recipes={[]}/>
      
      <div className="flex-row" id="footer">
        <button>View Recipes</button>
        <button onClick={openModal}>Start Cooking</button>
        <button>Create Recipe</button>
      </div>
    </>
  )
}

export default App
