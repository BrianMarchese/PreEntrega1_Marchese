import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore';
import { db } from "../../services/firebase/firebaseConfig";
import "./ItemDetailContainer.css"

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState({})

    const {itemId} = useParams()

    useEffect(() => {
        const docRef = doc(db, "items", itemId)

        getDoc(docRef)
            .then(response =>{
                const data = response.data()
                const productoAdapted = { id: response.id, ...data }
                setProducto(productoAdapted)
            })
            .catch(error =>{
                console.log(error)
            })
    },[itemId])
    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...producto}/>
        </div>
    )
}


export default ItemDetailContainer;