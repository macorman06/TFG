import React,{ useState } from "react";
import { FaUpload, FaCog, FaChartBar, FaBook, FaClipboardList, FaLightbulb, FaInfo, FaHammer } from "react-icons/fa";
import Card from "../components/CardWelcome";

import OptiDaysSelector from "../components/dialogs/OptiDaysSelector"; 
import LoadData from "../components/dialogs/LoadData"; 


function Welcome({ setView }) {
  const [showPopup, setShowPopup] = useState(null); // Estado para controlar la visibilidad del popup

  return (
    <div className="flex flex-col gap-3 p-[30px] max-w-[1200px] mx-auto">
      <h2>Bienvenido a HARSA</h2>
      <p className="intro-text">
        Esta web ha sido creada para presentar el <strong>Trabajo de Fin de Grado (TFG)</strong>, sirviendo como un escaparate accesible para que cualquier persona pueda 
        conocer y comprender la importancia de la <strong>optimización en la planificación de aeronaves</strong>. A través de esta plataforma, es posible probar y comparar 
        diferentes soluciones generadas por un modelo matemático avanzado y, en última instancia, entender cómo este tipo de herramientas impactan en la sociedad.
      </p>
      <p className="intro-text">
        <strong>HARSA</strong> (Herramienta de Asignación de Rotaciones Sostenibles para Aeronaves) es una plataforma diseñada para <strong>optimizar la planificación de vuelos</strong> en aerolíneas. 
        Mediante un modelo de <strong>Optimización Basado en Programación Entera Mixta (MIP)</strong>, permite analizar distintos escenarios y generar soluciones que 
        <strong> reducen costes, minimizan retrasos y disminuyen el impacto ambiental</strong>. En definitiva, una herramienta clave para hacer que el transporte aéreo sea más eficiente, sostenible y accesible para todos.
      </p>
      <p className="intro-text">
        Esta web permite interactuar con HARSA de manera intuitiva y sencilla. Aquí podrás <strong>cargar datos reales</strong>, ejecutar el proceso de optimización y 
        comparar distintas soluciones para visualizar su impacto. Además, encontrarás información detallada sobre el proyecto y su metodología, explorando a fondo 
        <strong> los beneficios directos que aporta no solo a la industria aeronáutica, sino a la sociedad en su conjunto</strong>: vuelos más accesibles, menos retrasos y 
        una menor huella ambiental. Porque optimizar la aviación no es solo cuestión de números, sino de mejorar la experiencia de millones de pasajeros y contribuir a un mundo más sostenible.
      </p>

      <div className="banner">
        <h2>Menos retrasos, menos costes, menos emisiones.</h2>
      </div>


      {/* Sección 1: Información sobre el TFG */}
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

      {/* Sección 2: Uso de la Herramienta */}
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
      </div>

      {showPopup === "loadData" && (
        <div className="overlay">
          <div className="popup">
            <LoadData onClose={() => setShowPopup(null)} />
          </div>
        </div>
      )}

      {showPopup === "optimize" && (
        <div className="overlay">
          <div className="popup">
            <OptiDaysSelector onClose={() => setShowPopup(null)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Welcome;