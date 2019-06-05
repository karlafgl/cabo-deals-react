import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import SeaAdventure from './components/SeaAdventure';

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Route exact path="/" component={Home}/>
      <Route exact path="/sea-adventures" render={()=> <SeaAdventure />}/>
    </div>
  </BrowserRouter>
)

export default App;
