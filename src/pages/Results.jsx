import React, { useState, useEffect } from "react";

function Results({ optimizationData }) {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState(null);

  useEffect(() => {
    if (optimizationData) {
      setResults(optimizationData);
      setIsLoading(false);
    }
  }, [optimizationData]);

  if (isLoading) {
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

  return (
    <div className="flex flex-col p-8 bg-white min-h-screen">
      <div className="overflow-x-auto">
        <div className="flex gap-6 pb-4">
          {results && results.plans.map((plan, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200 min-w-[300px]"
            >
              <h3 className="text-xl font-semibold mb-4">Plan {index + 1}</h3>
              
              {plan.kpis ? (
                <div className="flex flex-col gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-700 mb-3">Assignment</h4>
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
                    <h4 className="font-semibold text-gray-700 mb-3">Capacity</h4>
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
                    <h4 className="font-semibold text-gray-700 mb-3">Connections</h4>
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
                    <h4 className="font-semibold text-gray-700 mb-3">Performance</h4>
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
                  <h4 className="text-red-700 font-semibold mb-2">Optimization Error</h4>
                  <p className="text-red-600">
                    {plan.error || "Could not solve the model for this plan."}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Results;