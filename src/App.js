import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Jose" />
      </div>
      <footer> This app was coded by maarti medina and is <a href="https://github.com/Ayang471/react-project/tree/main" target="_blank" rel="noreferrer">open-sourced on GitHub</a>
        and hosted on <a href="https://glowing-bonbon-bc9d7c.netlify.app/" target="_blank" rel="noreferrer"> Netlify.</a></footer>
    </div>
  );
}

