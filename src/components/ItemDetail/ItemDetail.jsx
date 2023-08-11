import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
const ItemDetail = ({id, nombre, imagen, categoria, descripcion, precio, stock}) =>{
    
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext)
    const handleOnAdd = (quantity) => {

        setQuantityAdded(quantity)

        const item = {id, nombre, precio, imagen, descripcion}

        addItem(item, quantity)
    }
    return(
            <div className="card container">
                <img src={imagen} alt={nombre} className="card-img-top" />
                <div className="card-body">
                    <p className="Stock">
                            Stock Disponible: {stock}
                    </p>
                    <p className="Precio">
                        <strong>Precio: ${precio}</strong>
                    </p>
                    <p className="Categoria">
                        Categoria: {categoria}
                    </p>
                    <p className="Descripcion">
                        {descripcion}
                    </p>
                </div>
                <div className='mb-3'>
                        {
                            quantityAdded > 0 ? (
                                <Link to="/cart" className="btn btn-info">Ir al carrito</Link>
                            ) : (
                                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/> 
                            )
                        }
                        <div className='mt-2'>
                            <Link to="/" className="btn btn-success">Ir a la tienda</Link>  
                        </div>
                        
                </div>
            </div>
    )
}

export default ItemDetail;
