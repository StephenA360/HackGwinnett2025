export type RecipeInfo =
{
    id: string,
    title: string,
    steps: string[],
}

export function Recipe({title}: RecipeInfo){
    return(
        <div>
            <button>{title}</button>
        </div>
    )
}