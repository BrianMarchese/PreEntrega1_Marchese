import { Link } from "react-router-dom"
import "./Item.css"
const Item = ({id,nombre,imagen,precio,stock,descripcion,categoria}) =>{
    return(
      
      <div className="container card-group">
          <div className="card">
                <div className="card-header">
                    {nombre}
              </div>
              <img src={imagen} alt={nombre} className="card-img-top" />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Stock Disponible: {stock}</li>
                <li className="list-group-item">Precio: ${precio}</li>
                <li className="list-group-item">{descripcion}</li>
                <li className="list-group-item">Categoria: {categoria}</li>
              </ul>
            <div className="card-body">
            </div>
            <div>
              <Link to={`/item/${id}`} className="btn btn btn-info mb-2">Ver Mas</Link>
            </div>
          </div>
        </div>        


    )
}


export default Item
