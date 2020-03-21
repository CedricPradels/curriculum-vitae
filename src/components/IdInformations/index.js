import React from "react";

// STYLES
import "./IdInformations.css";

// COMPONENTS

const IdInformations = () => {
  return (
    <ul className="idInformations">
      <li className="name">Cédric Pradels</li>
      <li className="adress">
        12 rue du comté
        <br />
        78 660 Ablis
      </li>
      <li className="phone">06 71 37 02 67</li>
      <li className="mail">cedric.pradels@gmail.com</li>
    </ul>
  );
};

export default IdInformations;
