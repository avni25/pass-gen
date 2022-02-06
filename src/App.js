import logo from './logo.svg';
import './App.css';
import React from 'react';

const cb_numbers = "cb-numbers";
let cb_numbers_checked = false;
const cb_characters = "cb-characters";
let cb_characters_checked = false;


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
      length: 8
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  generatePassword(){   
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let alphabet_upper = alphabet.toUpperCase();
    let numbers = "0123456789";
    let characters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    let password = "";    
    let arr = [];

    arr = arr.concat(alphabet.split(""), alphabet_upper.split(""));
    if(cb_numbers_checked){
        arr = arr.concat(numbers.split(""));
    }
    
    if(cb_characters_checked){
        arr = arr.concat(characters.split(""));
    }

    for(let i = 0; i < this.state.length; i++){
      password += arr[Math.floor(Math.random() * arr.length)];
    }
    return password;
  }

  handleClick = () => {
    this.setState({
      password: this.generatePassword(),
      length: this.state.length
    });
  }

  handleInputChange(event) {
    this.setState({
      password: this.state.password,
      length: event.target.value
    });
  }

  handleChange = (e) =>{
    let isChecked = e.target.checked;
    let cbName = e.target.name;
    if(cbName === cb_numbers){
      cb_numbers_checked = isChecked;
    }else if(cbName === cb_characters){
      cb_characters_checked = isChecked;
    }
    console.log(isChecked +" "+ cbName);
  }

  render(){
    return (
      <div id="pass-gen">
        <h1>Password Generator</h1> 
        <div id="cb-group"> 
          <label> 
            <input type="checkbox" name={cb_numbers}
             defaultChecked={cb_numbers_checked} 
             onChange={(e)=>this.handleChange(e)}
             />
            include numbers
          </label>  
          <br />
          <label> 
            <input type="checkbox" name={cb_characters} 
            defaultChecked={cb_characters_checked}
            onChange={(e)=>this.handleChange(e)}
            />
            include special characters
          </label>  
          <br /> 
          <input type="text" id="length" placeholder="length" onChange={(e)=>this.handleInputChange(e)}/>
        </div>      
        <button onClick={this.handleClick}>Generate</button>
        <p>{this.state.password}</p>
      </div>
    );
  }

}












export default App;
