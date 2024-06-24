import React, { useState } from 'react';
import Nine from './components/Nine';
import Seven from './components/Seven';
import Eight from './components/Eight';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';
import Six from './components/Six';
import Ten from './components/Ten';
import Eleven from './components/Eleven';
import Twelve from './components/Twelve';
import Thirteen from './components/Thirteen';
import Fourteen from './components/fourteen';  // Capitalized correctly
import Fifteen from './components/Fifteen';
import Sixteen from './components/Sixteen';
// import Seventeen from './components/Seventeen';  // Capitalized correctly
import Eighteen from './components/Eighteen';

import './App.css';

const App = () => {
  const items = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
  ];

  const [activeComponent, setActiveComponent] = useState('Eleven');

  const renderComponent = () => {
    switch (activeComponent) {
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
        return <Eleven />;
      case 'Twelve':
        return <Twelve />;
      case 'Thirteen':
        return <Thirteen />;
      case 'Fourteen':
        return <Fourteen />;
      case 'Fifteen':
        return <Fifteen items={items} />;
      case 'Sixteen':
        return <Sixteen items={items} itemsPerPage={3} />;
      // case 'Seventeen':
        // return <Seventeen />;  // Correct capitalization and no colon before the string
        case 'Eighteen':
          return <Eighteen />
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
        <button onClick={() => setActiveComponent('Fourteen')}>Fourteen</button>
        <button onClick={() => setActiveComponent('Fifteen')}>Fifteen</button>
        <button onClick={() => setActiveComponent('Sixteen')}>Sixteen</button>
        <button onClick={() => setActiveComponent('Seventeen')}>Seventeen</button>
        <button onClick={() => setActiveComponent('Eighteen')}>Eighteen</button>
      </nav>
      {renderComponent()}
    </div>
  );
};

export default App;
