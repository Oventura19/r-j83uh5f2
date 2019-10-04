import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      valueForm:"",
      numberForm: 0,
    }
  }
  render() {
    return ( 
      <div className="container">
        <textarea rows="3" value={this.state.valueForm} onChange={this.updateValueForm.bind(this)}> </textarea> 
        <div className="counter"> {this.state.numberForm}</div> 
      </div>
    );
  }
  updateValueForm(event) {
    this.setState({
      valueForm: event.target.value,
      numberForm: event.target.value.length
    })
  }
}

export default App;