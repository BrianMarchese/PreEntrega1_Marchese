import carrito from './assets/carrito.png';
import './carrito.css';

const CartWidget = () =>{
    return(
        <div className="carrito">
            <img src={carrito} alt="carrito" /> 0
        </div>
    )
}

export default CartWidget