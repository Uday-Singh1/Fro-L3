import React from 'react';

function Npm(props) {
  return (
    <div className="chapter-card">
      <h2>Hoofdstuk 3: npm</h2>
      <img src={props.image} alt="npm" />
      <p>
        npm (Node Package Manager) is een pakketbeheerder voor JavaScript en wordt gebruikt om externe pakketten en bibliotheken in een project te installeren en te beheren.
      </p>
    </div>
  );
}

export default Npm;
