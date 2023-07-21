import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Account from './components/Account';
import NewPrompt from './components/NewPrompt';
import Prompt from './components/Prompt';
import UpdatePrompt from './components/UpdatePrompt';
import History from './components/History';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/account" component={Account} />
        <Route path="/prompt/new" component={NewPrompt} />
        <Route path="/prompt/:id" component={Prompt} />
        <Route path="/prompt/:id/update" component={UpdatePrompt} />
        <Route path="/history" component={History} />
      </Switch>
    </Router>
  );
}

export default App;
