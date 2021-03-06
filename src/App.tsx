import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';

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
      {/* <Greet name="GBU" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Children are here</Heading>
      <Oscar><Heading>passing Child componets</Heading></Oscar>
      <Greet name="optional types" isLoggedIn={true} /> */}
      <Button handleClick={(event, id) => console.log('Button clicked', event, id)}></Button>
      <Input value='' handleChange={(event) => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
    </div>
  );
}

export default App;
