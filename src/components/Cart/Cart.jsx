import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () =>{
    const{cart, clearCart, totalQuantity, precioTotal} = useContext(CartContext)
    if (totalQuantity === 0){
        return(
            <div>
                <h1>No hay articulos en su carrito</h1>
                <Link to='/' className="btn btn-info">Ir a la tienda</Link>
            </div>
        )
    }
    return(
        <div>
            {cart.map(p=> <CartItem key={p.id}{...p}/>)}
            <h3>Total: ${precioTotal()}</h3>
            <h3>Cantidad de productos: {totalQuantity}</h3>
            <button onClick={() => clearCart()} className="btn btn-info mb-2">Limpiar carrito</button>
            <div>
               <Link to= '/checkout' className="btn btn-success">Terminar Compra</Link> 
            </div>
            
        </div>
    )
}

export default Cart;