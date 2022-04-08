import logo from './nmp.svg';
import './App.css';
 console.log("hello")
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome to No Maswabi Prints 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          New Releases 
        </a>
      </header>
    </div>
  );
}

export default App;
