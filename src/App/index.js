import './App.scss';

import { useState } from 'react';
import Navigation from '../Navigation';
import Logo from '../Logo';
import FirstPart from '../First_Part';
import SecondPart from '../Second_Part';
import ThirdPart from '../Third_Part';
import data from '../data/stands.json';

function App() {

  const [dataJSON, setDataJSON] = useState(data);

  return (
    <div className="App innerWidth">
      <div className="nav-container">
        <Logo />
        <Navigation />
      </div>
    <FirstPart />
    <SecondPart />
    <ThirdPart data = {dataJSON} />
    </div>
  );
}

export default App;
