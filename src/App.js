import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CatFacts from "./components/CatFacts";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/catfacts">
            <CatFacts />
          </Route>
          <Route path="/contact"></Route>
          <Route>
            <p>Page not found</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
