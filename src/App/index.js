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

    const [value, setValue] = useState('');

    function handleChange(newValue) {
      setValue(newValue);
      console.log(value);
    }

  return (
    <div className="App innerWidth">
      <div className="nav-container">
        <Logo />
        <Navigation value={value} onChange={handleChange} />
      </div>
    <FirstPart />
    <SecondPart />
    <ThirdPart data = {dataJSON} />
    </div>
  );
}

export default App;
