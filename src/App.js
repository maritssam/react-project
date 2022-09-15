import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <footer> This app was coded by Alice Yang and is <a href="/" >open-sourced on GitHub</a></footer>
    </div>
  );
}

