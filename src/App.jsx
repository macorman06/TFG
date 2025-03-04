import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [view, setView] = useState("welcome");

  return (
    <div className="app-container">
      <Header setView={setView} />
      <Body view={view} setView={setView}/>
      <Footer />
    </div>
  );
}

export default App;
