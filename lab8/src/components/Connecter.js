import React from 'react'
import {ChatBox} from 'react-chatbox-component';
import  './style.css';

var messageList = [
      {
        "text": "Bonjour je cherche un partenaire près de St-Laurent. Je suis du niveau intermediaire.",
        "id": "1",
        "sender": {
          "name": "Tennis12",
          "uid": "user3",
          "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png",
        },
      },
      {
        "text": "Moi aussi, es-tu libre les dimanches à 5h?",
        "id": "2",
        "sender": {
          "name": "Tennis2233",
          "uid": "user2",
          "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png",
        },
      },
      {
        "text": "Oui, on se rencontrera au centre d'achat.",
        "id": "3",
        "sender": {
          "name": "Tennis12",
          "uid": "user3",
          "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png",
        },
      },
    ];
	
var messageListEn = [
      {
        "text": "Any beginner players looking to play 2v2 on Sundays in Kanata?",
        "id": "1",
        "sender": {
          "name": "Player1",
          "uid": "user3",
          "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png",
        },
      },
      {
        "text": "I'd be down. I don't have a partner though.",
        "id": "2",
        "sender": {
          "name": "Tennis64",
          "uid": "user2",
          "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png",
        },
      },
      {
        "text": "I can be your partner.",
        "id": "3",
        "sender": {
          "name": "Champ24",
          "uid": "user3",
          "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png",
        },
      },
    ];

const isEN = window.location.href.indexOf("/en");	
class Connecter	extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      user: {},
    };
  }

  componentDidMount() {

    const user = {
      "uid": "user1"
    };
	
	if (isEN > -1)
		this.setState({ messages: messageListEn, user: user });
	else
		this.setState({ messages: messageList, user: user });
  }
  
  handleSubmit() {
	var input = document.getElementsByClassName("message-input")
	if (input.length > 0)
	messageList.push({
        "text": input[0].value,
        "id": "3",
        "sender": {
          "name": "Moi",
          "uid": "user3",
          "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png",
        },
      });

  }
  

  render() {
	return (
		<div className='container' style={{maxWidth: '800px', paddingTop: '100px'}}>
		{isEN > -1
			? <English/>
			: <French/>
		}
		<ChatBox onSubmit={this.handleSubmit} messages={this.state.messages} />
		</div>
    )
  }	
}

const English = () =>  {
	return (
	<div className='chat-header'>
	  <h4>Connect</h4>
	</div>
	)
}
  
const French = () =>  {
	return (
	<div className='chat-header'>
	  <h4>Se connecter</h4>
	</div>
	)
}

export default Connecter