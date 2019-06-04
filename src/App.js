import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'



class App extends Component {

  render(){

    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Route to="/" component={Home}/>
        </div>
      </BrowserRouter>
);
  }
  
}

export default App;
