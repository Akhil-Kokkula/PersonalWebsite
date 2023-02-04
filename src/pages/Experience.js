import React, { Component } from "react";
import MetaLogo from "./images/Meta-logo.jpeg";
import ExploreIntern from "./images/ExploreIntern.jpeg";
import BlueUnderlineDrawn from "./images/BlueUnderlineDrawn.png";
import BlueUnderline from "./images/BlueUnderline.png"

class Experience extends Component {
  render() {
    return (
      <div>
        <div className="title-center"><h2 className="title">Experience</h2><img src={BlueUnderline} style={{width:125, height: 5, marginBottom: 20}}/></div>
        <ul className="yline">
          <ul className="xline">
            <div className="txtbox1">
              <div>
                <h4 style={{marginTop: 20, fontFamily: 'Helvetica', fontWeight: "bold"}}>Meta Above and Beyond Computer Science Program</h4>
                <li style={{listStyle: "none", fontFamily: 'Helvetica', marginTop: 5, fontSize: 16, fontStyle: "italic"}}>September 2022 - October 2022</li>
                <li style={{listStyle: "none", fontFamily: 'Arial', marginTop: 15, fontSize: 18, fontWeight: 300}}>Attended workshops over 9 weeks led by Meta software engineers and worked with peers to practice applied problem-solving with key data structures and algorithms to prepare for interviews and develop technical skills</li>
              </div>
            </div>
            <div className="txtbox2">
              <img src={MetaLogo} style={{ width: '550px', height: '350px', borderRadius: '10px', boxShadow: '0 0 20px 2px #f2f2f2'}}/>
            </div>
          </ul>
          <ul className="xline">
            <div className="txtbox1">
              <img src={ExploreIntern} style={{ width: '550px', height: '400px', borderRadius: 10, boxShadow: '10px 10px 5px 5px #e6e6e6'}}/>
            </div>
            <div className="txtbox2">
              <div>
                <h4 style={{marginTop: 20, fontFamily: 'Helvetica', fontWeight: "bold"}}>Microsoft Explore Intern - Developer Division</h4>
                <li style={{listStyle: "none", fontFamily: 'Helvetica', marginTop: 5, fontSize: 16, fontStyle: "italic"}}>May 2022 - August 2022</li>
                <li style={{listStyle: "none", fontFamily: 'Arial', marginTop: 15, fontSize: 18, fontWeight: 300}}>Developed pipeline health dashboard for the Azure SDK team to increase pipeline health visibility and confidence in releases. Designed prototype in Figma, uploaded blobs on pipeline health information, ingested and queried the data using KQL. Worked in C# and .NET framework to write blobs and implemented features that incentivize the ~80 developers on the team to maintain pipeline health.</li>
              </div>
            </div>
          </ul>
        </ul>
        
      </div>
    );
  }
}
export default Experience;