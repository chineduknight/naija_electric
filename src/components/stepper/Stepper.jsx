import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import firstImg from "../../assets/images/first.svg";

const Stepper = (props) => {
  const [steps, setSteps] = useState([]);
  const [percentComplete, setpercentComplete] = useState(0)
  useEffect(() => {
    const { steps, currentStepNumber } = props;

    const stepsState = steps.map((step, index) => {
      const stepObj = {};
      stepObj.description = step;
      stepObj.highlighted = index === 0 ? true : false;
      stepObj.selected = index === 0 ? true : false;
      stepObj.completed = false;
      return stepObj;
    });

    const currentSteps = updateStep(currentStepNumber, stepsState);

    setSteps(currentSteps);
    console.log("Percent achieve",
    Math.round((currentStepNumber/steps.length) * 100))

    setpercentComplete(Math.round((currentStepNumber/steps.length) * 100) + 
    Math.round((1/steps.length) * 100)
    )
  }, [props]);

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let stepCounter = 0;

    // Completed - to add a check mark
    // Selected - to fill step with color
    // Highlighted - to make text of selected step bold

    while (stepCounter < newSteps.length) {
      // Current step
      if (stepCounter === stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: true,
          selected: true,
          completed: false,
        };
        stepCounter++;
      }
      // Past step
      else if (stepCounter < stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: true,
          completed: true,
        };
        stepCounter++;
      }
      // Future step
      else {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: false,
          completed: false,
        };
        stepCounter++;
      }
    }

    return newSteps;
  };
  const { direction } = props;
  const stepsJSX = steps.map((step, index) => {
    return (
      <div className="main-wrapper">
        <img src={firstImg} alt="firstImg" />
        <p className={`desc ${step.selected ? "step-active" :""}`}> {step.description} </p>
      </div>
      // <div className="step-wrapper" key={index}>
      //   <div
      //     className={`step-number ${
      //       step.selected ? "step-number-selected" : "step-number-disabled"
      //     }`}
      //     style={{ background: `${step.selected ? stepColor : "none"}` }}
      //   >
      //     {step.completed ? <span>&#10003;</span> : index + 1}
      //     <img src={firstImg} alt="firstImg" />
      //   </div>
      //   <div
      //     className={`step-description ${
      //       step.highlighted && "step-description-active"
      //     }`}
      //   >
      //     {step.description}
      //   </div>
    );
  });

  return (
    <Stepper.Wrapper percent={percentComplete}>
      <div className={`stepper-wrapper-${direction}`}>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        {stepsJSX}
      </div>
    </Stepper.Wrapper>
  );
};

Stepper.Wrapper = styled.div`
  .stepper-wrapper-horizontal {
    display: flex;
    justify-content: space-between;
    position: relative;
    .progress-bar {
    overflow: hidden;
    height: 2px;
    background-color: #F5F5F5;
      width: 100%;
      position: absolute;
      bottom:-10px;
    .progress {
      border-radius: 7px;
      /* width: 20%; */
      width: ${(props) => props.percent}%;
      height: 100%;
      background-color: #2039CC;
    }
  }
    .step-wrapper {
      width: 23%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .step-number {
      border-radius: 50%;
      border: 1px solid grey;
      width: 20px;
      height: 20px;
      padding: 3px;
      text-align: center;
      margin-bottom: 1.2rem;
    }

    .divider-line {
      height: 2px;
      background-color: #f5f5f5;
      position: absolute;
      /* top: 20%; */
      left: 40%;
      bottom: 0;
    }
    .active {
      background-color: #2039cc;
    }
    .divider-line-2 {
      width: 296%;
    }

    .divider-line-3 {
      width: 125%;
    }

    .divider-line-4 {
      width: 70%;
    }

    .divider-line-5 {
      width: 100%;
    }

    // new styles
    .main-wrapper {
      display: flex;
      position: relative;
      p {
        margin-left: 1rem;
      }
      .desc {
        color: gray;
      }
      .step-active{
        color: #000;
        font-weight: bold;

      }
    }
  }

  .step-number-selected {
    // background: purple;
    border: 1px solid #bdbdbd;
    color: #fff;
  }

  .step-number-disabled {
    border: 1px solid #838383;
  }

  .step-description-active {
    font-weight: bold;
    color: #000;
  }
`;

export default Stepper;
