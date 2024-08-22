import "./App.css";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <h1>Slide-out Menu</h1>
        <div>
          <p>Some item to focus</p>
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
        </div>
      </main>
    </div>
  );
}

export default App;
