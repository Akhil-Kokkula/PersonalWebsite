import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="title-center"><h3 className="title">Projects</h3></div>
        <ul className="yline">
          <ul className="xline">
            <div className="txtbox1">
              <div>
                <h4>RhettRides</h4>
                <li style={{listStyle: "none"}}>Boston University CleanTech Club</li>
                <li style={{listStyle: "none"}}>In progress</li>
                <li style={{listStyle: "none", marginTop: 20}}>Description: <br /> Tech stack: <br />  Contributions: </li>
              </div>
            </div>
            <div className="txtbox2">
              {/* <img src={MetaLogo} style={{ width: '550px', height: '400px'}}/> */}
            </div>
          </ul>
          <ul className="xline">
            <div className="txtbox1">
              {/* <img src={ExploreIntern} style={{ width: '550px', height: '400px'}}/> */}
            </div>
            <div className="txtbox2">
              <div>
                <h4>Lalmba Medical Info Project</h4>
                <li style={{listStyle: "none"}}>Boston University Hack4Impact Club</li>
                <li style={{listStyle: "none"}}>In progress</li>
                <li style={{listStyle: "none", marginTop: 20}}>Description: <br /> Tech stack: <br />  Contributions: </li>
              </div>
            </div>
          </ul>
          <ul className="xline">
            <div className="txtbox1">
              <div>
                <h4>Timer Deck Application</h4>
                <li style={{listStyle: "none"}}>Android Mobile Application</li>
                <li style={{listStyle: "none"}}>December 2021 - January 2022</li>
                <li style={{listStyle: "none", marginTop: 20}}>Description: <br /> Tech stack: <br />  Contributions: </li>
              </div>
            </div>
            <div className="txtbox2">
              {/* <img src={MetaLogo} style={{ width: '550px', height: '400px'}}/> */}
            </div>
          </ul>
          <ul className="xline">
            <div className="txtbox1">
              {/* <img src={ExploreIntern} style={{ width: '550px', height: '400px'}}/> */}
            </div>
            <div className="txtbox2">
              <div>
                <h4>To Do List Application</h4>
                <li style={{listStyle: "none"}}>JavaFX Application</li>
                <li style={{listStyle: "none"}}>June 2020</li>
                <li style={{listStyle: "none", marginTop: 20}}>Description: <br /> Tech stack: <br />  Contributions: </li>
              </div>
            </div>
          </ul>
        </ul>
        
      </div>
    );
  }
}

export default Projects;