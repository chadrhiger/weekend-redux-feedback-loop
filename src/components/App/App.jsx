// App.js

import React, { useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Comments from '../Comments/Comments';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    // getFeedback();
  }, [])





  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <div>
          <Route exact path="/">
            <Feeling />
          </Route>
        </div>
        <div>
          <Route exact path="/understanding">
            <Understanding />
          </Route>
        </div>
        <div>
          <Route exact path="/support">
            <Support />
          </Route>
        </div>
        <div>
          <Route exact path="/comments">
            <Comments />
          </Route>
        </div>
        <div>
          <Route exact path="/review">
            <Review />
          </Route>
        </div>
        <div>
          <Route exact path="/thankYou">
            <ThankYou />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;

