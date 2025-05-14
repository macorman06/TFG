import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const OptimizationPlanCard = ({ planIndex, onUpdate, onRemove, isRemovable }) => {
  const [planData, setPlanData] = useState({
    min_time_connection: 30,
    max_time_connection: 180,
    prefered_time_wingtips: 45,
    same_rotation_weight: 1,
    con_time_weight: 1,
    wingtip_weight: 1,
    perfo_fact_weight: 1,
    overbooking_weight: 1,
    num_rot: 5,
    num_tails: 10
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...planData, [name]: Number(value) };
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
        <div className="parameter-group">
          <label htmlFor={`min_time_connection_${planIndex}`}>
            Tiempo mínimo de conexión (min)
          </label>
          <input
            type="number"
            id={`min_time_connection_${planIndex}`}
            name="min_time_connection"
            value={planData.min_time_connection}
            onChange={handleInputChange}
            min="0"
          />
        </div>

        <div className="parameter-group">
          <label htmlFor={`max_time_connection_${planIndex}`}>
            Tiempo máximo de conexión (min)
          </label>
          <input
            type="number"
            id={`max_time_connection_${planIndex}`}
            name="max_time_connection"
            value={planData.max_time_connection}
            onChange={handleInputChange}
            min="0"
          />
        </div>

        <div className="parameter-group">
          <label htmlFor={`prefered_time_wingtips_${planIndex}`}>
            Tiempo preferido entre wingtips (min)
          </label>
          <input
            type="number"
            id={`prefered_time_wingtips_${planIndex}`}
            name="prefered_time_wingtips"
            value={planData.prefered_time_wingtips}
            onChange={handleInputChange}
            min="0"
          />
        </div>

        <div className="parameter-group">
          <label htmlFor={`same_rotation_weight_${planIndex}`}>
            Peso rotación igual
          </label>
          <input
            type="number"
            id={`same_rotation_weight_${planIndex}`}
            name="same_rotation_weight"
            value={planData.same_rotation_weight}
            onChange={handleInputChange}
            min="0"
            step="0.1"
          />
        </div>

        <div className="parameter-group">
          <label htmlFor={`con_time_weight_${planIndex}`}>
            Peso tiempo conexión
          </label>
          <input
            type="number"
            id={`con_time_weight_${planIndex}`}
            name="con_time_weight"
            value={planData.con_time_weight}
            onChange={handleInputChange}
            min="0"
            step="0.1"
          />
        </div>

        <div className="parameter-group">
          <label htmlFor={`wingtip_weight_${planIndex}`}>
            Peso wingtips
          </label>
          <input
            type="number"
            id={`wingtip_weight_${planIndex}`}
            name="wingtip_weight"
            value={planData.wingtip_weight}
            onChange={handleInputChange}
            min="0"
            step="0.1"
          />
        </div>

        <div className="parameter-group">
          <label htmlFor={`perfo_fact_weight_${planIndex}`}>
            Peso factor rendimiento
          </label>
          <input
            type="number"
            id={`perfo_fact_weight_${planIndex}`}
            name="perfo_fact_weight"
            value={planData.perfo_fact_weight}
            onChange={handleInputChange}
            min="0"
            step="0.1"
          />
        </div>

        <div className="parameter-group">
          <label htmlFor={`overbooking_weight_${planIndex}`}>
            Peso overbooking
          </label>
          <input
            type="number"
            id={`overbooking_weight_${planIndex}`}
            name="overbooking_weight"
            value={planData.overbooking_weight}
            onChange={handleInputChange}
            min="0"
            step="0.1"
          />
        </div>

        <div className="parameter-group">
          <label htmlFor={`num_rot_${planIndex}`}>
            Número de rotaciones
          </label>
          <input
            type="number"
            id={`num_rot_${planIndex}`}
            name="num_rot"
            value={planData.num_rot}
            onChange={handleInputChange}
            min="1"
          />
        </div>

        <div className="parameter-group">
          <label htmlFor={`num_tails_${planIndex}`}>
            Número de matrículas
          </label>
          <input
            type="number"
            id={`num_tails_${planIndex}`}
            name="num_tails"
            value={planData.num_tails}
            onChange={handleInputChange}
            min="1"
          />
        </div>
      </div>
    </div>
  );
};

export default OptimizationPlanCard;