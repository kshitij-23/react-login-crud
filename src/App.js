import './App.css';
import Login from './components/Login';
import UsersList from './components/UsersList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router> 
      <div className="App">
        <Switch>
            <Route path="/users">
                <UsersList />
            </Route> 
            <Route path="/">
                <Login />
            </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
