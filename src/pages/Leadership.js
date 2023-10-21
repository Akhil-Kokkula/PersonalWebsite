import React, { Component } from "react";
import BlueUnderlineDrawn from "./images/BlueUnderlineDrawn.png";
import BlueUnderline from "./images/BlueUnderline.png";
import BUCSA from "./images/BUCSA_logo.png";
import HourOfCode from "./images/HourOfCode.jpeg";
import Hack4Impact from "./images/hack4impact2.jpeg";
import GitHubLogo from "./images/GithubLogo.png";

class Leadership extends Component {
  render() {
    return (
      <div>
        <div className="title-center"><h2 className="title">Leadership</h2><img src={BlueUnderline} style={{width:125, height: 5, marginBottom: 20}}></img></div>
        <ul className="yline">
        <ul className="xline">
            <div className="txtbox1">
              <div>
                <h4 style={{marginTop: 20, fontFamily: 'Helvetica', fontWeight: "bold"}}>GitHub Campus Expert</h4>
                <li style={{listStyle: "none"}}><a href="https://githubcampus.expert/Akhil-Kokkula/">Campus Expert</a></li>
                <li style={{listStyle: "none", fontFamily: 'Helvetica', marginTop: 5, fontSize: 16, fontStyle: "italic"}}>May 2023 - Current</li>
                <li style={{listStyle: "none", marginTop: 20, fontFamily: 'Arial', marginTop: 15, fontSize: 17.3, fontWeight: 300}}>Completed the 6-week GitHub Campus Experts training to lead technical community development on campus. I will be organizing events on campus to help students network with peers, develop technical skills, and build software projects. </li>
              </div>
            </div>
            <div className="txtbox2">
              <img src={GitHubLogo} style={{ width: '550px', height: '350px', borderRadius: '10px', boxShadow: '0 0 20px 2px #f2f2f2'}}/>
            </div>
          </ul>
          <ul className="xline">
            <div className="txtbox1">
              <img src={Hack4Impact} style={{ width: '550px', height: '350px', borderRadius: '10px', boxShadow: '10px 10px 5px 5px #e6e6e6'}}/>  
            </div>
            <div className="txtbox2">
              <div>
                <h4 style={{marginTop: 20, fontFamily: 'Helvetica', fontWeight: "bold"}}>Hack4Impact</h4>
                <li style={{listStyle: "none"}}>Project Sourcer, Impact Team Manager</li>
                <li style={{listStyle: "none", fontFamily: 'Helvetica', marginTop: 5, fontSize: 16, fontStyle: "italic"}}>January 2023 - Present</li>
                <li style={{listStyle: "none", marginTop: 20, fontFamily: 'Arial', marginTop: 15, fontSize: 17.3, fontWeight: 300}}>I am part of the e-board for our Hack4Impact BU chapter. We connect with local non-profit organizations in the Boston area and develop software products for them. As the project sourcer for this organization, I sourced 4 projects helpful for nonprofits and maintained relations with them to drive the projects. As the Impact Team Manager, I recruited 20 students to work on the software projects for nonprofits, and I am currently communicating with clients and teams to lead the progress for 3 of the projects. </li>
              </div>
            </div>
          </ul>
          <ul className="xline">
            <div className="txtbox1">
              <div>
                <h4 style={{marginTop: 20, fontFamily: 'Helvetica', fontWeight: "bold"}}>Boston University Computer Science Ambassador</h4>
                <li style={{listStyle: "none"}}>Mentor</li>
                <li style={{listStyle: "none", fontFamily: 'Helvetica', marginTop: 5, fontSize: 16, fontStyle: "italic"}}>February 2022 - January 2023</li>
                <li style={{listStyle: "none", marginTop: 20, fontFamily: 'Arial', marginTop: 15, fontSize: 17.3, fontWeight: 300}}>Maintaining the organization's website and direct meetings with matched mentees to provide guidance. Building a stronger Computer Science community by guiding freshmen who are pursuing Computer Science. Have attended trainings on professional development, guiding mentees, and providing technical resources to others.</li>
              </div>
            </div>
            <div className="txtbox2">
              <img src={BUCSA} style={{ width: '550px', height: '350px', borderRadius: '10px', boxShadow: '10px 10px 5px 5px #e6e6e6'}}/>
            </div>
          </ul>
          <ul className="xline">
            <div className="txtbox1">
              <img src={HourOfCode} style={{ width: '550px', height: '350px', borderRadius: '10px', boxShadow: '10px 10px 5px 5px #e6e6e6'}}/>  
            </div>
            <div className="txtbox2">
              <div>
                <h4 style={{marginTop: 20, fontFamily: 'Helvetica', fontWeight: "bold"}}>Hour of Code</h4>
                <li style={{listStyle: "none"}}>Leader</li>
                <li style={{listStyle: "none", fontFamily: 'Helvetica', marginTop: 5, fontSize: 16, fontStyle: "italic"}}>December 2017 - January 2021</li>
                <li style={{listStyle: "none", marginTop: 20, fontFamily: 'Arial', marginTop: 15, fontSize: 17.3, fontWeight: 300}}>Introduced programming to students in my local community through coding activities and recruited volunteers and students to the programs.</li>
              </div>
            </div>
          </ul>
        </ul>
      </div>
    );
  }
}
export default Leadership;