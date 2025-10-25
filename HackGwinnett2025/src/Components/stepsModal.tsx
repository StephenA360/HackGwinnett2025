import { useState, useEffect } from "react";

type StepsPopupProps = {
  steps: string[];
  open: boolean;
  onClose: () => void;
  startAt?: number;
  onStepChange?: (step: number) => void;
};

export function StepsModal({
  steps,
  open,
  onClose,
  startAt = 0,
  onStepChange,
}: StepsPopupProps) {
  const [currentStep, setCurrentStep] = useState(startAt);

  // Reset whenever modal opens — I sometimes forget this but it’s handy.
  useEffect(() => {
    if (open) {
      setCurrentStep(startAt);
    }
  }, [open, startAt]);

  // Handle keyboard shortcuts — a bit messy but works fine for now.
  useEffect(() => {
    if (!open) return;

    const handleKey = (ev: KeyboardEvent) => {
      switch (ev.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          goNext();
          break;
        case "ArrowLeft":
          goPrev();
          break;
        default:
          break; // not interested in other keys
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, currentStep]); // not the best dependency, but it’s fine for now

  // Notify parent about step changes
  useEffect(() => {
    if (onStepChange) {
      onStepChange(currentStep);
    }
  }, [currentStep]);

  // I like naming these instead of inline lambdas; easier to reuse
  const goNext = () => {
    setCurrentStep((prev) => {
      const nextStep = Math.min(prev + 1, steps.length - 1);
      return nextStep;
    });
  };

  const goPrev = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const repeatStep = () => {

    console.log("Repeating step:", steps[currentStep]);
  };

  if (!open) return null; // Nothing fancy here

  const text = steps[currentStep] || "—";


  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cooking steps popup"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999, // 
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()} 
        style={{
          background: "#fff",
          borderRadius: 10,
          width: "min(700px, 90vw)",
          padding: "1.5rem",
          boxShadow: "0 12px 25px rgba(0,0,0,0.25)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0 }}>
            Step {currentStep + 1} / {steps.length}
          </h2>
          {}
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              fontSize: "1.2rem",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ marginTop: 16, fontSize: 18, lineHeight: 1.6 }}>
          {text}
        </div>

        <div
          style={{
            marginTop: 24,
            display: "flex",
            justifyContent: "flex-end",
            gap: 10,
          }}
        >
          {}
          <button onClick={goPrev} disabled={currentStep === 0}>
            ◀ Back
          </button>
          <button onClick={repeatStep}>⟳ Repeat</button>
          <button onClick={goNext} disabled={currentStep === steps.length - 1}>
            Next ▶
          </button>
        </div>
      </div>
    </div>
  );
}
