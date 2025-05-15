import React, { useState } from "react";
import { FaUpload, FaCog, FaChartBar, FaBook, FaClipboardList, FaLightbulb, FaInfo, FaHammer } from "react-icons/fa";
import Card from "../components/CardWelcome";
import OptiDaysSelector from "../components/dialogs/OptiDaysSelector"; 
import LoadData from "../components/dialogs/LoadData"; 

function Welcome({ setView, setOptimizationData, optimizationData }) {
  const [showPopup, setShowPopup] = useState(null);

  return (
    <div className="flex flex-col gap-3 p-[30px] max-w-[1200px] mx-auto">
      <h2>Bienvenido a HARSA</h2>
      <p className="intro-text">
        Esta web ha sido creada para presentar el <strong>Trabajo de Fin de Grado (TFG)</strong>, sirviendo como un escaparate accesible para que cualquier persona pueda 
        conocer y comprender la importancia de la <strong>optimización en la planificación de aeronaves</strong>.
      </p>

      <div className="banner">
        <h2>Menos retrasos, menos costes, menos emisiones.</h2>
      </div>

      <h3 className="flex items-center gap-2 pt-4 font-bold">
        <FaInfo />
        Información sobre el TFG
      </h3>
      <div className="cards-container">
        <Card 
          icon={FaBook} 
          title="¿Qué es HARSA?" 
          description="Conoce el objetivo del proyecto y su impacto en la industria aeronáutica." 
          onClick={() => setView("explain")} 
        />
        <Card icon={FaClipboardList} title="Modelo Matemático" description="Explora los conceptos básicos y el modelo de optimización." />
        <Card icon={FaLightbulb} title="Resultados Esperados" description="Descubre cómo HARSA mejora la eficiencia y reduce los costes operativos." />
      </div>

      <h3 className="flex items-center gap-2 pt-4 font-bold">
        <FaHammer />
        Uso de la herramienta
      </h3>
      <div className="cards-container">
        <Card
            icon={FaUpload}
            title="Cargar Datos"
            description="Importa los horarios de vuelos y restricciones para optimizar la planificación."
            onClick={() => setShowPopup("loadData")}
        />
        <Card
            icon={FaCog}
            title="Optimizar Planificación"
            description="Ejecuta el modelo matemático en la API de Python y genera soluciones eficientes."
            onClick={() => setShowPopup("optimize")}
        />
        <Card
            icon={FaChartBar}
            title="Resultados"
            description="Consultar los resultados de la última optimización"
            onClick={() => optimizationData && setView("results")}
            className={!optimizationData ? "opacity-50 cursor-not-allowed" : ""}
        />
      </div>

      {showPopup === "loadData" && (
        <div className="overlay">
          <LoadData onClose={() => setShowPopup(null)} />
        </div>
      )}

        {showPopup === "optimize" && (
            <div className="overlay">
                <OptiDaysSelector
                    onClose={() => setShowPopup(null)}
                    setOptimizationData={(data) => {
                        console.log("[OPTIMIZATION DATA RECEIVED]", data);  // 🔍 Log de la respuesta
                        setOptimizationData(data);                           // Guardar en estado global
                    }}
                />
            </div>
        )}

    </div>
  );
}

export default Welcome;