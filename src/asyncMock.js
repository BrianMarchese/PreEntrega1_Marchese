import bebidas from './bebidas.json';

export const getProductos = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(bebidas)
        }, 500)
    })
}

export const getProductosByCategory = (productosCategory) =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(bebidas.filter(producto => producto.categoria === productosCategory))
        }, 500)
    })
} 

export const getProductosById = (itemId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(bebidas.find(producto => producto.id === parseInt(itemId)))
        }, 500)
    })

}
