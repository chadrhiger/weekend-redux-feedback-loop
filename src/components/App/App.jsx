// App.js
import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Comments from '../Comments/Comments';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';


function App() {




  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Feeling />
      <Understanding />
      <Support />
      <Comments />
    </div>
  );
}

export default App;
