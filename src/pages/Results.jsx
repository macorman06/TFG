import React from "react";

function Results() {
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const data = params.get('data');
    if (data) {
      setResults(JSON.parse(decodeURIComponent(data)));
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-xl text-center">
          <div className="text-2xl mb-4">🛫</div>
          <p className="text-lg font-medium">Optimizando su planificación de vuelos...</p>
          <p className="text-sm text-gray-500 mt-2">Este proceso puede tardar unos minutos</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-8 bg-white min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Resultados de Optimización</h2>
      {results && results.plans.map((plan, index) => (
        <div 
          key={index}
          className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
        >
          <h3 className="text-xl font-semibold mb-4">Plan {index + 1}</h3>
          
          {plan.kpis ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
  );
}

export default Results