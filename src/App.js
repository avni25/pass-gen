import logo from './logo.svg';
import './App.css';
import React from 'react';
import { generatePassword } from './algorithms/pass';
import  {PasswordGenerator}  from './components/pg';

function App() {
  return (
    <div className="App">
      <PasswordGenerator />
    </div>
  );
}



export default App;
