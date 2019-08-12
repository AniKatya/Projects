import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Landing from './components/Landing';
import MovieDetail from './components/MovieDetail';
import Catalog from './components/Catalog';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users:[
          { name: "Katya", backgroundColor: "#92828D", budget: 9, rentedMovies: []},
          { name: "Daniel", backgroundColor: "#D1DEDE", budget: 9, rentedMovies: []},
          { name: "Anna",  backgroundColor: "#DF928E", budget: 9, rentedMovies: []},
          { name: "Fedya", backgroundColor: "#C6AD94", budget: 9, rentedMovies: []}
      ],
      movies:[
          { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
          { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
          { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
          { id: 3, isRented: false, title: "Aladdin", year: 1992, img: "https://upload.wikimedia.org/wikipedia/en/5/58/Aladdinposter.jpg", descrShort: "Aladdin is a poor street urchin who spends his time stealing food from the marketplace in the city of Agrabah. His adventures begin when he meets a young girl who happens to be Princess Jasmine, who is forced to be married by her wacky yet estranged father. Aladdin's luck suddenly changes when he retrieves a magical lamp from the Cave of Wonders. What he unwittingly gets is a fun-loving genie who only wishes to have his freedom. Little do they know is that the Sultan's sinister advisor Jafar has his own plans for both Aladdin and the lamp." },
          { id: 4, isRented: false, title: "101 Dalmatians", year: 1996, img: "https://is3-ssl.mzstatic.com/image/thumb/Video49/v4/fa/94/b7/fa94b791-05d6-79c1-3a40-480c80f0fc8a/pr_source.lsr/268x0w.png", descrShort: "Roger Radciffe and his pet dalmatian, Pongo meet Anita and her pet dalmatian, Perdita and they fall in love and get married and Pongo and Perdita have puppies. Later the puppies end up in the clutches of Anita's hateful classmate, Cruella De Vil who is planning to make fur coats from their skin." }
        ],
      search: ""
      
  }}

  updateRented=(id,userId)=>{
    const movies = [...this.state.movies];
    const users = [...this.state.users];

    const movie = movies.filter(m=>m.id===id)[0]
    if(movie.isRented){
      movie.isRented = false
      users[userId].budget+=3
      let index = users[userId].rentedMovies.indexOf(id)
      users[userId].rentedMovies.splice(index,1)
      
    } else {
      movie.isRented = true
      users[userId].budget>=3?
      users[userId].budget-=3:
      alert("You don't have enough money")
      users[userId].rentedMovies.push(movies[id])
      console.log(users[0].rentedMovies)
    }
    this.setState({
      movies: movies
    })
  }

  updateSearch = (value) => {
    this.setState({ search: value })
  }

  render() { 
    return (
      <Router>
        <div className="App">

          <div id="main-links">
            <Link id="home-link" to="/">Home</Link>
            <Link id="catalog-link" to="/catalog">Catalog</Link>
          </div>

          <div id="routes">
          <Route path="/" exact render={() => <Landing users={this.state.users} />} />
          <Route path="/:username/catalog" exact render={({match}) => <Catalog match={match} movies={this.state.movies} users = {this.state.users} updateRented={this.updateRented} updateSearch = {this.updateSearch} search = {this.state.search} updateBudget = {this.updateBudget}/>} />
          <Route path="/catalog/:id" exact render={({match}) => <MovieDetail match={match} movies={this.state.movies} />} />
          </div>

        </div>
      </Router>
      );
  }
}
 
export default App;
