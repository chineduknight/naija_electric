import React, { useState } from "react";
import Stepper from "../components/stepper/Stepper";

const StepHolder = () => {
  const [currentStep, setcurrentStep] = useState(1);
  const stepsArray = [
    "Create your accounts",
    "Add personal info",
    "Add payment details",
    "Complete registration",
    "Registration complete",
  ];
  const handleClick = (clickType) => {
    let newStep = currentStep;
    clickType === "next" ? newStep++ : newStep--;

    if (newStep > 0 && newStep <= 5) {
      setcurrentStep(newStep);
    }
  };

  return (
    <div>
      <div className="stepper-container-horizontal">
        <Stepper
          direction="horizontal"
          currentStepNumber={currentStep - 1}
          steps={stepsArray}
          stepColor="purple"
        />
      </div>

      <div className="buttons-container">
        <button onClick={() => handleClick()}>Previous</button>
        <button onClick={() => handleClick("next")}>Next</button>
      </div>
    </div>
  );
};

export default StepHolder;
