import React, { useState } from 'react'
import "./assets/css/style.css"


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
          <div id='buttons'>
            <a class="button" id="tweet-quote" title="Tweet this quote!" target="_top" href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22Education%20costs%20money.%20%20But%20then%20so%20does%20ignorance.%22%20Sir%20Claus%20Moser">
              <i class="fa fa-twitter"></i>
            </a>
            <button id='new-quote' onClick={this.randomQuoteGenerator}>Change quote</button>
          </div>
        </div>
        <div className='footer'>
          <p>by volkovich alexandr</p>
        </div>
      </div>
    );
  }
}

export default App;
