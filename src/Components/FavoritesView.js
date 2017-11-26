import React, { Component } from 'react'

import GifCard from './GifCard'

class FavoritesView extends Component {

  listGifs = () => {
    return this.props.favorites.map((gif) => {
      return <GifCard gif={gif} removeFromFavorites={this.props.removeFromFavorites} isAdd={false}/>
    })
  }

  render(){
    return (
      <div className="favorites">
        <h4>Favorites: </h4>
        {this.listGifs()}
      </div>
    )
  }
}

export default FavoritesView
