import React, { Component } from 'react';
import '../styles/catalog.css'
import { Link } from 'react-router-dom'
// our fontawesome imports
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Catalog extends Component {
    constructor() {
        super();
        this.updateRented = (id,userId) => {
            this.props.updateRented(id,userId)
        }
        this.updateSearch = (event) => {
            this.props.updateSearch(event.target.value)
    }
}
    render() {
        const username = this.props.match.params.username
        const movies = this.props.movies
        const users = this.props.users
        const userId = this.props.users.findIndex(u=>u.name === username)

        return (
            <div id={`catalog-${userId}`}>
                <input placeholder="Search" 
                       type="text" 
                       onChange={this.updateSearch} 
                       value={this.props.search}>
                       </input>
                <div id="budget">
                    <p>Budget:</p>
                {users[userId].budget}</div>

                {movies.some(m=>m.isRented) && this.props.search === ""?
                <div className="rented-movies">
                    <p>Rented:</p>
                    {users[userId].rentedMovies.map(m => {
                        return(
                            <div className="rented-movie-container" style={{ backgroundImage: `url(${m.img})`}}>
                                <FontAwesomeIcon icon={faHeartBroken} className="unrent-btn" onClick={() => this.updateRented(m.id,userId)}/>
                            </div>
                        )
                    })}
                </div>
                : movies.filter(m => m.isRented).filter(m => {
                    const title = m.title.toLowerCase()
                    const search = this.props.search.toLowerCase()
                    return title.includes(search)
                }).map(m => {
                    return (
                        <div className="rented-movie-container" style={{ backgroundImage: `url(${m.img})`}}>
                            <FontAwesomeIcon icon={faHeartBroken} className="unrent-btn" onClick={() => this.updateRented(m.id, userId)} />
                        </div>
                    )
                })}

                <div className="catalog">
                    <p>Catalog:</p>
                    {this.props.search === ""?
                    this.props.movies.map(m => {
                        return (
                            <div className="movie-container">
                                <Link to={`/catalog/${m.id}`}>
                                    <img className="img" src={m.img}></img>
                                </Link>
                                <FontAwesomeIcon icon={faHeart} className="rent-btn" onClick={() => this.updateRented(m.id, userId)} />
                            </div>
                        )
                    }
                ):
                movies.filter(m=>{
                    const title = m.title.toLowerCase()
                    const search = this.props.search.toLowerCase()
                    return title.includes(search)
                })
                .map(m => {
                    return (
                        <div className="movie-container">
                            <Link to={`/catalog/${m.id}`}>
                                <img className="img" src={m.img}></img>
                            </Link>
                            <FontAwesomeIcon icon={faHeart} className="rent-btn" onClick={() => this.updateRented(m.id)} />
                        </div>
                    )
                })}
                </div>
            </div>

        )
    }
}


export default Catalog;