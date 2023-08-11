import { useContext } from 'react';
import carrito from './assets/carrito.png';
import './carrito.css';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () =>{
    const { totalQuantity } = useContext(CartContext);
    return(
        <Link to='/cart' className='CartWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className='carrito' src={carrito} alt="carrito" />
            <h5 className='cantidadProductos'>{totalQuantity}</h5>
        </Link>

    )
}

export default CartWidget