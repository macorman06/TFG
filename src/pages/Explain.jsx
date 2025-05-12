import {FaBullseye, FaStar, FaMeteor} from "react-icons/fa";
import React from "react";

function Explain() {
  return (
    <div className="flex flex-col gap-3 p-[30px] max-w-[1200px] mx-auto">
      <h2>¿Qué es HARSA?</h2>
      <p>
        <strong>HARSA (Herramienta de Asignación de Rotaciones Sostenibles para Aeronaves)</strong> es el nombre que recibe la herramienta desarrollada en este 
        <strong> Trabajo de Fin de Grado (TFG)</strong> del Grado en Ingeniería Aeroespacial en Aeronavegación. Se trata de un conjunto de dos proyectos, siendo uno de 
        ellos esta misma <strong>interfaz</strong> para la visualización de las soluciones del modelo de optimización y una <strong>API</strong> desarrollada 
        con Python, capaz de gestionar los datos y el <strong>modelo de optimización</strong>.
      </p>
      <p>
        En este apartado, se explica la <strong>motivación</strong> de este proyecto, los <strong>objetivos</strong> a cumplir con este mismo y finalmente, 
        el <strong>impacto</strong> que tiene esta herramienta en la industria.
      </p>

      {/* Contenedor de 3 columnas */}
      <div className="three-columns">
        {/* Motivación */}
        <div className="column">
          <h3 className="flex items-center gap-2">
            <FaStar />
            Motivación
          </h3>
          <p>
            La aviación es un sector clave en la economía global, pero también enfrenta grandes desafíos en términos de 
            <strong> eficiencia operativa y sostenibilidad</strong>. A medida que la industria busca 
            <strong> recuperar y crecer</strong>, es fundamental adoptar soluciones innovadoras que permitan 
            <strong> optimizar la planificación de vuelos</strong>, reducir costos y minimizar el impacto ambiental.
          </p>
          <p>
            Uno de los mayores retos que enfrentan las aerolíneas es la <strong>asignación eficiente de aeronaves</strong>. 
            Una mala planificación puede generar <strong>retrasos, sobrecostes operativos y un mayor consumo de combustible</strong>, 
            afectando tanto a las empresas como al medio ambiente.
          </p>
          <p>
            HARSA surge como una herramienta diseñada para abordar este problema, haciendo uso de la <strong>Programación Entera Mixta (MIP) </strong> 
            que permiten asignar aeronaves de manera más eficiente. Esto se traduce en:
          </p>
          <ul>
            <li><strong>Reducción de emisiones contaminantes</strong> al optimizar el uso del combustible.</li>
            <li><strong>Ahorro en costos operativos</strong> al minimizar tiempos improductivos y mejorar la planificación.</li>
            <li><strong>Mayor sostenibilidad y competitividad</strong> para las aerolíneas en un mercado cada vez más exigente.</li>
          </ul>
          <p>
            En un sector donde la eficiencia es clave, contar con una herramienta como HARSA no solo mejora la 
            <strong> gestión de flotas</strong>, sino que también contribuye a una 
            <strong> aviación más responsable y sostenible</strong>.
          </p>
        </div>


        {/* Objetivos */}
        <div className="column">
          <h3 className="flex items-center gap-2">
            <FaBullseye />
            Objetivos
          </h3>
          <p>
            El desarrollo de HARSA tiene como finalidad proporcionar una <strong>herramienta efectiva preliminar </strong> 
            que permita optimizar la planificación de vuelos y mejorar la <strong>gestión operativa de las aerolíneas </strong> 
            en un periodo de corto/medio plazo.
          </p>
          <p>
            Se busca aplicar un modelo de <strong>Programación Entera Mixta (MIP)</strong> para generar soluciones óptimas 
            en la asignación de aeronaves, reduciendo tiempos y mejorando la eficiencia del uso de la flota.
          </p>
          <p>
            Por ello, se puede dividir en dos objetivos principales: el desarrollo de una <strong>API</strong> con el modelo matemático de 
            optimización y una <strong>interfaz gráfica</strong> que permita visualizar las soluciones y comparar entre ellas con diferentes 
            criterios de optimización. 
          </p>
        </div>

        {/* Impacto */}
        <div className="column">
          <h3 className="flex items-center gap-2">
            <FaMeteor />
            Impacto
          </h3>
          <p>
            HARSA tiene un impacto significativo en la <strong>eficiencia operativa de las aerolíneas</strong>, permitiendo 
            reducir costes mediante una mejor asignación de recursos y minimizando tiempos improductivos.
          </p>
          <p>
            A nivel ambiental, el uso de esta herramienta contribuye a la <strong>reducción de emisiones de CO₂</strong>, 
            favoreciendo prácticas más sostenibles en la industria aeronáutica.
          </p>
          <p>
            Además, la herramienta ofrece un marco para futuras investigaciones en el ámbito de la <strong>optimización de rutas aéreas</strong>, 
            consolidando su relevancia en el sector aeronáutico.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Explain;
