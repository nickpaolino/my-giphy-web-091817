import React, { Component } from "react";
import "./App.css";

import SearchView from './SearchView'
import FavoritesView from './FavoritesView'

const API_KEY = `HQP5JW1d8onLoaN3gtT2DePg1JMWNBB3`
const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`
const TRENDING_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&`

class App extends Component {
  constructor(){
    super()

    console.log("Constructor");
    this.state = {
      gifs: [],
      favorites: []
    }
  }

  addToFavorites = (gif) => {
    const newFavorites = this.state.favorites
    if (!newFavorites.includes(gif)){
      newFavorites.push(gif)
      this.setState({
        favorites: newFavorites
      })
    }
  }

  removeFromFavorites = (gif) => {
    const newFavorites = this.state.favorites.filter(pic => pic !== gif)
    this.setState({
      favorites: newFavorites
    })
  }

  fetchGifs = (query) => {
    console.log("Fetching Gifs");

    if (query.limit !== ""){
      const term_url = `&q=${query.search}&limit=${query.limit}`
      const full_url = BASE_URL + term_url
      console.log(full_url);
      fetch(BASE_URL + term_url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          gifs: json.data
        })
      })
    }
  }

  searchTrendingGifs = (limit) => {
    console.log("Fetching Trending Gifs");

    if (limit !== ""){
      const trendingURL = TRENDING_URL + `limit=${limit}`
      https://api.giphy.com/v1/gifs/trending?api_key=HQP5JW1d8onLoaN3gtT2DePg1JMWNBB3&limit=2
      console.log("THIS IS THE TRENDING URL", trendingURL);

      fetch(trendingURL)
      .then(res => res.json())
      .then(json => {
        this.setState({
          gifs: json.data
        })
      })
    }
  }

  componentDidUpdate(){
    console.log("Component Did Update");
    console.log(this.state.gifs);
  }

  searchGifs = (term) => {
    console.log("Searching Gifs");
    this.fetchGifs(term)
  }

  render() {
    return <div className="App">
      {console.log("App Rendering")}
      {console.log(this.state)}
      <div className="header">
        <h2>My Giphy Search</h2>
        <SearchView
        gifs={this.state.gifs}
        searchGifs={this.searchGifs}
        searchTrendingGifs={this.searchTrendingGifs}
        addToFavorites={this.addToFavorites}/>
      </div>
      <FavoritesView favorites={this.state.favorites} removeFromFavorites={this.removeFromFavorites}/>
    </div>
  }
}

export default App;
