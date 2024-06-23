import React, { useState } from "react";
import Nine from "./components/Nine";
import Seven from "./components/Seven";
import Eight from "./components/Eight";
import Three from './components/Three';
import Four from './components/Four';
import Five from "./components/Five";
import Six from "./components/Six";
import Ten from "./components/Ten";
import Eleven from "./components/Eleven";
import Twelve from "./components/Twelve";
import Thirteen from "./components/Thirteen";
import "./App.css"

const App = () => {
  const [activeComponent, setActiveComponent] = useState('Eleven');

  const renderComponent = () => {
    switch(activeComponent) {
      case 'Three':
        return <Three />;
      case 'Four':
        return <Four />;
      case 'Five':
        return <Five />;
      case 'Six':
        return <Six />;
      case 'Seven':
        return <Seven />;
      case 'Eight':
        return <Eight />;
      case 'Nine':
        return <Nine />;
      case 'Ten':
        return <Ten />;
      case 'Eleven':
        return <Eleven />
      case 'Twelve':
        return <Twelve />
        case 'Thirteen':
          return <Thirteen />
        
      default:
        return <Nine />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setActiveComponent('Three')}>Three</button>
        <button onClick={() => setActiveComponent('Four')}>Four</button>
        <button onClick={() => setActiveComponent('Five')}>Five</button>
        <button onClick={() => setActiveComponent('Six')}>Six</button>
        <button onClick={() => setActiveComponent('Seven')}>Seven</button>
        <button onClick={() => setActiveComponent('Eight')}>Eight</button>
        <button onClick={() => setActiveComponent('Nine')}>Nine</button>
        <button onClick={() => setActiveComponent('Ten')}>Ten</button>
        <button onClick={() => setActiveComponent('Eleven')}>Eleven</button>
        <button onClick={() => setActiveComponent('Twelve')}>Twelve</button>
        <button onClick={() => setActiveComponent('Thirteen')}>Thirteen</button>
      </nav>
      {renderComponent()}
    </div>
  );
};

export default App;
