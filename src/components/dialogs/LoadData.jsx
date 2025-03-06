import React, { useState } from "react";

const LoadData = ({ onClose }) => {
    const [file, setFile] = useState(null);
  
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        setFile(selectedFile);
      }
    };
  
    const handleDrop = (event) => {
      event.preventDefault();
      const droppedFile = event.dataTransfer.files[0];
      if (droppedFile) {
        setFile(droppedFile);
      }
    };
  
    const handleUpload = () => {
      if (!file) {
        alert("Por favor, selecciona un archivo.");
        return;
      }
  
      const formData = new FormData();
      formData.append("file", file);
  
      fetch("http://127.0.0.1:5000/upload_file", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Archivo subido correctamente.");
          onClose();
        })
        .catch((error) => console.error("Error al subir el archivo:", error));
    };

  return (
    <div className="dialog-box-upload">
      <button className="close-icon" onClick={onClose}>✖</button>
      <h2>Subir Archivo de Datos</h2>
      <p className="card-subtitle">Asegúrate de que el archivo contenga los siguientes datos en formato CSV o Excel:</p>


      {/* Tails */}
      <h3 className="upload-data-pages">
        Matrículas <span style={{ fontWeight: "normal", fontSize: "16px" }}>: Lista de aviones disponibles en la aerolínea</span>
      </h3>
      <ul className="dialog-task-fields-types">
        <li><strong>Tail</strong>: Matrícula del avión</li>
      </ul>

      {/* Tasks */}
      <h3 className="upload-data-pages">
        Tareas <span style={{ fontWeight: "normal", fontSize: "16px" }}>: Tabla de tareas (vuelos, mantenimientos...)</span>
      </h3>
      <ul className="dialog-task-fields-types">
        <li><strong>ID</strong>: Identificador del vuelo</li>
        <li><strong>Tail</strong>: Matrícula del avión</li>
        <li><strong>From</strong>: Aeropuerto de origen</li>
        <li><strong>To</strong>: Aeropuerto de destino</li>
        <li><strong>Flight</strong>: Número del vuelo</li>
        <li><strong>Departure</strong>: Hora de salida (YYYY-MM-DD HH:MM)</li>
        <li><strong>Arrival</strong>: Hora de llegada (YYYY-MM-DD HH:MM)</li>
      </ul>

      {/* Rules */}
      <h3 className="upload-data-pages">
        Reglas <span style={{ fontWeight: "normal", fontSize: "16px" }}>: Tabla de reglas (limitaciones operativas)</span>
      </h3>
      <ul className="dialog-task-fields-types">
        <li><strong>ID</strong>: Identificador del vuelo</li>
      </ul>


      {/* Caja de subida de archivos */}
      <div 
        className="upload-box"
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
        onClick={() => document.getElementById("hidden-file-input").click()} // Simular clic en el input oculto
      >
        {file ? <p>{file.name}</p> : <p>Arrastra y suelta un archivo aquí o haz clic para seleccionar</p>}
      </div>

      {/* Input oculto */}
      <input 
        id="hidden-file-input"
        type="file"
        onChange={handleFileChange}
        accept=".csv, .xlsx"
        style={{ display: "none" }} // Ocultar input original
      />
    
      <div className="dialog-footer-button">
        <button className="upload-button" onClick={handleUpload}>Subir Archivo</button>
      </div>
    </div>
  );
};

export default LoadData;
