import React from "react";

function Header({ setView }) {
  return (
    <header className="header">
      <img src="/white_logo.png" alt="Logo URJC" className="header-logo" />
      <h1 onClick={() => setView("welcome")}>HARSA</h1>
      <button onClick={() => setView("settings")} className="button">
        Ajustes
      </button>
    </header>
  );
}

export default Header;
