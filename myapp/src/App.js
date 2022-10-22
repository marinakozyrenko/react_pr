// import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
  <div className="App">
    <header className="App-header">
      My First React App
      <h3 className='Hello'> Hello, {props.name}</h3>
    </header>
  </div>
);
}

export default App;
