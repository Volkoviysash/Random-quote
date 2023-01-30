import React, { useState } from 'react'
import "./assets/css/style.css"

class App extends React.Component {
  //Some commit
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
  }

  setQuote(someQuote, newAuthor) {
      this.setState({quote: someQuote, author: newAuthor})
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
