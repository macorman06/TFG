// Definir URL base según el entorno
const BASE_URL = process.env.NODE_ENV === 'development'
    ? "http://localhost:5000" // Se actualiza el puerto según donde esté corriendo el backend
    : "http://your-production-url.com";

// Función para obtener la lista de fechas
export const getDataDays = async () => {
    try {
        const response = await fetch(`${BASE_URL}/data_days`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error in getDataDays:", error);
        throw error;
    }
};

// Función para cargar un día seleccionado
export const loadDay = async (selectedDay) => {
    try {
        const response = await fetch(`${BASE_URL}/load_day`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ day: selectedDay })
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error in loadDay:", error);
        throw error;
    }
};

// Nueva función para obtener las tareas agrupadas por rotación
export const getGroupedTasks = async () => {
    try {
        const response = await fetch(`${BASE_URL}/tasks/rotations`);
        console.log("Response:", response); // Log de la respuesta
        if (!response.ok) {
            throw new Error("Error al obtener las tareas agrupadas");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error in getGroupedTasks:", error);
        throw error;
    }
};

export default { getDataDays, loadDay, getGroupedTasks };