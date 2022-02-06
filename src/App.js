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
        <div id="cb-group"> 
          <label> 
            <input type="checkbox" defaultChecked={false}/>
            include numbers
          </label>  
          <br />
          <label> 
            <input type="checkbox" defaultChecked={false}/>
            include special characters
          </label>  
          <br />   
        </div>      
        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }

}












export default App;
