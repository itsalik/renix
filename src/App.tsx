import Card from "../packages/Card";
import "./App.css";

const HeaderApp = () => {
  return (
    <div className="flex justify-between">
      <span>title</span>
      <span>options</span>
    </div>
  );
};
function App() {
  return (
    <>
      <h1 className="text-xlg">Renix 🎇</h1>
      <Card headerChildren={<HeaderApp />} className="mt-5"></Card>
    </>
  );
}

export default App;
