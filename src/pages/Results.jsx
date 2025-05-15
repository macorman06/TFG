import React from "react";

function Results({ optimizationData }) {
  if (!optimizationData) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-xl text-center">
          <div className="text-2xl mb-4">🛫</div>
          <p className="text-lg font-medium">Optimizing your flight schedule...</p>
          <p className="text-sm text-gray-500 mt-2">This may take a few minutes</p>
        </div>
      </div>
    );
  }

  if (optimizationData.error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Optimization Error</h2>
        <p className="text-gray-700">{optimizationData.error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-6">Optimization Results</h2>
      <div className="flex gap-6 overflow-x-auto pb-6">
        {optimizationData.plans.map((plan, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 min-w-[400px]"
          >
            <h3 className="text-xl font-semibold mb-6">Plan {index + 1}</h3>
            
            {plan.kpis ? (
              <div className="flex flex-col gap-6">
                <div className="kpi-section">
                  <h4 className="font-semibold text-gray-700 mb-3">Asignación</h4>
                  <div className="kpi-grid">
                    {Object.entries(plan.kpis.assignment).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-1 border-b border-gray-200">
                        <span className="text-sm text-gray-600">{key}</span>
                        <span className="font-medium text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="kpi-section">
                  <h4 className="font-semibold text-gray-700 mb-3">Capacidad</h4>
                  <div className="kpi-grid">
                    {Object.entries(plan.kpis.capacity).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-1 border-b border-gray-200">
                        <span className="text-sm text-gray-600">{key}</span>
                        <span className="font-medium text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="kpi-section">
                  <h4 className="font-semibold text-gray-700 mb-3">Conexiones</h4>
                  <div className="kpi-grid">
                    {Object.entries(plan.kpis.connections).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-1 border-b border-gray-200">
                        <span className="text-sm text-gray-600">{key}</span>
                        <span className="font-medium text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="kpi-section">
                  <h4 className="font-semibold text-gray-700 mb-3">Rendimiento</h4>
                  <div className="kpi-grid">
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
}

export default Results;