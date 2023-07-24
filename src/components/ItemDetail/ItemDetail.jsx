import ItemCount from '../ItemCount/ItemCount';
const ItemDetail = ({id, nombre, imagen, categoria, descripcion, precio, stock}) =>{
    return(
            <div className="card container">
                <img src={imagen} className="card-img-top" />
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
                   <ItemCount initial={1} stock={stock} onAdd={(cantidad) =>console.log('Cantidad agregada: ',cantidad)}/> 
                </div>
                
                </div>
    )
}

export default ItemDetail;
