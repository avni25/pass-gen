import logo from './logo.svg';
import './App.css';
import React from 'react';
import { generatePassword } from './algorithms/pass';


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
      length: 8,
      cb_numbers: "cb_numbers",
      cb_characters: "cb_characters",
      cb_numbers_checked: false,
      cb_characters_checked: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleClick = () => {    
    this.setState({
      ...this.state,
      password: generatePassword(this.state.cb_numbers_checked, this.state.cb_characters_checked, this.state.length)
    });
  }

  handleInputChange(event) {
    this.setState({
      ...this.state,
      length: event.target.value
    });
  }

  handleChange = (e) =>{
    let isChecked = e.target.checked;
    let cbName = e.target.name;
    if(cbName === this.state.cb_numbers){
      this.setState({
        ...this.state,
        cb_numbers_checked: isChecked
      });
    }else if(cbName === this.state.cb_characters){
      this.setState({
        ...this.state,
        cb_characters_checked: isChecked
      });
    }
    console.log(isChecked +" "+ cbName);
  }

  render(){
    return (
      <div id="pass-gen">
        <h1>Password Generator</h1> 
        <div id="cb-group"> 
          <label> 
            <input type="checkbox" name={this.state.cb_numbers}
             defaultChecked={this.state.cb_numbers_checked} 
             onChange={(e)=>this.handleChange(e)}
             />
            include numbers
          </label>  
          <br />
          <label> 
            <input type="checkbox" name={this.state.cb_characters} 
            defaultChecked={this.state.cb_characters_checked}
            onChange={(e)=>this.handleChange(e)}
            />
            include special characters
          </label>  
          <br /> 
          <input type="text" id="length" placeholder="length" onChange={(e)=>this.handleInputChange(e)}/>
        </div>      
        <button class="btn btn-primary" onClick={this.handleClick}>Generate</button>
        <p>{this.state.password}</p>
      </div>
    );
  }

}












export default App;
