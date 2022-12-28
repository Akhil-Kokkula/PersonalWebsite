import React, { Component } from "react";
import MetaLogo from "./images/Meta-Logo.png";
import ExploreIntern from "./images/ExploreIntern.jpeg"

class Experience extends Component {
  render() {
    return (
      <div>
        <div className="title-center"><h3 className="title">Experience</h3></div>
        <ul className="yline">
          <ul className="xline">
            <div className="txtbox1">
              <div style={{marginTop: 100}}>
                <h4>Meta Above and Beyond Computer Science Program</h4>
                <li style={{listStyle: "none", marginTop: 20}}>September 2022 - October 2022</li>
              </div>
            </div>
            <div className="txtbox2">
              <img src={MetaLogo} style={{ width: '550px', height: '400px'}}/>
            </div>
          </ul>
          <ul className="xline">
            <div className="txtbox1">
              <img src={ExploreIntern} style={{ width: '550px', height: '400px'}}/>
            </div>
            <div className="txtbox2">
              <div style={{marginTop: 100}}>
                <h4>Microsoft Explore Intern - Developer Division</h4>
                <li style={{listStyle: "none", marginTop: 20}}>May 2022 - August 2022</li>
              </div>
            </div>
          </ul>
        </ul>
        
      </div>
    );
  }
}
export default Experience;