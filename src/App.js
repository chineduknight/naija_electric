import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Stepper from './pages/Stepper'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/stepper" exact component={Stepper} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
