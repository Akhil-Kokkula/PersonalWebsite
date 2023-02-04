import React from 'react';
import "./Styles.css";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import "./pages/home.css";

export default function BottomBar() {
    return (
        <div className="bottom-bar">
            <div style={{}}>
                <div className='xline' style={{paddingTop: 30, marginLeft: 40}}>
                    <p>© Akhil Kokkula 2023</p>
                    <ul className="list-design2" style={{paddingLeft: 680}}>
                        <li><a href="//www.linkedin.com/in/kokkula-akhil"><FaLinkedin size="1.5em" color="black"/></a></li>
                        <li><a href="https://github.com/Akhil-Kokkula"><FaGithub size="1.5em" color="black"/></a></li>
                        <li><a href="//kokkulaak@gmail.com"><FiMail size="1.5em" color="black"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
