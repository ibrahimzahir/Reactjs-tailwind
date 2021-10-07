import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";

ReactDOM.render(<App />, document.getElementById("root"));

function App() {
  return (
    <div className="App">
      <header className="shadow-sm p-4">ReactJS with TailwindCSS</header>
    </div>
  );
}

export default App;
