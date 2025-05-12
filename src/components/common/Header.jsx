import React from "react";
import { Button } from "primereact/button";

function Header({ setView }) {
  return (
    <header
      className="
        flex
        flex-row
        items-center
        justify-between
        bg-[#be1515]
        text-white
        text-center
        py-[10px]
        px-[25px]
      "
    >
      <img
        src="/white_logo.png"
        alt="Logo URJC"
        className="h-10 ml-[15px]"
      />
      <h1
        className="cursor-pointer font-extrabold text-[1.7rem] "
        onClick={() => setView("welcome")}
      >
        HARSA
      </h1>
      <Button label="Ajustes" onClick={() => setView("settings")} />
    </header>
  );
}

export default Header;
