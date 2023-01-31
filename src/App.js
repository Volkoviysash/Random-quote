import React, { useState } from 'react'
import "./assets/css/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    }
    //here is generating the first quote
    this.randomQuoteGenerator()
    
    //binding the methods
    this.randomQuoteGenerator = this.randomQuoteGenerator.bind(this)
    this.setQuote = this.setQuote.bind(this)
  }
  
  async randomQuoteGenerator() {
    //fetching random quotes/data from the API and parsing it into JS object
    let newQuote;
    const response = await fetch('https://api.quotable.io/random');
    newQuote = await response.json()

    //set quote and author to the state
    this.setQuote(newQuote.content, newQuote.author)

    //change color
    this.setNewColor()
  }

  setQuote(someQuote, newAuthor) {
      this.setState({quote: someQuote, author: newAuthor})
    }

  setNewColor() {
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'];
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    var r = document.querySelector(':root');
    r.style.setProperty('--main-color', newColor);
  }

    render() {
    return (
      <div className="App">
        <div id="quote-box">
          <div className='quote-text'>
            <span id='text'>{this.state.quote}</span>
          </div>
          <div className='quote-author'>
            <span id='author'>- {this.state.author}</span>
          </div>
          <div class="buttons">
          <a class="button" id="tweet-quote" title="Tweet this quote!" target="_top">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </a>
          <a class="button" id="instagram-quote" title="Instagram this quote!" target="_top">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </a>
          <button id='new-quote' class="button" onClick={this.randomQuoteGenerator}>Change quote</button>
          </div>
        </div>
        <div className='footer'>
          <p>by <a href='https://github.com/Volkoviysash' target="_blank">
            <FontAwesomeIcon icon={faGithub} /> volkovich alexandr
            </a></p>
        </div>
      </div>
    );
  }
}

export default App;
