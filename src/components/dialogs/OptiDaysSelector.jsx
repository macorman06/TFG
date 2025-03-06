import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const OptiDaysSelector = ({ onClose }) => {
  const [selectedRange, setSelectedRange] = useState([null, null]); // ⬅ Inicialmente sin selección
  const [startDate, endDate] = selectedRange;
  const [selectableDays, setSelectableDays] = useState([]);

  // Fechas disponibles según la imagen proporcionada
  useEffect(() => {
    const selectableDates = [
      "2025-01-30 00:00:00",
      "2025-01-31 00:00:00",
      "2025-02-01 00:00:00",
      "2025-02-02 00:00:00",
      "2025-02-03 00:00:00",
      "2025-02-04 00:00:00",
      "2025-02-05 00:00:00",
      "2025-02-06 00:00:00",
      "2025-02-07 00:00:00",
      "2025-02-08 00:00:00",
      "2025-02-09 00:00:00",
      "2025-02-10 00:00:00",
      "2025-02-11 00:00:00"
    ].map(dateStr => new Date(dateStr));

    setSelectableDays(selectableDates);
  }, []);

  // Definir el rango visible del calendario
  const minDate = new Date(2025, 0, 30);
  const maxDate = new Date(2025, 1, 11);

  // Permitir solo los días de la lista
  const isDaySelectable = (date) => selectableDays.some((d) => d.getTime() === date.getTime());

  return (
    <div className="dialog-box-selector-days">
      <button className="close-icon" onClick={onClose}>✖</button>
      <h2>Seleccionar Días de Optimización</h2>
      <p>Solo puedes seleccionar los días habilitados en el sistema.</p>

      {/* Contenedor para centrar el DatePicker */}
      <div className="datepicker-container">
        <DatePicker
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => setSelectedRange(update)}
          inline
          dateFormat="dd/MM/yyyy"
          filterDate={isDaySelectable}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Selecciona un rango de fechas"
        />
      </div>

      {/* Botón de Confirmar (deshabilitado si no hay fechas seleccionadas) */}
      <div className="dialog-footer-button">
        <button 
          className="confirm-button"
          disabled={!startDate || !endDate} 
        >
          Confirmar selección
        </button>
      </div>
    </div>
  );
};

export default OptiDaysSelector;
