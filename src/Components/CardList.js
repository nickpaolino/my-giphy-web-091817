import React from 'react'

import GifCard from './GifCard'

const CardList = (props) => {
  const gifs = props.gifs.map((gif) => {
      return <GifCard gif={gif} addToFavorites={props.addToFavorites} isAdd={true}/>
  })

  return (
  <div className="scroll">
    {console.log("Rendering Card List")}
    {gifs}
  </div>
  )
}

export default CardList
