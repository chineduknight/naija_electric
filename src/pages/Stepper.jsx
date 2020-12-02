import React, { useState } from "react";
import Stepper from "../components/stepper/Stepper";
import Materials from "../components/Project-profile/Materials";
import styled from "@emotion/styled";
import Feeder from "../components/Project-profile/Feeder";
import Inspection from "../components/Project-profile/Inspection";
import MaterialsEqup from '../components/Material-methods/Materials_Equipmet'
import { Button, Back} from '../components/Input'
const StepHolder = () => {
  const [currentStep, setcurrentStep] = useState(1);
  const stepsArray = ["Project Basic info", "Feeder Information", "Inspection"];
  const stepsArray2 = ["Materials & Equipment Used", "Transformer Particulars"];
  const handleClick = (clickType) => {
    let newStep = currentStep;
    clickType === "next" ? newStep++ : newStep--;

    if (newStep > 0 && newStep <= 7) {
      setcurrentStep(newStep);
    }
  };

  return (
    <StepHolder.Wrapper>
      <div>
        <div className="stepper-container-horizontal">
          <Stepper
            direction="horizontal"
            currentStepNumber={currentStep - 1}
            steps={currentStep > 0 && currentStep < 4 ? stepsArray : stepsArray2}
            stepColor="purple"
          />
        </div>
        {currentStep === 1 && <Materials />}
        {currentStep === 2 && <Feeder />}
        {currentStep === 3 && <Inspection />}
        {currentStep === 4 && <MaterialsEqup />}
        
      <div className="button-holder">
          <Back onClick={() => handleClick()}>BACK</Back>
          <Button onClick={() => handleClick("next")}>CONTINUE</Button>
          </div>
      </div>
    </StepHolder.Wrapper>
  );
};
StepHolder.Wrapper = styled.div`
  display: grid;
  place-items: center;
  max-width:652px;
  margin:0 auto;
  .button-holder{
    display:flex;
    justify-content:space-between;
  }
`;
export default StepHolder;
