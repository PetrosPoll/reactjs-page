import NavBar from './Components/NavBar';
import Home from './Home';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from './About';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
