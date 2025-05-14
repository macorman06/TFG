import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const OptimizationResults = ({ results, onClose, onBack }) => {
  if (!results) return null;

  return (
    <div className="dialog-box-results">
      <button className="close-icon" onClick={onClose}>✖</button>
      <button className="back-button" onClick={onBack}>
        <FaArrowLeft /> Volver
      </button>

      <h2>Resultados de Optimización</h2>
      <p className="text-gray-600 mb-4">
        Fecha: {new Date(results.date).toLocaleDateString()}
      </p>

      <div className="flex flex-col gap-6 overflow-y-auto max-h-[70vh] p-4">
        {results.plans.map((plan, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Plan {index + 1}
            </h3>

            {plan.kpis ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Assignment Section */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-700 mb-3">Asignación</h4>
                  <div className="space-y-2">
                    {Object.entries(plan.kpis.assignment).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-1 border-b border-gray-200">
                        <span className="text-sm text-gray-600">{key}</span>
                        <span className="font-medium text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capacity Section */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-700 mb-3">Capacidad</h4>
                  <div className="space-y-2">
                    {Object.entries(plan.kpis.capacity).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-1 border-b border-gray-200">
                        <span className="text-sm text-gray-600">{key}</span>
                        <span className="font-medium text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connections Section */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-700 mb-3">Conexiones</h4>
                  <div className="space-y-2">
                    {Object.entries(plan.kpis.connections).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-1 border-b border-gray-200">
                        <span className="text-sm text-gray-600">{key}</span>
                        <span className="font-medium text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Section */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-700 mb-3">Rendimiento</h4>
                  <div className="space-y-2">
                    {Object.entries(plan.kpis.performance).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-1 border-b border-gray-200">
                        <span className="text-sm text-gray-600">{key}</span>
                        <span className="font-medium text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-red-700 font-semibold mb-2">Error en la optimización</h4>
                <p className="text-red-600">
                  {plan.error || "No se pudo resolver el modelo para este plan."}
                </p>
                {plan.infeasible_file && (
                  <p className="mt-2 text-sm text-red-500">
                    Archivo generado: <code>{plan.infeasible_file}</code>
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptimizationResults;