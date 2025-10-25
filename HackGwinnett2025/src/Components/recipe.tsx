export type RecipeInfo =
{
    id: string,
    title: string,
}

export function Recipe({title}: RecipeInfo){
    return(
        <div>
            <h3>{title}</h3>
        </div>
    )
}