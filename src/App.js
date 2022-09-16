import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <footer> This app was coded by Alice Yang and is <a href="https://github.com/Ayang471/react-project/tree/main" >open-sourced on GitHub</a></footer>
    </div>
  );
}

