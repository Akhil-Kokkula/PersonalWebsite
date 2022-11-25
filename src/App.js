import "./Styles.css";
import Navbar from "./Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
      <Router>
          <Navbar/>
          <Routes>
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/contact" component={Contact}/>
        </Routes> 
      </Router>
  );
}


export default App;
