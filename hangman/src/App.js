import React, { Component } from 'react';
import './App.css';
import Score from './components/Score';
import Letter from './components/Letter';
import Solution from './components/Solution';
import Hint from './components/Hint';


class App extends Component {
  constructor() {
    super()
    this.state = {
      letters: this.generateLetterStatus(),
      solution: { word: "KATYA", hint: "The princess's name" },
      score: 100
    }
  }
  generateLetterStatus() {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let letterStatus = {};
    for (let i = 0; i < alphabet.length; i++) {
      letterStatus[alphabet.charAt(i)] = false
    }
    return letterStatus
  }

  markLetterAsSelected(letter) {
    const letters = { ...this.state.letters }
    letters[letter] = true
    this.setState({
      letters: letters
    })
  }
  colorSelectedLetter(letter) {
    let style = { margin: "10px", fontWeight: "bold" }
    this.state.letters[letter] ? style.color = "#cdcdcd" : style.color = "black"
    return style
  }

  render() {

    return (
      <div>
        <Score score={this.state.score} /><br></br>
        <Solution letters={this.state.letters} solution={this.state.solution} /><br></br>
        <Hint hint = {this.state.solution.hint} />
        {Object.keys(this.state.letters).map((letter, index) => {
          return <Letter
            style={this.colorSelectedLetter(letter)}
            clicked={()=>this.markLetterAsSelected(letter)}
            letter={letter} key={index} />
        })}
      </div>
    )
  }
}

export default App;
