import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import SearchPage from './components/SearchPage'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
    <Router>
    <Header/> 
<Switch>    
<Route exact path = "/" component ={Home}/>
<Route exact path = "/search" component ={SearchPage}/>


</Switch>




    <Footer/> 
    
    </Router>
</div>
  );
}

export default App;
