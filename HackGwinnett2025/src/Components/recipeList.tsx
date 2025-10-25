import {Recipe, type RecipeInfo} from "./recipe.tsx"



export function StepList({recipes}: {recipes: RecipeInfo[]}){
    return(
        <div>
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <Recipe id={recipe.id} title={recipe.title}/>
                    <br></br>
                </div>
            ))}


        </div>
    )
}