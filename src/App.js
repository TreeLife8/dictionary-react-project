import logo from "./logo.png";
import "./App.css";
import ShapeDivider from "./ShapeDivider.js";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShapeDivider />
        <h1>Dictionary</h1>
        <Search />
      </header>
      <footer>
        <hr className="divider mb-4" />
        Coded by <img src={logo} className="App-logo" alt="logo" />
        and is{" "}
        <a href="https://github.com/TreeLife8/dictionary-react-project">
          open-source on GitHub
        </a>
      </footer>
    </div>
  );
}
