import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Welcome from "../../pages/Welcome";
import Tool from "../../pages/Tool";
import Info from "../../pages/Info";
import Settings from "../../pages/Settings";
import Explain from "../../pages/Explain";

function Body({ view, setView }) {
  return (
    <main className="body-content">
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {view === "welcome" && <Welcome setView={setView} />}
          {view === "tool" && <Tool />}
          {view === "info" && <Info />}
          {view === "settings" && <Settings />}
          {view === "explain" && <Explain />}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

export default Body;
