import "././index.css"
export function stepsModal({currentStep}: {currentStep: string}){
    return(
        <div className="flex-column">
            <dialog>
                <h3>{currentStep}</h3>
            </dialog>
            <div className="flex-row">
                <button id="nextButton"></button>
                <button id="backButton"></button>
                <button id="repeatbutton"></button>
            </div>
            
        </div>
    )
}