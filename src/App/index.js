import './App.scss';
import Navigation from '../Navigation';
import Logo from '../Logo';
import FirstPart from '../First_Part';
import SecondPart from '../Second_Part';
function App() {
  return (
    <div className="App innerWidth">
      <div className="nav-container">
        <Logo />
        <Navigation />
      </div>
    <FirstPart />
    <SecondPart />
    </div>
  );
}

export default App;
