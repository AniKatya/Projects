import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {
  render(){
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return(<Letter allLetters={alphabet} />);
 }
}
export default Letters;