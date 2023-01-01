import React, { Component } from "react";
import BlueUnderlineDrawn from "./images/BlueUnderlineDrawn.png";
import BlueUnderline from "./images/BlueUnderline.png"
import "./home.css";

class About extends Component {
  render() {
    return (
      <div>
       <div className="container-about">
          <div className="text-zone2">
              <h2 className="title" style = {{marginTop: 20}}> About Me </h2><img src={BlueUnderline} style={{width:90, height: 5, marginTop: 0, marginBottom: 10}}/>
              <ul className="list-design-para">
                  <li>Hello, I'm Akhil Kokkula, and I'm currently studying Computer Science and minoring in Business Management and Administration at Boston University. </li>
                  <li>The constant new innovations in the tech field combined with the impact it can have on the lives of people and on the world's problems really excites me. I'm also interested in driving impact with technology, so I love to read about case studies on businesses and stories of startups. </li>
                  <li>I love to create software products that are impactful, so I'm involved in developing applications individually and as part of clubs. I'm part of the CleanTech club at my college, where I am a software developer for a ride sharing web app for students in our college. Additionally, I'm part of the Hack4Impact club, and we're devloping a product that will keep track of patient medical info for rural communities in Africa. Individually, I have participated in hackathons and have created a mobile application that helps users complete their daily routines. I particularly enjoy the problem solving challenges and the collaboartive environment during the project building journey. Interning at Microsoft in the summer of 2022 on the Azure SDK team was a great learning opprotunity on the process of developing software in industry that has real world impact on customers. </li>
                  <li>My love for developing software products and excitement for driving real world impact motivates me to continue building software applications. </li>
                  <li>I love challenges, learning new skills, and creating a postive impact on the world.</li>
              </ul>
          </div>
        </div>
        <div className="profile"/>
      </div>
      
    );
  }
}

export default About;