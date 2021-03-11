import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Team from './Components/TeamDetail/Team';

function App() {
  return (
  <Router className="app">

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/details/:id">
        <Team/>
      </Route>
      <Route path="*">
        <h4>this page is not available</h4>
      </Route>
    </Switch>
</Router>
  );
}
export default App;
