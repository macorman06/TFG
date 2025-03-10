import React, { useState } from "react";
import Header from "./components/common/Header";
import Body from "./components/common/Body";
import Footer from "./components/common/Footer";

function App() {
  const [view, setView] = useState("welcome");

  return (
    <div className="flex flex-col flex-1 overflow-y-auto	">
      <Header setView={setView} />
      <Body view={view} setView={setView} />
      <Footer />
    </div>
  );
}

export default App;
