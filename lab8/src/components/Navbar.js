import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import logo from './logo.png'

const Navbar = () => {
	// Code inspiré de https://getbootstrap.com/docs/4.0/components/navbar/
	const isEN = window.location.href.indexOf("/en");
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center">
			<img style={{width : '3%', height : '3%'}} src={logo}/><a className="navbar-brand" href={isEN > -1 ? "/en":"/"}>Tennis Ottawa</a>
				{isEN > -1
					? <English/>
					: <French/>
				}
		</nav>
	)
}

const English = () => {
	return (
		<div className="container inline">
		<ul className="nav justify-content-center">
		<li className="nav-item active"><a className="nav-link text-light" href="/Cours/en">Class</a></li>
		<li className="nav-item active"><a className="nav-link text-light" href="/Inscrire/en">Signup</a></li>
		<li className="nav-item active"><a className="nav-link text-light" href="/Connecter/en">Connect</a></li>
		</ul>
		<a className="nav-link text-light float-right" href= {window.location.href.replace("/en", "")}>Francais</a>
		</div>
	)
}

const French = () => {
	return (
		<div className="container inline">
		<ul className="nav justify-content-center">
		<li className="nav-item active"><a className="nav-link text-light" href="/Cours">Cours</a></li>
		<li className="nav-item active"><a className="nav-link text-light" href="/Inscrire">S'inscrire</a></li>
		<li className="nav-item active"><a className="nav-link text-light" href="/Connecter">Se connecter</a></li>
		</ul>
		<a className="nav-link text-light float-right" href= {window.location.href + "/en"}>English</a>
		</div>
	)
}

export default Navbar