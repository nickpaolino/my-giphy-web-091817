import React, { Component } from 'react'

class GifCard extends Component {

  handleClick = () => {
    if (this.props.isAdd){
      this.props.addToFavorites(this.props.gif)
    } else {
      this.props.removeFromFavorites(this.props.gif)
    }
  }

  render(){
    return (
      <div className="container">
      {console.log("Rendering Gif Card")}
      <img className="img" src={this.props.gif.images.downsized.url} alt={this.props.gif.title} style={{height:'50%', width:'50%'}}/>
      {console.log(this.props.gif)}
        <div className="centered" onClick={this.handleClick}>
          {this.props.isAdd ? 'Add to Favorites' : 'Remove from Favorites'}
        </div>
      </div>
    )
  }
}

export default GifCard
