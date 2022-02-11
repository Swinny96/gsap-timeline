import Sections from "./components/Sections";
import Timeline from "./components/Timeline";
import "./Timeline.scss";

function App() {
  return (
    <div className="App">
      <Timeline />
      <main>
        <Sections />
      </main>
    </div>
  );
}

export default App;
