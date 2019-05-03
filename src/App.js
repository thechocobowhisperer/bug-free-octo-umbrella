import React, {Component} from 'react';
import './App.css';
import {Button} from 'reactstrap';

class App extends Component {
  state = {}

  randomNumber = (event) => {
    const num = Math.floor(Math.random() * 10) +1;
    console.log(num)  
    this.setState({integer: num});   
  }

  render () {
    
    return (
    <div className="App">
      <header className="App-header">
        <p>
          Click the button to generate a random gun.
        </p>
        <Button color='primary' onClick={(random) => this.randomNumber(random)}>
          Find Loot!
        </Button>
      </header>
    </div>
    );
  };
}; 

export default App;
