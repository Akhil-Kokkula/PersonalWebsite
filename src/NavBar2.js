import {NavbarData} from "./NavbarData";
import "./navbar.css";
import { Component } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Leadership from "./pages/Leadership";
import { Navbar, Nav } from "react-bootstrap";

class NavBar2 extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav className="navbarItems">
                        <h1><a href="/" className="nav-links-unique">Akhil Kokkula</a></h1>
                        <ul className="navMenu">
                            {NavbarData.map((item, index) => {
                                return (
                                        <li key = {index}>
                                            <a href={item.url} className={item.cName}>{item.title}</a>
                                        </li> 
                                )
                            })}
                        </ul>
                    </nav>
                </div>
                <div>
                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/experience" element={<Experience/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/leadership" element={<Leadership/>}/>
                    </Routes> 
                </div>
                
            </div>
            
        );
    }
        
}

export default NavBar2;
