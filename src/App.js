import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      counter : 0,
      error: false
    }
  }

  handleClick =(type) =>{
    if(this.state.counter!==0 || type==='inc'){
      this.setState({
        counter: type==='inc' ? this.state.counter+1 : this.state.counter-1,
        error: false
      })
    }else{
      this.setState({
        counter:0,
        error: true
      })
    }
  }

  render(){
    return (
      <div data-test='component-app'>
        <h1 data-test='counter-display'>{!this.state.error ? `The counter is currently ${this.state.counter}` : `Error!! Cannot Decrement below 0`}</h1>
        <button data-test='increment-button' onClick={() => this.handleClick('inc')}>Increment counter</button>
        <button data-test='decrement-button' onClick={() => this.handleClick('dec')}>Decrement counter</button>
      </div>
    )
  }
}

export default App;
