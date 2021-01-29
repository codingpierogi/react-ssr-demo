import './App.css';
import PokemonLandingPage from './PokemonLandingPage';

function App() {
  return (
    <>
      <header>
        <nav className="navbar">
          <a class="navbar-brand" href="#">
            <img src="" alt="" />
          </a>
        </nav>
      </header>
      <main>
        <PokemonLandingPage />
      </main>
      <footer>
        Using PokeApi, the RESTful Pokemon API
      </footer>
    </>
  );
}

export default App;
