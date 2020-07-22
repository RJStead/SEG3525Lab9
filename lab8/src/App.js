import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Cours from './components/Cours'
import Inscrire from './components/Inscrire'
import Connecter from './components/Connecter.js'
import HomeEn from './components/Home-en'
import NotFound from './components/NotFound.js'

function App() {
	return(
		<BrowserRouter>
		  <div className="app-content">
			<Navbar />
			<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/Cours' component={Cours}/>
			<Route path='/Inscrire' component={Inscrire}/>
			<Route path='/Connecter' component={Connecter}/>
			<Route exact path='//en' component={HomeEn}/>
			<Route component={NotFound}/>
			</Switch>
		  </div>
		</BrowserRouter>
	)
}

export default App;
