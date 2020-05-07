import React from 'react';
import './App.css';
import { BrowserRouter as Router,  Route} from 'react-router-dom';

// Import pages
import Home from './pages/home/home';

export default function App() {
  return (
      <div className="App">
          <Router>
            <link href="https://fonts.googleapis.com/css?family=Rajdhani:520,600|Ubuntu&display=swap" rel="stylesheet"/>
            <div>

                {/* Parent pages paths */}
              <Route exact path="/"
                component={Home}/>

            </div>
          </Router>
      </div>
  );
}
