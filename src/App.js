import logo from "./logo.svg";
import "./App.css";
import { dividerClasses } from "@mui/material";
import ModuleColumn from "./components/ModuleColumn";

function App() {
  return (
    <>
      <div className="container mt-5">
        <ModuleColumn />
      </div>
      <div>Dashboard</div>
    </>
  );
}

export default App;
