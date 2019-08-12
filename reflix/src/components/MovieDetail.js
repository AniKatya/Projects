import React, { Component } from 'react';
import'../styles/moviedetail.css'


class MovieDetail extends Component {
  
    render() {      
        const movieId = this.props.match.params.id
        const movie = this.props.movies[movieId]
        // const user = this.props.user
        // const url = `/${user}/catalog/`

        return <div className="MovieDetail" key={movieId} >
            {/* <div id="main-links"><Link to={url}>Catalog</Link></div> */}
            <p>{movie.title} ,{movie.year}</p>
            <img className="detail-img" src={movie.img} alt="" />
            <h5>{movie.descrShort} </h5>
        </div>
    }
}
 
export default MovieDetail;