import React from "react";
import Welcome from "./Welcome";
import Tool from "./Tool";
import Info from "./Info";
import Settings from "./Settings";
import Explain from "./Explain";

function Body({ view, setView }) { // Asegurar que Body recibe setView
  return (
    <main className="body-content">
      {view === "welcome" && <Welcome setView={setView} />} {/* PASAMOS setView */}
      {view === "tool" && <Tool />}
      {view === "info" && <Info />}
      {view === "settings" && <Settings />}
      {view === "explain" && <Explain />}
    </main>
  );
}

export default Body;
