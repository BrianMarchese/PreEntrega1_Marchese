import { useEffect, useState } from 'react'
import { getProductos, getProductosByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
const ItemListContainer = ({ bienvenida }) =>{
    const [productos, setProductos] = useState([])

    const {categoryId} = useParams()

    useEffect(()=>{
        const funcAsync = categoryId ? getProductosByCategory : getProductos
        funcAsync(categoryId)
            .then(response =>{
                setProductos(response)
            })
            .catch(error =>{
                console.error(error)
            })

    }, [categoryId])
    return(
        <div>
        {bienvenida}
        {<ItemList productos={productos}/>}
        </div>
    )
}


export default ItemListContainer