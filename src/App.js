import React, { Component } from "react";
import Quote from "./components/quotes";
import "./App.css";

class App extends Component {
  state = {
    category: "dev"
  };

  changeCategory = category => {
    this.setState({
      category
    });
  }

  render () {
    const { category } = this.state;
    return (
      <div className="App">
        <Quote category={category} />
        <button onClick={() => this.changeCategory()}>
          Change Category
        </button>
      </div>
    );
  }
  
}

export default App;
