import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'

function App() {
  return (
    <div className="App">
 <Message></Message>
      {/* <Greet name="Bruce" heroName="Batman">
        <p>this is children</p>
      </Greet>
      <Greet name="Clcrk" heroName="Superman">
        <button>button</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder womon"></Greet>
      <Welcome name="Bruce" heroName="Batman">
        </Welcome> 
        <Welcome name="Clcrk" heroName="Superman"></Welcome>
        <Welcome  name="Diana" heroName="Wonder womon"></Welcome>
      <Hello></Hello> */}
    </div>
  );
}

export default App;
