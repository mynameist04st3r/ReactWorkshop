
import Card from './Card';
import Sidebar from './Sidebar';

function App(){
  return (
      <div>
        <header className='header'>Pokedex</header>
        <Sidebar />
          <Card />
      </div>
  );
}

export default App
