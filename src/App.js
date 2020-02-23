import React from 'react';
import Nav from './components/Nav';
import Posts from './Pages/Stories/Stories';
import About from './Pages/About/About';
import Provider from './Context/Context';
import * as styles from './App.module.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SingleStory from './Pages/SingleStory/SingleStory';

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
          <Route path='/posts/:id' component={SingleStory} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
