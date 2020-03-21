import React from "react";

// STYLES
import "./Header.css";

// COMPONENTS
import IdPhoto from "../IdPhoto";
import ShortPresentation from "../ShortPresentation";
import IdInformations from "../IdInformations";

const Header = () => {
  return (
    <header className="aboutMe">
      <div className="wrapperA">
        <IdPhoto />
      </div>
      <div className="wrapperB">
        <h1 className="title">Développeur web/mobile</h1>
        <div className="wrapperC">
          <IdInformations />
          <ShortPresentation>
            Passionné de code, je désire intégrer une équipe dynamique et
            travailler sur des projets qui ont du sens. Je souhaite apporter mon
            sérieux et ma polyvalence à vos projets de développement..
          </ShortPresentation>
        </div>
      </div>
    </header>
  );
};

export default Header;
