import './App.css';
// import Item from './MyItem';

import React from 'react';

class StarWars extends React.Component{
  render(){
    return(
      <h1>This is Star Wars</h1>
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
