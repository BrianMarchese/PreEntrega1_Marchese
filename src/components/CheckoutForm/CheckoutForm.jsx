import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./CheckoutForm.css"

const CheckoutForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')

    const handleConfirm = (e) =>{
        e.preventDefault()

        const userData = {
            nombre, telefono, email, confirmEmail
        }

        onConfirm(userData)
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleConfirm} className='form-group'>
                <label for="nombre" className='form-label'>
                    Nombre Completo
                    <input
                    id='nombre'
                    className='form-input'
                    type='text'
                    value={nombre}
                    onChange={({target})=> setNombre(target.value)}
                    />
                </label>
                <label for='telefono' className='form-label'>
                    Telefono
                    <input
                    className='form-input'
                    id='telefono'
                    type='tel'
                    value={telefono}
                    onChange={({target})=> setTelefono(target.value)}
                    />
                </label>
                <label for="email" className='form-label'>
                    Correo Electrónico
                    <input
                    className='form-input'
                    type='email'
                    value={email}
                    onChange={({target})=> setEmail(target.value)}
                    />
                </label>
                <label for="confirmEmail" className='form-label'>
                    Confirmar Correo Electrónico
                    <input
                    className='form-input'
                    type='email'
                    value={confirmEmail}
                    onChange={({target})=> setConfirmEmail(target.value)}
                    />
                </label>
                <div className='Label'>
                    <button type='submit' className='btn btn-info'>Crear Orden</button>
                </div>
                
                <Link to ='/' className='btn btn-light'>Ir a la tienda </Link>
            </form>
        </div>
    )
}

export default CheckoutForm
