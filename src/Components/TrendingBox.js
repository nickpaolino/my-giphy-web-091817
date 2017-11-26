import React, { Component } from 'react'

class TrendingBox extends Component {
  constructor(props){
    super(props)

    this.state = {
      limit: ''
    }
  }

  handleChange = (event) => {
    const value = event.target.value

    this.setState((prevState, props) => {
      this.props.searchTrendingGifs(value)
      return {limit: value}
    })
  }

  render(){
    return <div>
      {console.log("Rendering TrendingBox")}
      {console.log(this.state)}
      Limit: <input type="text" onChange={this.handleChange}/>
    </div>
  }
}

export default TrendingBox
