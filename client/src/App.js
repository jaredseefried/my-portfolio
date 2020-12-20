import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from '../src/pages/Home'
import Navigation from '../src/components/Navigation'
import Footer from './components/Footer'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'




function App() {
  return (
    <Router>
    <div className="App container col-12">
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </div>
  </Router>
  );
}

export default App;
