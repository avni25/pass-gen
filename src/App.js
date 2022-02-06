import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <PasswordGenerator />
    </div>
  );
}

class PasswordGenerator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      password: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {

  }

  render(){
    return (
      <div>
        <h1>Password Generator</h1>        
        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }

}












export default App;
