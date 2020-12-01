import "./App.scss";
import Stepper from "../components/stepper/Stepper";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1
    };
  }

  handleClick(clickType) {
    const { currentStep } = this.state;
    let newStep = currentStep;
    clickType === "next" ? newStep++ : newStep--;

    if (newStep > 0 && newStep <= 5) {
      this.setState({
        currentStep: newStep
      });
    }
  }

  render() {
    const { currentStep } = this.state;

    return (
      <React.Fragment>
        <div className="stepper-container-vertical">
          <Stepper
            direction="vertical"
            currentStepNumber={currentStep - 1}
            steps={stepsArray}
            stepColor="#ee5253"
          />
        </div>

        <div className="stepper-container-horizontal">
         {stepsArray !== undefined && <Stepper
            direction="horizontal"
            currentStepNumber={currentStep - 1}
            steps={stepsArray}
            stepColor="purple"
          />}
        </div>

        <div className="buttons-container">
          <button onClick={() => this.handleClick()}>Previous</button>
          <button onClick={() => this.handleClick("next")}>Next</button>
        </div>
      </React.Fragment>
    );
  }
}

const stepsArray = [
  // "Create your account",
  "Add personal info",
  "Add payment details",
  "Complete registration",
  "Registration complete"
];