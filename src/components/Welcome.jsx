import React,{ useState } from "react";
import { FaUpload, FaCog, FaChartBar, FaBook, FaClipboardList, FaLightbulb, FaInfo, FaHammer } from "react-icons/fa";
import Card from "./Card";

import OptiDaysSelector from "./dialogs/OptiDaysSelector"; 
import LoadData from "./dialogs/LoadData"; 


function Welcome({ setView }) {
  const [showPopup, setShowPopup] = useState(null); // Estado para controlar la visibilidad del popup

  return (
    <div className="welcome-container">
      <h2>Bienvenido a HARSA</h2>
      <p className="intro-text">
        Esta web ha sido creada para presentar el <strong>Trabajo de Fin de Grado (TFG)</strong>, permitiendo comprender las bases teóricas del 
        <strong> problema de enrutamiento de aeronaves</strong> y ofrecer una herramienta interactiva basada en datos reales enmascarados de una 
        aerolínea low-cost española. A través de esta plataforma, es posible probar y comparar las diferentes soluciones óptimas 
        generadas por el modelo de optimización.
      </p>
      <p className="intro-text">
        <strong>HARSA</strong> (Herramienta de Asignación de Rotaciones Sostenibles para Aeronaves) es una plataforma diseñada para <strong>optimizar la planificación de vuelos </strong> 
        en aerolíneas. Utiliza un modelo matemático de <strong>Optimización Basado en Programación Entera Mixta (MIP)</strong>, permitiendo analizar distintos escenarios y generar soluciones 
        que reducen costes, mejoran el uso de las aeronaves y garantizan una operación sostenible.
      </p>
      <p className="intro-text">
        Esta web te permite interactuar con HARSA de manera intuitiva y sencilla. Aquí podrás cargar datos de planificación, 
        ejecutar el proceso de optimización y comparar distintas soluciones generadas por el modelo. Además, encontrarás información detallada 
        sobre el proyecto, su metodología y los beneficios que aporta a la industria aeronáutica.
      </p>

      {/* Sección 1: Uso de la Herramienta */}
      <h3><FaHammer className="icon-inline" /> Uso de la herramienta</h3>
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
          title="Comparar Soluciones" 
          description="Visualiza y analiza diferentes escenarios de planificación para elegir la mejor opción." 
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

      {/* Sección 2: Información sobre el TFG */}
      <h3><FaInfo className="icon-inline" />nformación sobre el TFG</h3>
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
    </div>
  );
}

export default Welcome;