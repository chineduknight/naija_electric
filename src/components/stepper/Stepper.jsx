import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";


export default class Stepper extends Component {
  constructor() {
    super();
    this.state = {
      // Completed - to add a check mark
      // Selected - to fill step with color
      // Highlighted - to make text of selected step bold
      steps: []
    };
  }

  componentDidMount() {
    const { steps, currentStepNumber } = this.props;
    console.log('steps:', steps)
if (steps) {
  

    const stepsState = steps.map((step, index) => {
      const stepObj = {};
      stepObj.description = step;
      stepObj.highlighted = index === 0 ? true : false;
      stepObj.selected = index === 0 ? true : false;
      stepObj.completed = false;
      return stepObj;
    });
  
    const currentSteps = this.updateStep(currentStepNumber, stepsState);

    this.setState({
      steps: currentSteps
    });
  }
}
  componentDidUpdate(prevProps) {
    const { steps } = this.state;
    const currentSteps = this.updateStep(this.props.currentStepNumber, steps);

    if (prevProps.currentStepNumber !== this.props.currentStepNumber)
      this.setState({
        steps: currentSteps
      });
  }

  updateStep(stepNumber, steps) {
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
          completed: false
        };
        stepCounter++;
      }
      // Past step
      else if (stepCounter < stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: true,
          completed: true
        };
        stepCounter++;
      }
      // Future step
      else {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: false,
          completed: false
        };
        stepCounter++;
      }
    }

    return newSteps;
  }

  render() {
    const { direction, stepColor } = this.props;
    const { steps } = this.state;
    const stepsJSX = steps.map((step, index) => {
      return (
        <div className="step-wrapper" key={index}>
          <div
            className={`step-number ${
              step.selected ? "step-number-selected" : "step-number-disabled"
            }`}
            style={{ background: `${step.selected ? stepColor : "none"}` }}
          >
            {step.completed ? <span>&#10003;</span> : index + 1}
          </div>
          <div
            className={`step-description ${step.highlighted &&
              "step-description-active"}`}
          >
            {step.description}
          </div>
          {index !== steps.length - 1 && (
            <div className={`divider-line divider-line-${steps.length}`} />
          )}
        </div>
      );
    });

    return <Stepper.Wrapper className={`stepper-wrapper-${direction}`}>{stepsJSX}</Stepper.Wrapper>;
  }
}
Stepper.Wrapper = styled.div`
.stepper-wrapper-horizontal {
    display: flex;
    justify-content: space-between;

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
        height: 1px;
        background-color: #bdbdbd;
        position: absolute;
        top: 20%;
        left: 70%
    }

    .divider-line-2 {
        width: 296%
    }

    .divider-line-3 {
        width: 125%
    }

    .divider-line-4 {
        width: 70%
    }

    .divider-line-5 {
        width: 60%
    }
}

.stepper-wrapper-vertical {
    .step-wrapper {
        display: flex;
        align-items: center;
        margin-bottom: 1.2rem;
        position: relative;
    }

    .step-number {
        border-radius: 50%;
        width: 18px;
        height: 18px;
        padding: 4.5px 4px 4px;
        text-align: center;
        font-size: 95%;
    }

    .step-description {
        margin-left: 1.2rem;
        padding-bottom: 3px;
    }

    .divider-line {
        height: 17px;
        width: 1px;
        background-color: #bdbdbd;
        position: absolute;
        top: 100%;
        left: 6.4%
    }
}

.step-number-selected {
    // background: purple;
    border: 1px solid #bdbdbd;
    color: #fff;

}

.step-number-disabled {
    border: 1px solid #838383
}

.step-description-active {
    font-weight: bold;
}
`
Stepper.propTypes = {
  direction: PropTypes.string.isRequired,
  currentStepNumber: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
  stepColor: PropTypes.string.isRequired
};