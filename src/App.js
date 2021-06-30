import './App.css';
import Form from './components/form';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import Users from './components/Users'

function App() {
  return (
    <Router>

    <div className="App">
      <Switch>
        <Route 
        path="/"
        exact
        component={Form}
        />
        <Route
        path="/users"
        exact
        component={Users}
        // render={(props) => }
        />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
