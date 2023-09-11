import React from 'react';

function Babel(props) {
  return (
    <div className="chapter-card">
      <h2>Hoofdstuk 2: Babel</h2>
      <img src={props.image} alt="Babel" />
      <p>
        Babel is een JavaScript-compiler die moderne JavaScript-code omzet naar een oudere versie die in de meeste browsers kan worden uitgevoerd.
      </p>
    </div>
  );
}

export default Babel;
