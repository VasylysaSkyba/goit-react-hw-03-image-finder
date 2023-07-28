import React, { Comment } from "react";
import Searchbar from "./Searchbar/Searchbar";

export default class App extends Comment {
  state = {
    query: '',
  };
    setQueryFormSearchbar = query => {
      this.setState({ query})
  }

  render() {
    return (
      <>
            <Searchbar setQueryFormSearchbar={this.setQueryFormSearchbar}  />
      </>
    );
  }
}