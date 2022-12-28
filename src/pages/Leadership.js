import React, { Component } from "react";

class Leadership extends Component {
  render() {
    return (
      <div>
        <div className="title-center"><h3 className="title">Leadership</h3></div>
        <ul className="yline">
          <ul className="xline">
            <div className="txtbox1">
              <div>
                <h4>Boston University Computer Science Ambassador</h4>
                <li style={{listStyle: "none"}}>Mentor</li>
                <li style={{listStyle: "none"}}>In progress</li>
                <li style={{listStyle: "none", marginTop: 20}}>explanation</li>
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
                <h4>Hour of Code</h4>
                <li style={{listStyle: "none"}}>Leader</li>
                <li style={{listStyle: "none"}}>December 2017 - January 2021</li>
                <li style={{listStyle: "none", marginTop: 20}}>explanation</li>
              </div>
            </div>
          </ul>
        </ul>
      </div>
    );
  }
}
export default Leadership;