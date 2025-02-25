import './App.css';
import NavBar from './NavBar';
import Carousel from './Carousel';

function App() {
  return (
    <div id="root">
      <header className="header"> <img src='/src/assets/pokemon 1.svg'/></header>
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