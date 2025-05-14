import React, { useState } from "react";
import { FaArrowLeft, FaPlus, FaTimes } from "react-icons/fa";
import OptimizationPlanCard from "./OptimizationPlanCard";
import OptimizationResults from "./OptimizationResults";

const OptimizationPlanner = ({ selectedDate, onClose, onBack }) => {
  const [plans, setPlans] = useState([{}]);
  const [results, setResults] = useState(null);

  const addPlan = () => {
    setPlans([...plans, {}]);
  };

  const removePlan = (index) => {
    const newPlans = plans.filter((_, i) => i !== index);
    setPlans(newPlans);
  };

  const updatePlan = (index, planData) => {
    const newPlans = [...plans];
    newPlans[index] = planData;
    setPlans(newPlans);
  };

  const handleOptimize = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/optimize_selected_day_new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: selectedDate.toISOString().split('T')[0],
          plans: plans,
        }),
      });

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error optimizing:", error);
    }
  };

  if (results) {
    return <OptimizationResults results={results} onClose={onClose} onBack={() => setResults(null)} />;
  }

  return (
    <div className="dialog-box-planner">
      <button className="close-icon" onClick={onClose}>✖</button>
      <button className="back-button" onClick={onBack}>
        <FaArrowLeft /> Volver
      </button>

      <h2>Configurar Planes de Optimización</h2>
      <p>Fecha seleccionada: {selectedDate.toLocaleDateString()}</p>

      <div className="plans-container">
        {plans.map((plan, index) => (
          <OptimizationPlanCard
            key={index}
            planIndex={index}
            onUpdate={(data) => updatePlan(index, data)}
            onRemove={() => removePlan(index)}
            isRemovable={plans.length > 1}
          />
        ))}
      </div>

      <div className="planner-actions">
        <button className="add-plan-button" onClick={addPlan}>
          <FaPlus /> Añadir Plan
        </button>
        <button
          className="optimize-button"
          onClick={handleOptimize}
          disabled={plans.length === 0}
        >
          Optimizar
        </button>
      </div>
    </div>
  );
};

export default OptimizationPlanner;