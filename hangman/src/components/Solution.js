import React, { Component } from 'react';

class Solution extends Component {

    render() {
        return Array.from(this.props.solution.word).map(l => {
                return this.props.letters[l]===true?<span>{l} </span>:<span>_ </span> 
            })
        }
}

export default Solution;
