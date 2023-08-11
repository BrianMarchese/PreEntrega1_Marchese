import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../services/firebase/firebaseConfig";
import { getDocs, query, where, collection, addDoc, documentId, writeBatch, Timestamp} from 'firebase/firestore';
import { ClipLoader } from 'react-spinners';
import { Link } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./Checkout.css";

const Checkout = () =>{
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, precioTotal, clearCart } = useContext(CartContext);

    const createOrder = async ({ nombre, telefono, email, confirmEmail }) => {
        setLoading(true)

        try {
            const objectOrder = {
                buyer: {
                    nombre, telefono, email, confirmEmail
                },
                items: cart,
                total: precioTotal(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const fueraDeStock = []

            const ids = cart.map(prod => prod.id)

            const productsRefere = collection(db, "items")

            const productosAgregadosDeFirestore = await getDocs(query(productsRefere, where(documentId(), 'in', ids)))

            const { docs } = productosAgregadosDeFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productosAgregadosAlCarro = cart.find (prod => prod.id === doc.id)
                const cantidadProducto = productosAgregadosAlCarro?.quantity

                if(stockDb >= cantidadProducto){
                    batch.update(doc.ref, {stock: stockDb - cantidadProducto})
                } else{
                    fueraDeStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(fueraDeStock.length === 0){
                await batch.commit()

                const orderReference = collection(db, 'orders')

                const ordenAgregada = await addDoc(orderReference, objectOrder)

                setOrderId(ordenAgregada.id)
                clearCart()
            } else{
                console.error("Lo sentimos, hay productos fuera de stock ")
            }
        } catch(error){
            console.log(error)
        } finally {
            setLoading(false)
        }

}

if(loading){
    return(
        <div className="loader-checkout"> Generando Orden
            <ClipLoader color="#36d7b7" size={47}/>
        </div>
    );
}

if(orderId){
    return <h4 className="confirmacion"> Gracias por confiar en nosotros, se ha enviado un Email con los datos y la confirmacion de su compra
        <h2 className="orden">El id de su compra es: {orderId}</h2>

        <Link to='/' className="btn btn-info">Volver a la tienda</Link>
    </h4>
}

return(
    <div>
        <h1>Bienvenido al Checkout</h1>
        <CheckoutForm onConfirm={createOrder}/>
    </div>
)
}


export default Checkout