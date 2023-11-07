import React from "react";

const Header = () => {
  return (
    <header className="mainHeader flex fixed">
      <div className="homeBox hidden">
        <a className="homeLink navLink" href="#hero">
          FJP
        </a>
      </div>
      <ul className="navList flex">
        <li className="navListItem flex">
          <a className="navLink" href="#hero">
            Projects
          </a>
        </li>
        <li className="navListItem flex">
          <a className="navLink" href="#hero">
            About
          </a>
        </li>
        <li className="navListItem flex">
          <a className="navLink" href="#hero">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
