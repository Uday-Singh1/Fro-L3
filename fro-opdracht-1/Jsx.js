import React from 'react';

function JSX(props) {
  return (
    <div className="chapter-card">
      <h2>Hoofdstuk 5: JSX</h2>
      <img src={props.image} alt="JSX" />
      <p>
        JSX (JavaScript XML) is een syntactische extensie van JavaScript die wordt gebruikt in React om elementen en componenten te maken met behulp van HTML-achtige syntax.
      </p>
    </div>
  );
}

export default JSX;
