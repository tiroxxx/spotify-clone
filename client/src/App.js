import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./components/Login"
import About from "./components/About"
import Dashboard from "./components/Dashboard"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

const code = new URLSearchParams(window.location.search).get("code")

function loggedIn() {
  return code ? <Dashboard code={code} /> : <Login />
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={loggedIn} />
        <Route  exact path="/about" component={About} />
      </Switch>
    </Router>
  )

}

export default App;
