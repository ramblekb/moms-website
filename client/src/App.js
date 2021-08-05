import {BaseProvider, LightTheme} from 'baseui';
import {Provider as StyletronProvider} from 'styletron-react';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';



function App() {
  return (
    <Router>
    <div>
      <nav className= 'nav-link'>
      <h1>Moms</h1>
        <ul>
          <li>
          <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/services">
        <Services />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/services">
        <Services />
        </Route>
        <Route path="/about">
        <About />
        </Route>
        <Route path="/contact">
        <Contact />
        </Route>
      </Switch>
    </div>
  </Router>
);
}

function home() {
return <h2>Home</h2>;
}

function services() {
return <h2>Services</h2>;
}

function about() {
return <h2>About</h2>;
}

function contact() {
  return <h2>Contact</h2>;
  }

export default App;
