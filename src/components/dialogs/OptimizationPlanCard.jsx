import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const OptimizationPlanCard = ({ planIndex, onUpdate, onRemove, isRemovable, initialData }) => {
  const [planData, setPlanData] = useState(initialData);

  // Enviar el estado inicial al padre al cargar el componente
  useEffect(() => {
    onUpdate(planData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = value === "" ? null : isNaN(Number(value)) ? value : Number(value);
    const newData = { ...planData, [name]: parsedValue };
    setPlanData(newData);
    onUpdate(newData);
  };

  return (
      <div className="optimization-plan-card">
        <div className="card-header">
          <h3>Plan {planIndex + 1}</h3>
          {isRemovable && (
              <button className="remove-plan-button" onClick={onRemove}>
                <FaTimes />
              </button>
          )}
        </div>

        <div className="parameters-grid">
          {[
            { name: "min_time_connection", label: "Tiempo mínimo de conexión (min)" },
            { name: "max_time_connection", label: "Tiempo máximo de conexión (min)" },
            { name: "prefered_time_wingtips", label: "Tiempo preferido entre wingtips (min)" },
            { name: "same_rotation_weight", label: "Peso rotación igual" },
            { name: "con_time_weight", label: "Peso tiempo conexión" },
            { name: "wingtip_weight", label: "Peso wingtips" },
            { name: "perfo_fact_weight", label: "Peso factor rendimiento" },
            { name: "overbooking_weight", label: "Peso overbooking" },
            { name: "num_rot", label: "Número de rotaciones" },
            { name: "num_tails", label: "Número de matrículas" },
          ].map(({ name, label }) => (
              <div className="parameter-group" key={name}>
                <label htmlFor={`${name}_${planIndex}`}>{label}</label>
                <input
                    type="number"
                    id={`${name}_${planIndex}`}
                    name={name}
                    value={planData[name] ?? ""}
                    onChange={handleInputChange}
                    min={["num_rot", "num_tails"].includes(name) ? "1" : "0"}
                    step={["same_rotation_weight", "con_time_weight", "wingtip_weight", "perfo_fact_weight", "overbooking_weight"].includes(name) ? "0.1" : "1"}
                />
              </div>
          ))}
        </div>
      </div>
  );
};

export default OptimizationPlanCard;
