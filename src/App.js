import './App.css';
import Form from './components/Form';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Users from './components/Users'

function App() {
  return (
    <Router>

    <div className="App">
      {/* <div><h1>hello</h1></div> */}
      <Switch>
        <Route 
        path="/plabs-react"
        exact
        component={Form}
        />
        <Route
        path="/plabs-react/users"
        exact
        component={Users}
        />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
