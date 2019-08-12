import React, { Component } from 'react';
import'../styles/landing.css'
import { BrowserRouter as Link} from 'react-router-dom'




class Landing extends Component {
    render() { 
        return (
            <div id="landing">
            <div>Who is watching?</div>
            {this.props.users.map(u=>
            <Link to={`${u.name}/catalog`}>
            <div className = "box" style={{background: u.backgroundColor}} >{u.name}</div>
            </Link>)}
            </div>
        );
    }
}
 
export default Landing;