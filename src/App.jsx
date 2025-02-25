import './App.css';
import NavBar from './NavBar';
import Carousel from './Carousel';

function App() {
  return (
    <div>
      <header className="header"> <img src='/src/assets/pokemon.svg'/></header>
      <div className="background-image"></div>
      <div className="dark-cover"></div>
      <div className="body">
        <div className="navBar">
          <NavBar/>
        </div>
        <div className="main-content">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default App;