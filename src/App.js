import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Stepper from './pages/Stepper';
import Certificate from './pages/Certificate';
import Dashboard from './pages/Dashboard';
import Feeder from "./components/Project-profile/Feeder";
import Inspection from "./components/Project-profile/Inspection";
import MaterialsEquipment from "./components/Material-methods/Materials_Equipmet" 
import MaterialsEquipment2 from "./components/Material-methods/Materials_Equipment2" 
import MaterialsEquipment3 from "./components/Material-methods/Materials_Equipment3"; 
import Das from './pages/Das'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Stepper} />
          <Route path="/das" exact component={Das} />
          <Route path="/stepper" exact component={Stepper} />
          <Route path="/certificate" exact component={Certificate} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/feeder" exact component={Feeder}/>
          <Route path="/feeder/inspection" exact component={Inspection}/>
          <Route path="/materials" exact component={MaterialsEquipment}/>
          <Route path="/materials/step2" exact component={MaterialsEquipment2}/>
          <Route path="/materials/step3" exact component={MaterialsEquipment3}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
