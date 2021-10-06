import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";

ReactDOM.render(<App />, document.getElementById("root"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="" className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Tailwind
        </a>
      </header>
    </div>
  );
}

export default App;
