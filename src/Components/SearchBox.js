import React, { Component } from 'react'

class SearchBox extends Component {
  constructor(props){
    super(props)

    this.state = {
      search: '',
      limit: 1
    }
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    let search;
    let limit;

    if (name === "search"){
      search = value
      limit = this.state.limit
    } else {
      search = this.state.search
      limit = value
    }

    this.setState((prevState, props) => {
      this.props.searchGifs({search: search, limit: limit})
      return {[name]: value}
    })
  }

  render(){
    return <div>
      {console.log("Rendering SearchBox")}
      {console.log(this.state)}
      Search: <input type="text" name="search" onChange={this.handleChange}/><br/><br/>
      Limit: <input type="text" name="limit" onChange={this.handleChange}/>
    </div>
  }
}

export default SearchBox
