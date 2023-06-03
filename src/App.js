import "./App.css";
import Header from "./app/components/header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Header />
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
