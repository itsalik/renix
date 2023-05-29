import Badge from "../packages/Badge";
import "./App.css";


function App() {
  return (
    <>
      <h1 className="text-xlg">Renix 🎇</h1>
      <Badge value={50} type="warning" max={10}  className="mt-6">Hello</Badge>
    </>
  );
}

export default App;
