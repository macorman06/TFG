import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import OptimizationPlanner from "./OptimizationPlanner";

const OptiDaysSelector = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableDates, setAvailableDates] = useState([]);
  const [showPlanner, setShowPlanner] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/available_dates")
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 0) {
          setAvailableDates(data.dates.map(dateStr => new Date(dateStr)));
        }
      })
      .catch((error) => console.error("Error fetching dates:", error));
  }, []);

  const isDaySelectable = (date) => {
    return availableDates.some(
      (d) => d.toISOString().split('T')[0] === date.toISOString().split('T')[0]
    );
  };

  const handleDateConfirm = () => {
    if (selectedDate) {
      setShowPlanner(true);
    }
  };

  if (showPlanner) {
    return (
      <OptimizationPlanner
        selectedDate={selectedDate}
        onClose={onClose}
      />
    );
  }

  return (
    <div className="dialog-box-selector-days">
      <button className="close-icon" onClick={onClose}>✖</button>
      <h2>Seleccionar Día de Optimización</h2>
      <p>Selecciona un día disponible para optimizar la planificación.</p>

      <div className="datepicker-container">
        <DatePicker
          selected={selectedDate}
          onChange={setSelectedDate}
          inline
          filterDate={isDaySelectable}
          dateFormat="yyyy-MM-dd"
          placeholderText="Selecciona una fecha"
        />
      </div>

      <div className="dialog-footer-button">
        <button 
          className="confirm-button"
          onClick={handleDateConfirm}
          disabled={!selectedDate}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default OptiDaysSelector