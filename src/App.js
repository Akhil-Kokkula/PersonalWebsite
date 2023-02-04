import "./Styles.css";
import NavBar2 from "./NavBar2";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Leadership";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BottomBar from "./BottomBar";

function App() {
  return (
    <div className="center">
      <NavBar2 />
      <BottomBar/>
    </div>
    
  );
}


export default App;
