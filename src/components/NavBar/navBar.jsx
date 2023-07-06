import logo from './assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return(
      <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a href="."><img src={logo} width="150" alt="logo"/></a> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className ="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav mb-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href=".">Vinos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=".">Bebidas Blancas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=".">Whiskys</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=".">Licores</a>
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