import React from "react";
import Perfil from "../assets/perfil.png";

function Header() {
  return (
    <div id="header">
      <h1 id="titulo">facebook.</h1>
      <div id="perfil">
        <p>Meu perfil</p>
        <img id="icon_perfil" src={Perfil}></img>
      </div>
      <div className="clear"></div>
    </div>
  );
}
export default Header;
