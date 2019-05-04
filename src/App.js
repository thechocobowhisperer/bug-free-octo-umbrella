import React, {Component} from 'react';
import './App.css';
import {Button, Card, CardBody, CardTitle, CardText} from 'reactstrap';

class App extends Component {
  state = {gunType:'', damageType:''}

  gunTypes = ['pistol', 'shotgun', 'rifle', 'smg']
  damageTypes = ['fire', 'poison', 'electric']

  

  randomGunType() {
    let gun = this.gunTypes[Math.floor(Math.random() * (this.gunTypes.length))];
    console.log(gun)
    this.state.gunType = gun
  }

  randomDmgType() {
    let dmg = this.damageTypes[Math.floor(Math.random() * (this.damageTypes.length))];
    console.log(dmg)
    this.state.damageType = dmg
  }

  combineParts(event){
    this.randomGunType()
    this.randomDmgType()
    console.log(this.state)
    this.setState({state:event})
  }
  render () {
    
    return (
    <div className="App">
      <header className="App-header">
        <div>
          <Card className='card'>
            <CardBody color='dark' >
              <CardTitle></CardTitle>
              <CardText>Gun Type: {this.state.gunType}</CardText>
              <CardText>Damage Type: {this.state.damageType}</CardText>
            </CardBody>
          </Card>
        </div>
        <p>
          Click the button to generate a random gun.
        </p>
        
        <Button color='primary' onClick={(random) => this.combineParts(random)}>
          Find Loot!
        </Button>
      </header>
    </div>
    );
  };
}; 

export default App;
