import React from 'react';
import Posts from './Pages/Posts';
import Provider from './Context/Context';

function App() {
  return (
    <div className="App">
      <h2>Hacker News</h2>
      <Provider>
        <Posts />
      </Provider>
    </div>
  );
}

export default App;
