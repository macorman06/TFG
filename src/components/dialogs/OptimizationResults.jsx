import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const OptimizationResults = ({ results, onClose, onBack }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleAccordionItem = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const CustomAccordion = ({ value, children, index }) => {
    const isOpen = openItems.includes(index);

    return (
      <div className="mb-2 border rounded-md">
        <button
          className="flex items-center justify-between w-full py-2 px-4 font-semibold text-left bg-gray-100 hover:bg-gray-200 rounded-md"
          onClick={() => toggleAccordionItem(index)}
        >
          {value}
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        {isOpen && <div className="p-4">{children}</div>}
      </div>
    );
  };

  return (
    <div className="dialog-box-results">
      <button className="close-icon" onClick={onClose}>
        ✖
      </button>
      <button className="back-button" onClick={onBack}>
        <FaArrowLeft /> Volver
      </button>

      <h2>Resultados de Optimización</h2>
      <p>Fecha: {new Date(results.date).toLocaleDateString()}</p>

      <div className="results-container">
        {results.plans.map((plan, index) => (
          <CustomAccordion key={index} value={`Plan ${index + 1}`} index={index}>
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
          </CustomAccordion>
        ))}
      </div>
    </div>
  );
};

export default OptimizationResults;
