import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  // object
  const personName = {
    first: 'inok',
    last: 'reginold'
  }
  // array
  const nameList = [
    {
      first: "AAA",
      last: "aaa"
    },
    {
      first: "BBB",
      last: "bbb"
    }
  ]
  return (
    <div className="App">
      <Greet name="GBU" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
