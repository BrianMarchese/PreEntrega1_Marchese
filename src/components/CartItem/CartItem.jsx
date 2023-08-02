import { useContext } from "react";
import { CarContext } from "../../Context/CartContext";

const CartItem = ({id, nombre, imagen, precio, stock, descripcion, categoria, quantity}) =>{
    const { removeItem } = useContext(CarContext)

    const eliminarProducto = () =>{
        removeItem(id)
    }
    return(
        <div className="container" style={{ width: "19%", padding: "1%", overflow: "auto", float: " inline-start", boxSizing: "border-box",}}>
            <div className="card">
            <div className="card-header">
            {nombre}
            </div>
            <img src={imagen} alt={nombre} className="card-img-top"/>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">Cantidad: {quantity}</li>
            <li className="list-group-item"><strong>${precio.toLocaleString()}</strong></li>
            <li className="list-group-item">{descripcion}</li>
            </ul>
            <div>
            <button onClick={eliminarProducto} className="btn btn-danger">Eliminar</button>
            </div>
            </div>
        </div>
    )
}

export default CartItem;