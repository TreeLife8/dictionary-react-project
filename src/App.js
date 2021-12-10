import logo from "./logo.png";
import "./App.css";
import ShapeDivider from "./ShapeDivider.js";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShapeDivider />
        <a href="/">
          <h1>Dictionary</h1>
        </a>
        <Search defaultKey={"banana"} />
      </header>
      <footer>
        <hr className="divider mb-4" />
        Coded by Regina Maher and is{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/regina-maher/dictionary-react-project"
        >
          open-source on GitHub
        </a>
      </footer>
    </div>
  );
}
