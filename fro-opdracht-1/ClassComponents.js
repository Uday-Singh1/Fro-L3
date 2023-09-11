import React from 'react';

function ClassComponents(props) {
  return (
    <div className="chapter-card">
      <h2>Hoofdstuk 4: Class Components</h2>
      <img src={props.image} alt="Class Components" />
      <p>
        Class Components zijn een manier om componenten te maken in React door middel van JavaScript-klassen. Ze zijn een van de twee belangrijke manieren om componenten te maken in React, naast Functionele componenten.
      </p>
    </div>
  );
}

export default ClassComponents;
