import logo from './logo.svg';
import {Greeting} from './Greeting'
import {PeopleList} from './PeopleList'
import './App.css';

const people =[
  {
    name: 'John',
    age: 40,
    hairColor: 'brown'
  },
  {
    name: 'Helga',
    age: 80,
    hairColor: 'blonde'
  },
  {
    name: 'Ramiro',
    age: 10,
    hairColor: 'black'
  }
];


function App() {
  const displayAlert = () =>{
    alert('Hello!');
  };
  return (
    <div className="App">
      <header className="App-header">
        <p style={{color: 'red', fontSize: '96px'}}>Big Red Text!</p>
        <Greeting name="Shaun" numberOfMessages={100} />
        <PeopleList people={people} />
        <button onClick= {() => {alert('Hello world!');}}>Click Me!</button>     
        <p>
          This is a PoC!
        </p>        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
