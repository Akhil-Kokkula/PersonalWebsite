import React, { Component } from "react";
import BlueUnderlineDrawn from "./images/BlueUnderlineDrawn.png";
import BlueUnderline from "./images/BlueUnderline.png";
import RhettRides from "./images/RhettRides.png";
import Lalmba from "./images/Lalmba.png";
import AndroidApp from "./images/AndroidApp.mp4";
import ToDoList from "./images/ToDoList.mp4";
import Arrow from "./images/arrow.png";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="title-center"><h2 className="title">Projects</h2><img src={BlueUnderline} style={{width:100, height: 5, marginTop: 0}}></img></div>
        <ul className="yline">
          <ul className="xline">
            <div className="txtbox1">
              <div>
                <h4 style={{marginTop: 20, fontFamily: 'Helvetica', fontWeight: "bold"}}>RhettRides</h4>
                <li style={{listStyle: "none"}}>Boston University CleanTech Club</li>
                <li style={{listStyle: "none", fontFamily: 'Helvetica', marginTop: 5, fontSize: 16, fontStyle: "italic"}}>January 2022 - Current</li>
                <li style={{listStyle: "none", fontFamily: 'Arial', marginTop: 15, fontSize: 17.3, fontWeight: 300}}><p> <span style={{fontWeight: 'bold'}}>Description:</span> Ridesharing web application for Boston University students to promote carpooling <br /> <span style={{fontWeight: 'bold'}}>Tech stack:</span> Flask, SQLite, HTML, CSS, JS <br />  <span style={{fontWeight: 'bold'}}>Contributions:</span> storage and retrieval of profile pictures, Gmail API to send emails, designed UI for displaying availble trips</p></li>
              </div>
            </div>
            <div className="txtbox2">
              <img src={RhettRides} style={{ width: '550px', height: '350px', borderRadius: '10px', boxShadow: '15px 15px 20px 10px #e6e6e6'}}/>
            </div>
          </ul>
          <ul className="xline">
            <div className="txtbox1">
              <img src={Lalmba} style={{ width: '550px', height: '350px', borderRadius: '10px', boxShadow: '15px 15px 20px 10px #e6e6e6'}}/>
            </div>
            <div className="txtbox2">
              <div>
                <h4 style={{marginTop: 20, fontFamily: 'Helvetica', fontWeight: "bold"}}>Lalmba Medical Info Project</h4>
                <li style={{listStyle: "none"}}>Boston University Hack4Impact Club</li>
                <li style={{listStyle: "none", fontFamily: 'Helvetica', marginTop: 5, fontSize: 16, fontStyle: "italic"}}>January 2023 - Current</li>
                <li style={{listStyle: "none", marginTop: 20, fontFamily: 'Arial', marginTop: 15, fontSize: 17.3, fontWeight: 300}}><span style={{fontWeight: 'bold'}}>Description:</span> Keep track of patient medical info for rural communities in Africa <br /> <span style={{fontWeight: 'bold'}}>Tech stack:</span> React Native <br />  <span style={{fontWeight: 'bold'}}>Contributions:</span> In progress</li>
              </div>
            </div>
          </ul>
          <ul className="xline">
            <div className="txtbox1">
              <div>
                <h4 style={{marginTop: 20, fontFamily: 'Helvetica', fontWeight: "bold"}}>Timer Deck Application</h4>
                <li style={{listStyle: "none"}}>Android Mobile Application</li>
                <li style={{listStyle: "none", fontFamily: 'Helvetica', marginTop: 5, fontSize: 16, fontStyle: "italic"}}>December 2021 - January 2022</li>
                <li style={{listStyle: "none", marginTop: 20, fontFamily: 'Arial', marginTop: 15, fontSize: 17.3, fontWeight: 300}}><span style={{fontWeight: 'bold'}}>Description:</span> Users create timer routines and the app guides users to completion of their routine <br /> <span style={{fontWeight: 'bold'}}>Tech stack:</span> Android App (Java), SQLite, XML <br /> <span style={{fontWeight: 'bold'}}>Features Built: </span> Create a timer set. Add cards within each timer set that contains infromation such as the repeat number and time for each exercise. Play the timer set to execute the cards of the timer set.</li>
                <li style = {{textAlign: "right", position: "absolute", bottom: 60, right: 0, fontFamily: 'Helvetica', fontSize: 17, color: "#3399ff"}}><a href = "https://github.com/Akhil-Kokkula/TimerApp" style={{textDecoration: "none"}}>View on GitHub</a> <img src={Arrow} style = {{width: 25, height: 14, marginLeft: 5}}/></li>
              </div>
            </div>
            <div className="txtbox2">
              <img src={AndroidApp} style={{ width: '550px', height: '350px', borderRadius: '10px', boxShadow: '10px 10px 5px 5px #e6e6e6'}}/>
            </div>
          </ul>
          <ul className="xline">
            <div className="txtbox1">
              <img src={ToDoList} style={{ width: '550px', height: '350px', borderRadius: '10px', boxShadow: '10px 10px 5px 5px #e6e6e6'}}/>
            </div>
            <div className="txtbox2">
              <div>
                <h4 style={{marginTop: 20, fontFamily: 'Helvetica', fontWeight: "bold"}}>To Do List Application</h4>
                <li style={{listStyle: "none"}}>JavaFX Application</li>
                <li style={{listStyle: "none", fontFamily: 'Helvetica', marginTop: 5, fontSize: 16, fontStyle: "italic"}}>June 2020</li>
                <li style={{listStyle: "none", marginTop: 20, fontFamily: 'Arial', marginTop: 15, fontSize: 17.3, fontWeight: 300}}><span style={{fontWeight: 'bold'}}>Description:</span> Add different categories for tasks, and tasks are ordered based on importance and date <br /> <span style={{fontWeight: 'bold'}}>Tech stack:</span> JavaFX <br /> <span style={{fontWeight: 'bold'}}>Features Built: </span> Add different categories for tasks, and tasks are ordered based on importance and date.</li>
                <li style = {{textAlign: "right", position: "absolute", bottom: 60, right: 0, fontFamily: 'Helvetica', fontSize: 17, color: "#3399ff"}}><a href = "https://github.com/Akhil-Kokkula/ToDoList" style={{textDecoration: "none"}}>View on GitHub</a> <img src={Arrow} style = {{width: 25, height: 14, marginLeft: 5}}/></li>
              </div>
            </div>
          </ul>
        </ul>
        <div className="banner"/>
        
      </div>
    );
  }
}

export default Projects;