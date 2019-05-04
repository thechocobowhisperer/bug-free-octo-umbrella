import React, {Component} from 'react';
import './App.css';
import {Button, Card, CardBody, CardTitle, CardText} from 'reactstrap';

class App extends Component {
  state = {}

  gunTypes = ['pistol', 'shotgun', 'rifle', 'smg']
  damageTypes = ['fire', 'poison', 'electric']

  guns={gunType:'', damageType:''}

  randomGunType() {
    let gun = this.gunTypes[Math.floor(Math.random() * (this.gunTypes.length))];
    console.log(gun)
    this.guns.gunType =  gun
  }

  randomDmgType() {
    let dmg = this.damageTypes[Math.floor(Math.random() * (this.damageTypes.length))];
    console.log(dmg)
    this.guns.damageType = dmg
  }

  combineParts(event){
    this.randomGunType()
    this.randomDmgType()
    console.log(this.guns)
    return (this.guns)
  }
  render () {
    
    return (
    <div className="App">
      <header className="App-header">
        <div>
          <Card className='card'>
            <CardBody color='dark' >
              <CardTitle></CardTitle>
              <CardText>Gun Type: {this.guns.gunType}</CardText>
              <CardText>Damage Type: {this.guns.damageType}</CardText>
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
