import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Welcome from "./Welcome";
import Tool from "./Tool";
import Info from "./Info";
import Settings from "./Settings";
import Explain from "./Explain";

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
