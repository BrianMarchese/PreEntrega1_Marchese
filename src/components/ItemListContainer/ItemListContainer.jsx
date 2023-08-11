import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { PulseLoader } from 'react-spinners';
import "./ItemListContainer.css";
const ItemListContainer = ({ bienvenida }) =>{
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true);
       const collectionRef = categoryId
           ? query(
                collection(db, "items"),
                where("categoria", "==", categoryId)
             )
           : collection(db, "items");
        
        getDocs(collectionRef)
            .then((response)=>{
                const productosAdapted = response.docs.map((doc)=>{
                    const data = doc.data();
                    return { id: doc.id, ...data }
                });
                setProductos(productosAdapted);
            })
            .catch((error) =>{
                console.log(error);
            })
            .finally(() =>{
                setLoading(false);
            })     
    }, [categoryId])
    return productos.length > 0 ? (
        <div>
            {<ItemList productos={productos}/>}
        </div>
    ) : (
        <PulseLoader className='loader' color="#36d7b7" size={25}/>
    );
};


export default ItemListContainer