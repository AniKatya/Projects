import React, { Component } from 'react';
import './App.css';
import Score from './components/Score';
import Letter from './components/Letter';
import Solution from './components/Solution';
import Letters from './components/Letters';

class App extends Component {
  constructor() {
    super()
    this.state = this.generateLetterStatuses()
    console.log(this.state)
  }

generateLetterStatuses(){
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let letterStatus = {}
  for (let i =0; i<alphabet.length; i++){
    letterStatus[alphabet.charAt(i)]=false
  }
  return letterStatus
}

render(){
  return (
    <div>
    <Score /><br></br>
    <Solution /><br></br>
    <Letters />
    </div>
  )
}
}

export default App;
