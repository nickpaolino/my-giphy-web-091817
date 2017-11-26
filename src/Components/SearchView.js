import React, { Component } from 'react'

import SearchBox from './SearchBox'
import TrendingBox from './TrendingBox'
import CardList from './CardList'

class SearchView extends Component {
  constructor(props){
    super(props)

    this.state = {
      isSearch: true
    }
  }

  searching = () => {
    this.setState({
      isSearch: true
    })
  }

  trending = () => {
    this.setState({
      isSearch: false
    })
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   // Only re-renders if the state has changed
  //   return this.state.isSearch !== nextState.isSearch
  // }

  render(){
    return <div style={{left: '40%', position: 'absolute'}}>
      <div className="toggle view">
        {console.log("SearchView Rendering")}
        <div
        className="toggle"
        onClick={this.searching}>Search</div> |
        <div
        className="toggle"
        onClick={this.trending}> Trending</div>
      </div><br/><br/>
      <div className="form">
        {this.state.isSearch ?
          <SearchBox searchGifs={this.props.searchGifs} /> :
          <TrendingBox searchTrendingGifs={this.props.searchTrendingGifs} />}
      </div><br/><br/>
    <CardList gifs={this.props.gifs} addToFavorites={this.props.addToFavorites}/>
    </div>
  }
}

export default SearchView
