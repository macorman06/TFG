import React from "react";

function Card({ icon: Icon, title, description, onClick }) {
  return (
    <div className={`card ${onClick ? "clickable" : ""}`} onClick={onClick}>
      {Icon && <Icon className="card-icon" />}
      <h3 className="font-semibold">{title}</h3>
      <p className="font-medium">{description}</p>
    </div>
  );
}

export default Card;
