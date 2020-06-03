import React from 'react';
import Footer from './components/Footer/Footer'
import Greenhouse from './pages/projects/contents/Greenhouse'
import Makerspace from './pages/projects/contents/Makerspace'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import './components/fontawesome';
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
              <div id="topSection" />

                {/* Parent pages paths */}
              <Route exact path="/"
                component={Home}/>
              <Route path="/projects/greenhouse"
                component={Greenhouse}/>
              <Route path="/projects/makerspace"
                component={Makerspace}/>

            </div>
          <Footer />
          <ScrollToTop />
          </Router>
      </div>
  );
}
