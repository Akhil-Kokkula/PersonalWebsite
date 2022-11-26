import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./home.css";

class Home extends Component {
  render() {
    return (
    <div className="page" style={{backgroundColor:'#e6f4ff'}}>
      <div className="container-home">
        <div className="text-zone">
            <h1 className="title"> Hello, <br /> I'm Akhil Kokkula <br /> </h1>
            <ul className="list-design">
                <li>👨‍💻 Software Developer</li>
                <li>💼 Incoming SWE Intern @ Microsoft</li>
                <li>📚 Computer Science @ Boston University</li>
            </ul>
            <div className="button-container">
                <Button variant="primary" href="/about" size="20px">About Me</Button>{' '}
            </div>

            <ul className="list-design2">
                <li><a href="//www.linkedin.com/in/kokkula-akhil"><FaLinkedin size="1.5em" color="black"/></a></li>
                <li><a href="https://github.com/Akhil-Kokkula"><FaGithub size="1.5em" color="black"/></a></li>
                <li><a href="//kokkulaak@gmail.com"><FiMail size="1.5em" color="black"/></a></li>
            </ul>
        </div>
      </div>
      </div>
    );
  }
}
export default Home;