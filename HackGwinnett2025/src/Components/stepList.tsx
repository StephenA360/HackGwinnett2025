import {Step, type StepInfo} from "./step.tsx"



export function StepList({steps}: {steps: StepInfo[]}){
    return(
        <div>
            {steps.map((step) => (
                <div key={step.id}>
                    <Step id={step.id} title={step.title}/>
                    <br></br>
                </div>
            ))}


        </div>
    )
}