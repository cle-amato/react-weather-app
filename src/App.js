import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div>
      <div className="App">
        <div className="container">
          <Weather defaultCity="Rome" />
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/cle-amato/react-weather-app"
          rel="noreferrer noopener"
          target="_blank"
        >
          Open source code
        </a>
        , by Clementina Amato
      </footer>
    </div>
  );
}
