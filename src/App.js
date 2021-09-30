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
        Coded by <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}
