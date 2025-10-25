export type StepInfo =
{
    id: string,
    title: string,
    description: string
}

export function Step({title, description}: StepInfo){
    return(
        <div>
            <h3>{title}</h3>
            <h4>{description}</h4>
        </div>
    )
}