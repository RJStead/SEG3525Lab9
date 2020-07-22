import React from 'react'
import deb from './debut.jpg'
import avance from './avance.jpg'
import inter from './int.jpg'
import exp from './expert.jpg'

const isEN = window.location.href.indexOf("/en");
const Cours = () => {
	return (
		<div className="container text-center p-3">
			{isEN > -1
			? <English/>
			: <French/>
			}
		</div>
	)
}

const English = () =>  {
	return (
		<div>
		<h4>Class</h4>
		<div class="row">
			<div class="col-sm bg-primary p-3">
			  <img class="imgs" src={deb} alt="Beginner"/>
			  <h6 class="m-3">Beginner</h6>
			  Recommended for people with a rating of: 1.0 - 2.5
			</div>
			<div class="col-sm bg-primary-alt p-3">
			  
			  <img class="imgs" src={inter} alt="Intermediate"/>
			  <h6 class="m-3">Intermediate</h6>
			  Recommended for people with a rating of: 2.5 - 4.0
			</div>
		</div>
		<div class="row">
			<div class="col-sm bg-primary-alt p-3">
				
				<img class="imgs" src={avance} alt="Advanced"/>
				<h6 class="m-3">Advanced</h6>
				Recommended for people with a rating of: 4.0 - 5.0
			</div>
			<div class="col-sm bg-primary p-3">
			  
			  <img class="imgs" src={exp} alt="Expert"/>
			  <h6 class="m-3">Expert</h6>
			  Recommended for people with a rating of: 5.0 - 6.0
			</div>
		</div>
		</div>
	)
}
  
const French = () =>  {
	return (
		<div>
		<h4>Cours</h4>
		<div class="row">
			<div class="col-sm bg-primary p-3">
			  
			  <img class="imgs" src={deb} alt="Débutant"/>
			  <h6 class="m-3">Débutant</h6>
			  Recommandé pour les personnes avec un rating d'environ: 1.0 - 2.5
			</div>
			<div class="col-sm bg-primary-alt p-3">
			  
			  <img class="imgs" src={inter} alt="Intermédiaire"/>
			  <h6 class="m-3">Intermédiaire</h6>
			  Recommandé pour les personnes avec un rating d'environ: 2.5 - 4.0
			</div>
		</div>
		<div class="row">
			<div class="col-sm bg-primary-alt p-3">
				
				<img class="imgs" src={avance} alt="Avancé"/>
				<h6 class="m-3">Avancé</h6>
				Recommandé pour les personnes avec un rating d'environ: 4.0 - 5.0
			</div>
			<div class="col-sm bg-primary p-3">
			  
			  <img class="imgs" src={exp} alt="Expert"/>
			  <h6 class="m-3">Expert</h6>
			  Recommandé pour les personnes avec un rating d'environ: 5.0 - 6.0
			</div>
		</div>
		</div>
	)
}


export default Cours