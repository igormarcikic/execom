import React from 'react';
import Posts from './Pages/Posts';
import Provider from './Context/Context';
import * as styles from './App.module.scss';

function App() {
  return (
    <div className= {styles.App}>
      <h1>Hacker News</h1>
      <Provider>
        <Posts />
      </Provider>
    </div>
  );
}

export default App;
