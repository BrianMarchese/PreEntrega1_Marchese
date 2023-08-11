import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd}) => {
    const[contador, setContador] = useState(initial);

    const handleReducir = () =>{
        setContador(contador -1);
    }

    const handleIncrementar = () =>{
        setContador(contador +1);
    }

    return (
        <div className="contador">
            <button className="buttonCart btn btn-info" disabled={contador <=1} onClick={handleReducir}>-</button>
            <span>{contador}</span>
            <button className="buttonCart btn btn-info" disabled={contador >=stock} onClick={handleIncrementar}>+</button>
            <div>
                <button className="buttonAdd btn btn-info" disabled={stock <= 0} onClick={()=>onAdd(contador)}>Agregar al carrito</button>
            </div>
        </div>
    )
}


export default ItemCount