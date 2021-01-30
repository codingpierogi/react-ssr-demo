import { Link } from "react-router-dom";

function Header({ dropdown }) {
  return (
    <header className="bg-light">
      <nav className="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/pokeapi.png" className="w-50" alt="PokéAPI" />
          </Link>
          {dropdown}
        </div>
      </nav>
    </header>
  );
}

export default Header;
