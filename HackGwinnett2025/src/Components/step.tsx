export type StepInfo =
{
    id: string,
    title: string,
}

export function Step({title}: StepInfo){
    return(
        <div>
            <h3>{title}</h3>
        </div>
    )
}