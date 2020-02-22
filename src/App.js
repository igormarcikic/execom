import React from 'react';
import Nav from './components/Nav';
import Posts from './Pages/Posts';
import About from './Pages/About';
import Provider from './Context/Context';
import * as styles from './App.module.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Provider>
              <Posts />
            </Provider>
          </Route>
          <Route exact path="/about" component={About}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
