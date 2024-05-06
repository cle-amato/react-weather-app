import "./App.css";
import Search from "./Search";
import Weather from "./Weather";

export default function App() {
  return (
    <div>
      <div className="App">
        <div className="container">
          <Search />
          <Weather />
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/cle-amato/react-weather-app"
          rel="noreferrer"
          target="_blank"
        >
          Open source code
        </a>
        , by Clementina Amato
      </footer>
    </div>
  );
}
