import React, { Component } from 'react';

class Letter extends Component {
  render() {
    return <span style={this.props.style} onClick = {this.props.clicked}>{this.props.letter}</span>
  }
}

export default Letter;