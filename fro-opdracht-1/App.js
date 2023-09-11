import React from 'react';
import './App.css';
import Webpack from './Webpack';
import Babel from './Babel';
import Npm from './npm';
import ClassComponents from './ClassComponents';
import JSX from './Jsx';
import Header from './Header'; 

function App() {
  return (
    <div className="App">
      <Header
        title="Mijn Web Development Hoofdstukken"
      />
      <Webpack
        title="Hoofdstuk 1: Webpack"
        image="/img/oli.webp"
        description="Webpack is een krachtige JavaScript-bundler die wordt gebruikt om modules en hun afhankelijkheden in te pakken en te bundelen."
      />
      <Babel
        title="Hoofdstuk 2: Babel"
        image="/img/monke.webp"
        description="Babel is een JavaScript-compiler die moderne JavaScript-code omzet naar een oudere versie die in de meeste browsers kan worden uitgevoerd."
      />
      <Npm
        title="Hoofdstuk 3: npm"
        image="/img/ezel.webp"
        description="npm (Node Package Manager) is een pakketbeheerder voor JavaScript en wordt gebruikt om externe pakketten en bibliotheken in een project te installeren en te beheren."
      />
      <ClassComponents
        title="Hoofdstuk 4: Class Components"
        image="/img/ket.webp"
        description="Class Components zijn een manier om componenten te maken in React door middel van JavaScript-klassen. Ze zijn een van de twee belangrijke manieren om componenten te maken in React, naast Functionele componenten."
      />
      <JSX
        title="Hoofdstuk 5: JSX"
        image="/img/dag.webp"
        description="JSX (JavaScript XML) is een syntactische extensie van JavaScript die wordt gebruikt in React om elementen en componenten te maken met behulp van HTML-achtige syntax."
      />
    </div>
  );
}

export default App;
