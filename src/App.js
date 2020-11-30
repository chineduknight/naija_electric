import logo from './logo.svg';
import './App.css';
import { Switch, Route,BrowserRouter } from "react-router-dom";
// import { Route } from "react-router-dom";/
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Home}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
