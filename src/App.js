import logo from "./logo.png";
import "./App.css";
import ShapeDivider from "./ShapeDivider.js";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShapeDivider />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
