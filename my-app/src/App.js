import './App.css';
// import Item from './MyItem';

import React from 'react';

class StarWars extends React.Component{
  constructor(){
    super()
    this.state = {
      name: null,
      height: null,
      homeworld: null,
      films:[],
    }
  }
  getNewCharachter(){
    console.log('get new charachter')
    this.setState({
      name: 'Luke',
      height: 172,
      homeworld: 'Tattooine',
      films: ['item1', 'Item2']
    })

  }
  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.height} cm</p>
        <p>Homeworld: {this.state.homeworld}</p>
        <ul>
          <li>{this.state.films}</li>
        </ul>
        <button type='button'
         className='btn' 
         onClick={() => this.getNewCharachter()} >Randomise Character</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars/>
      </header>
    </div>
  );
}

export default App;
