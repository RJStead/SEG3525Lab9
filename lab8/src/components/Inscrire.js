import React from 'react'
import {validate, validateEn} from './validate.js'

const isEN = window.location.href.indexOf("/en");
const Inscrire = () => {
	return (
		<div>
		{isEN > -1
			? <English/>
			: <French/>
		}
		</div>
	)
}

const English = () =>  {
	return (
	<div className="container text-center p-3">
			<h4>Sign up for a class</h4>
			<h6>Classes are on Sundays, Wednesdays, Fridays and Saturdays</h6>
			<div class="container bg-light p-3">
				<div class="form-inline justify-content-center">
					<div class="form-group">
						<label class="p-3" for="name" title="Enter your first name">Name:</label>
						<input type="text" class="form-control" id="name" placeholder="Enter your name..."/>
					</div>
				</div>
				<div class="form-inline justify-content-center">
					<div class="form-group">
						<label class="p-3" for="age" title="Enter your age">Age:</label>
						<input type="text" class="form-control" id="age" placeholder="Enter your age..."/>
					</div>
				</div>
				<div class="form-inline justify-content-center">
					<div class="form-group">
						<label class="p-3" for="textPhone" title="Select the class you want to sign up for.">Class:</label>
						<select class="form-control" id="sel1">
							<option>Beginner</option>
							<option>Intermediate</option>
							<option>Advanced</option>
							<option>Expert</option>
						</select>
					</div>
				</div>
				<div class="form-inline justify-content-center">
					<label class="p-3" for="dateInput" title="Enter the session's date">Date:</label>
					<input class="form-control" type="text" id="datepicker"/>
				</div>
				
				
				<div class="form-inline justify-content-center">
					<div class="form-group">
						<label class="p-3" for="textCard" title="Enter your credit or debit card number">Card number:</label>
						<input type="text" class="form-control" id="textCard" placeholder="0000 0000 0000 0000"/>
					</div>
				</div>
				<div class="form-inline justify-content-center">
					<div class="form-group justify-content-center">
						<label class="p-3" for="expm" title="Enter the expiration info">Expiration:</label>
						<input style={{width : '12%'}} type="text" class="form-control" id="expm" placeholder="mm"/>
						<p class="m-3">/</p>
						<input class="p-3" style={{width : '12%'}} type="text" class="form-control" id="expa" placeholder="yy"/>
					</div>
				</div>
				<div class="form-inline justify-content-center">
					<div class="form-group justify-content-center">
						<label class="p-3" for="cvv" title="Enter the security code">CVV: </label>
						<input type="text" style={{width : '30%'}} class="form-control" id="cvv"/>
					</div>
				</div>
				
				<div>
					<button class="btn btn-primary m-3" id="soumettre" onClick={ () => validateEn()}>Submit</button>
				</div>
				
			</div>
		</div>
	)
}
  
const French = () =>  {
	return (
	<div className="container text-center p-3">
			<h4>S'inscrire à un cours</h4>
			<h6>Les cours sont donnée les dimanches, mercredis, vendredis et samedis</h6>
			<div class="container bg-light p-3">
				<div class="form-inline justify-content-center">
					<div class="form-group">
						<label class="p-3" for="name" title="Entrez-votre prénom">Nom:</label>
						<input type="text" class="form-control" id="name" placeholder="Entrez votre nom..."/>
					</div>
				</div>
				<div class="form-inline justify-content-center">
					<div class="form-group">
						<label class="p-3" for="age" title="Entrez-votre age">Age:</label>
						<input type="text" class="form-control" id="age" placeholder="Entrez votre Age..."/>
					</div>
				</div>
				<div class="form-inline justify-content-center">
					<div class="form-group">
						<label class="p-3" for="textPhone" title="Entrez le cours auquel vous voulez être enregistré.">Cours:</label>
						<select class="form-control" id="sel1">
							<option>Débutant</option>
							<option>Intermédiaire</option>
							<option>Avancé</option>
							<option>Expert</option>
						</select>
					</div>
				</div>
				<div class="form-inline justify-content-center">
					<label class="p-3" for="dateInput" title="Entrez la date de la session">Date:</label>
					<input class="form-control" type="text" id="datepicker"/>
				</div>
				
				
				<div class="form-inline justify-content-center">
					<div class="form-group">
						<label class="p-3" for="textCard" title="Entrez le numéro de votre catre de crédit ou débit">Numéro de carte:</label>
						<input type="text" class="form-control" id="textCard" placeholder="0000 0000 0000 0000"/>
					</div>
				</div>
				<div class="form-inline justify-content-center">
					<div class="form-group justify-content-center">
						<label class="p-3" for="expm" title="Entrez le mois d'expiration de la carte">Expiration:</label>
						<input style={{width : '12%'}} type="text" class="form-control" id="expm" placeholder="mm"/>
						<p class="m-3">/</p>
						<input class="p-3" style={{width : '12%'}} type="text" class="form-control" id="expa" placeholder="aa"/>
					</div>
				</div>
				<div class="form-inline justify-content-center">
					<div class="form-group justify-content-center">
						<label class="p-3" for="cvv" title="Entrez le code de sécurité de la carte">CVV: </label>
						<input type="text" style={{width : '30%'}} class="form-control" id="cvv"/>
					</div>
				</div>
				
				<div>
					<button class="btn btn-primary m-3" id="soumettre" onClick={ () => validate()}>Soumettre</button>
				</div>
				
			</div>
		</div>
	)
}

export default Inscrire