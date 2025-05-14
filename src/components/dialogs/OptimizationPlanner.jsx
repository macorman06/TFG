import React, { useState } from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import OptimizationPlanCard from "./OptimizationPlanCard";
import OptimizationResults from "./OptimizationResults";

// Plantilla base para cada plan
const createEmptyPlan = () => ({
  min_time_connection: 30,
  max_time_connection: 450,
  prefered_time_wingtips: 150,
  same_rotation_weight: 1,
  con_time_weight: 50,
  wingtip_weight: 1,
  perfo_fact_weight: 50,
  overbooking_weight: 2000,
  num_rot: null,
  num_tails: null
});

const OptimizationPlanner = ({ selectedDate, onClose, onBack }) => {
  const [plans, setPlans] = useState([createEmptyPlan()]);
  const [results, setResults] = useState(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

  const addPlan = () => {
    setPlans([...plans, createEmptyPlan()]);
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
    setIsOptimizing(true);
    const payload = {
      date: selectedDate.toISOString().split("T")[0],
      plans: plans
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/optimize_selected_day_new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error optimizing:", error);
    } finally {
      setIsOptimizing(false);
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
            initialData={plan}
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
          disabled={plans.length === 0 || isOptimizing}
        >
          {isOptimizing ? "Optimizando..." : "Optimizar"}
        </button>
      </div>

      {isOptimizing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center">
            <div className="text-2xl mb-4">🛫</div>
            <p className="text-lg font-medium">Optimizando su planificación de vuelos...</p>
            <p className="text-sm text-gray-500 mt-2">Este proceso puede tardar unos minutos</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizationPlanner;