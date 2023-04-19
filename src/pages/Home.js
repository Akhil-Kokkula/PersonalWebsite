import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import BlueUnderline from "./images/BlueUnderline.png"
import "./home.css";
import Java from "./images/Java.jpeg";
import Python from "./images/python.png";
import ReactJS from "./images/react.png";
import Flask from "./images/flask.png";
import HTML from "./images/Html.png";
import CSS from "./images/css.png";
import Database from "./images/Database.png";
import DataAnalysis from "./images/DataAnalysis.png";
import Profile from "./images/profile2.png";
import reactandnode from "./images/node-js_react-js.png";

class Home extends Component {
  render() {
    return (
    <div>
      <div className="container-home">
        <div className="text-zone">
            <h1 className="title"> Hello, <br /> I'm Akhil Kokkula <img className="cursor" style={{marginBottom: 15}}/></h1>
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
                <li><a href="mailto:kokkulaak@gmail.com"><FiMail size="1.5em" color="black"/></a></li>
            </ul>
        </div>
        <img src={Profile} className = "img-home" style={{width: "auto", height: 550, marginLeft: 750, marginTop: 30}}/>
      </div>
      {/* <div className="container-home">
        <div className="text-zone">
            <h1 className="title"> Hello, <br /> I'm Akhil Kokkula <img className="cursor" style={{marginBottom: 15}}/></h1>
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
      </div> */}
      {/* <div className="background"/> */}
      <div className="title-center"><h2 className="title">My Skills</h2><img src={BlueUnderline} style={{width:100, height: 5, marginTop: 0, marginBottom: 40}}></img></div>
      <ul className="yline2">
          <ul className="xline2">
            <div className="txtboxV2"><img src={Java} style = {{width: 180,height: 170, marginLeft: 40, marginTop: 15}}/><h4 style={{textAlign: "center", marginTop: 35, fontFamily: 'Helvetica', fontWeight:"bold"}}>Java</h4></div>
            <div className="txtboxV2"><img src={Python} style = {{width: 150, height: 150, marginLeft: 55, marginTop: 35}}/><h4 style={{textAlign: "center", marginTop: 35, fontFamily: 'Helvetica', fontWeight:"bold"}}>Python</h4></div>
            <div className="txtboxV2"><img src={reactandnode} style = {{width: 220, height: 130, marginLeft: 15, marginTop: 50}}/><h4 style={{textAlign: "center", marginTop: 35, fontFamily: 'Helvetica', fontWeight:"bold"}}>NodeJS and <br/> ReactJS</h4></div>
            <div className="txtboxV2"><img src={Flask} style = {{width: 160,height: 160, marginLeft: 45, marginTop: 30}}/><h4 style={{textAlign: "center", marginTop: 35, fontFamily: 'Helvetica', fontWeight:"bold"}}>Flask</h4></div>
          </ul>
          <ul className="xline2">
            <div className="txtboxV2"><img src={HTML} style = {{width: 180,height: 180, marginLeft: 35, marginTop: 15}}/><h4 style={{textAlign: "center", marginTop: 35, fontFamily: 'Helvetica', fontWeight:"bold"}}>HTML</h4></div>
            <div className="txtboxV2"><img src={CSS} style = {{width: 180,height: 180, marginLeft: 35, marginTop: 15}}/><h4 style={{textAlign: "center", marginTop: 35, fontFamily: 'Helvetica', fontWeight:"bold"}}>CSS</h4></div>
            <div className="txtboxV2"><img src={Database} style = {{width: 180,height: 180, marginLeft: 35, marginTop: 15}}/><h4 style={{textAlign: "center", marginTop: 15, fontFamily: 'Helvetica', fontWeight:"bold"}}>Database<br/> <span style={{fontSize: 18}}>(MySQL, SQLite, MongoDB)</span></h4></div>
            <div className="txtboxV2"><img src={DataAnalysis} style = {{width: 180,height: 180, marginLeft: 35, marginTop: 15}}/><h4 style={{textAlign: "center", marginTop: 15, fontFamily: 'Helvetica', fontWeight:"bold"}}>Data Analysis<br/><span style={{fontSize: 18}}>(SQL, KQL, R)</span></h4></div>
          </ul>
      </ul>
      <div style={{marginBottom: 80}}></div>
      {/* java, python, reactjs, flask, sqlite, data querying (sql, kql, r), HTML, CSS */}
    </div>
    
    );
  }
}
export default Home;