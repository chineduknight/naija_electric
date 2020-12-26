import React, { useState } from "react";
import Stepper from "../components/stepper/Stepper";
import Materials from "../components/Project-profile/Materials";
import styled from "@emotion/styled";
import Feeder from "../components/Project-profile/Feeder";
import Inspection from "../components/Project-profile/Inspection";
import MaterialsEqup from "../components/Material-methods/Materials_Equipmet";
import MaterialsEqup2 from "../components/Material-methods/Materials_Equipment2";
import MaterialsEqup3 from "../components/Material-methods/Materials_Equipment3";
import InsulationTest from "../components/Material-methods/InsulationTest"
import { Button, Back } from "../components/Input";
import { useHistory } from "react-router";
import logo from '../assets/images/logo.png';
import VoltageTest from "../components/Material-methods/VoltageTest";

const StepHolder = () => {
  const [currentStep, setcurrentStep] = useState(1);
  const [mainStep, setmainStep] = useState(1);
  console.log("currentStep:", currentStep);
  const stepsArray = ["Project Basic info", "Feeder Information", "Inspection"];
  const stepsArray2 = ["Materials & Equipment Used", "Transformer Particulars"];
  const stepsArray3 = [
    "Earth Resistance Test",
    "Insulation Test",
    "Voltage Ratio Test",
  ];
  const MainArray = ["PROJECT PROFILE", "SUBSTATION MATERIAL & EQUIPMENT", 'TEST CARRIED OUT & RESULT OBTAINED'];
  const history = useHistory();
  const handleClick = (clickType) => {
    let newStep = currentStep;
  
    clickType === "next" ? newStep++ : newStep--;

    if (newStep > 0 && newStep <= 9) {
      setcurrentStep(newStep);
      if (newStep === 4) {
        setmainStep(2)
      }
      if (newStep === 6) {
        setmainStep(3)
      }
      if (newStep === 9) {
        history.push("/certificate");
      }
    }
  };

  return (
    <StepHolder.Wrapper>
    <img className="img-logo" src={logo} alt="logo" />
      <div>
        <div className="stepper-container-horizontal">
        <Stepper
        direction="horizontal"
        currentStepNumber={mainStep-1}
        steps={MainArray}
        noline
      />
        </div>
        <div className="stepper-container-horizontal">
          {currentStep > 0 && currentStep < 4 ? (
            <Stepper
              direction="horizontal"
              currentStepNumber={currentStep - 1}
              steps={stepsArray}
            />
          ) : currentStep >= 4 && currentStep < 6 ? (
            <Stepper
              direction="horizontal"
              currentStepNumber={currentStep - 4}
              steps={stepsArray2}
            />
          ) : (
            <Stepper
              direction="horizontal"
              currentStepNumber={currentStep - 6}
              steps={stepsArray3}
            />
          )}
        </div>
        {currentStep === 1 && <Materials />}
        {currentStep === 2 && <Feeder />}
        {currentStep === 3 && <Inspection />}
        {currentStep === 4 && <MaterialsEqup />}
        {currentStep === 5 && <MaterialsEqup2 />}
        {currentStep === 6 && <MaterialsEqup3 />}
        {currentStep === 7 && <InsulationTest/>}
        {currentStep === 8 && <VoltageTest/>}

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
  max-width: 902px;
  margin: 0 auto;
  position: relative;
  .button-holder {
    display: flex;
    justify-content: space-between;
  }
  .img-logo{
    position: absolute;
    top:2rem;
    left:-10rem;
  }
`;
export default StepHolder;
