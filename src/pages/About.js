import React, { Component } from "react";
import BlueUnderlineDrawn from "./images/BlueUnderlineDrawn.png";
import BlueUnderline from "./images/BlueUnderline.png"
import "./home.css";
import sideProfile from "./images/sideProfile.png";

class About extends Component {
  render() {
    return (
      <div>
       <div className="container-about">
          <div className="text-zone2">
              <h2 className="title" style = {{marginTop: 60}}> About Me </h2><img src={BlueUnderline} style={{width:100, height: 5, marginTop: 0, marginBottom: 10}}/>
              <ul className="list-design-para" style={{marginTop: 30}}>
                  <li>Hello, I'm Akhil Kokkula. I'm currently studying Computer Science and minoring in Business Management and Administration at Boston University. </li>
                  <li>I'm excited about new innovations in the tech field and the impact tech has on people's lives and the world. I'm also interested in driving impact with technology, so I enjoy listening to entreprenuerial podcasts and reading the latest stories on TechCruch about startups and businesses. </li>
                  <li>I am passionate about creating software products that are impactful, so I'm constantly developing applications individually and as part of the organizations that I am in. I'm part of the CleanTech club at my college working on a ride sharing web app for students on campus. I'm also part of the Hack4Impact club, where we deliver software products for nonprofit organizations in the Boston area. Individually, I have participated in hackathons and worked on a mobile application that helps users complete their daily routines. The problem solving challenges and the collaboartive environment during the project development journey truly excites me. </li>
                  <li><b>I love challenges, learning new skills, and creating a positive impact on the world!</b></li>
              </ul>
          </div>
        </div>
          <img src={sideProfile} style ={{width: "auto", height: 500, marginLeft: 900, marginTop: 120}}/>
          <div style={{marginBottom: 200}}></div>
      </div>
      
    );
  }
}

export default About;