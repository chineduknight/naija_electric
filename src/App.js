import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Stepper from './pages/Stepper';
import Certificate from './pages/Certificate';
import Feeder from "./components/Project-profile/Feeder";
import Inspection from "./components/Project-profile/Inspection";
import MaterialsEquipment from "./components/Material-methods/Materials_Equipmet" 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/stepper" exact component={Stepper} />
          <Route path="/certificate" exact component={Certificate} />
          <Route path="/feeder" exact component={Feeder}/>
          <Route path="/feeder/inspection" exact component={Inspection}/>
          <Route path="/materials" exact component={MaterialsEquipment}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
