import {NavbarData} from "./NavbarData";
import "./navbar.css";

export default function Navbar() {
        return (
            <nav className="navbarItems">
                <h1><a href="/" className="nav-links-unique">Akhil Kokkula</a></h1>
                <ul className="navMenu">
                    {NavbarData.map((item, index) => {
                        return (
                                <li key = {index}>
                                    <a href={item.url} className={item.cName}>{item.title}</a>
                                </li> 
                        )
                    })}
                </ul>
            </nav>
        );
}
