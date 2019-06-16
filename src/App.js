import React from "react";
import "./index.css";
import Budget from "./components/budget";
import Add from "./components/add";
import List from "./components/list";

function App() {
  return (
    <div className="container">
      <header>
        <Budget />
      </header>
      <main>
        <Add />
        <List />
      </main>
      <footer>
        <div className="footer-copyright center-align">
          &copy; Created with React&Redux by{" "}
          <a href="https://www.safarali.pro/" target="_blank">
            SafarAli Safarov
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
