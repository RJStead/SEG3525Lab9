import React from 'react'
import bg from './home-background.jpg'

const Home = () => {
	return (
		<div className="container text-center p-5">
			<img src={bg}  id="home-bg" alt="tennis rackets"/>
			<h4 style={{backgroundColor: "white", color: "black", width: "10%", position: "absolute", marginTop: "12%", left: "45%"}}>Accueil</h4>
		</div>
	)
}

export default Home