import "./App.css";
import logo from "../public/vite.svg";
import { Button, Line , Avatar } from "renix-pack";

/**
 * // type="warning" // type?: "primary" | "success" | "info" | "warning" | "danger";
 *  size="small" color="red" type="circle" border
 */
function App() {
  return (
    <>
      <h1 className="text-xlg">Renix 🎇</h1>
      <Button text="click me" type="danger" size="large"  className="mt-5" onClick={() => alert('clicked')} />
      <Line className="mt-5" type="dashed" />
      <Avatar className="mt-5" rounded color="gray" size="small" type="circle"  img={logo} />
    </>
  );
}

export default App;
