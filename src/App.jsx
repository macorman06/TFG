import React, { useState } from "react";
import Header from "./components/common/Header";
import Body from "./components/common/Body";
import Footer from "./components/common/Footer";

function App() {
  const [view, setView] = useState("welcome");
  const [optimizationData, setOptimizationData] = useState(null);

  return (
    <div className="flex flex-col flex-1 overflow-y-auto">
      <Header setView={setView} />
      <Body 
        view={view} 
        setView={setView} 
        optimizationData={optimizationData}
        setOptimizationData={setOptimizationData}
      />
      <Footer />
    </div>
  );
}

export default App;