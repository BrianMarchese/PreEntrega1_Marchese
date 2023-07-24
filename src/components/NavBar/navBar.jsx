import logo from './assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
      <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink to={`/`}><img src={logo} width="150" alt="logo"/></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className ="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav mb-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={`/category/Vinos`} className="nav-link">Vinos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/Bebidas blancas`} className="nav-link">Bebidas Blancas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/Whiskys`} className="nav-link">Whiskys</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/Licores`} className="nav-link">Licores</NavLink>
            </li>
          </ul>
          <div className="carrito">
            <CartWidget/>
          </div>
        </div>
      </div>
    </nav>
    )
}

export default NavBar