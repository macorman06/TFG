import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OptimizationResults = ({ results, onClose, onBack }) => {
  return (
    <div className="dialog-box-results">
      <button className="close-icon" onClick={onClose}>✖</button>
      <button className="back-button" onClick={onBack}>
        <FaArrowLeft /> Volver
      </button>

      <h2>Resultados de Optimización</h2>
      <p>Fecha: {new Date(results.date).toLocaleDateString()}</p>

      <div className="results-container">
        {results.plans.map((plan, index) => (
          <Accordion type="single" collapsible key={index}>
            <AccordionItem value={`plan-${index}`}>
              <AccordionTrigger>Plan {index + 1}</AccordionTrigger>
              <AccordionContent>
                <div className="kpi-sections">
                  <div className="kpi-section">
                    <h4>Asignación</h4>
                    <div className="kpi-grid">
                      {Object.entries(plan.kpis.assignment).map(([key, value]) => (
                        <div key={key} className="kpi-item">
                          <span className="kpi-label">{key}</span>
                          <span className="kpi-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="kpi-section">
                    <h4>Capacidad</h4>
                    <div className="kpi-grid">
                      {Object.entries(plan.kpis.capacity).map(([key, value]) => (
                        <div key={key} className="kpi-item">
                          <span className="kpi-label">{key}</span>
                          <span className="kpi-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="kpi-section">
                    <h4>Conexiones</h4>
                    <div className="kpi-grid">
                      {Object.entries(plan.kpis.connections).map(([key, value]) => (
                        <div key={key} className="kpi-item">
                          <span className="kpi-label">{key}</span>
                          <span className="kpi-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="kpi-section">
                    <h4>Rendimiento</h4>
                    <div className="kpi-grid">
                      {Object.entries(plan.kpis.performance).map(([key, value]) => (
                        <div key={key} className="kpi-item">
                          <span className="kpi-label">{key}</span>
                          <span className="kpi-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default OptimizationResults;