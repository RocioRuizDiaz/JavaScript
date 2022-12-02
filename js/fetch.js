
fetch('../api/productos.json')
.then(res => res.json())
.then(productos => {
    //Variables
    let carrito = []
    let total = 0
    const contenedorDeProductos = document.getElementById("contenedor-productos")
    const contenedorDeCarrito = document.getElementById("contenedor-carrito")

    productos.forEach((producto) => {
        const divProducto = document.createElement("div")
        divProducto.classList.add("divProducto")
        divProducto.innerHTML = `
        <img src= "${producto.imgUrl}" alt = "">
        <h4>${producto.nombre}</h4>
        <h5>Precio:$${producto.precio}<h5>
        <h5>Stock:${producto.stock}</h5>
        <button id= "agregar${producto.id}" class="botonAgregar">Agregar a carrito</button>
        `
        //APPENDS
        contenedorDeProductos.appendChild(divProducto)
        //funciones de carrito
        const agregarAlCarrito = (prodId) => {
            const item = productos.find((prod) => prod.id === prodId)
            carrito.push(item)
            verCarrito()
        }

        //BOTON AGREGAR

        const boton = document.getElementById(`agregar${producto.id}`)
        boton.classList.add("botonAgregar")
        boton.addEventListener("click", () => {
            Swal.fire({
                icon: 'success',
                title: 'Producto agregado',
                showConfirmButton: false,
                timer: 1500
        })
        agregarAlCarrito(producto.id)
     });
  
    })

//.catch(err => console.log(err))

// productos en carrito
const verCarrito = () => {

    contenedorDeCarrito.innerHTML = ""
    carrito.forEach((producto) => {
        const divCarrito = document.createElement("div")
        divCarrito.classList.add("divCarrito")
        divCarrito.innerHTML = `
        <img src= "${producto.imgUrl}" alt = "">
        <h4>${producto.nombre}</h4>
        <h5>Precio:$${producto.precio}</h5>
        <h5>Stock:${producto.stock}</h5>

        `
        //boton eliminar 
        const botonEliminar = document.createElement("button")
        botonEliminar.classList.add("botonEliminar")
        botonEliminar.innerText = "eliminar"
        botonEliminar.addEventListener("click", () => {
            eliminarDelCarrito(producto.id)

        })

        //appends

        divCarrito.appendChild(botonEliminar)
        contenedorDeCarrito.appendChild(divCarrito)
        //guardamos en localStorage
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
    )
    //Total compra
    const pTotal = document.getElementById("precio-total")
    pTotal.innerText = carrito.reduce((contador, producto) => contador + producto.precio, 0)
    //Contador productos
    const contador = document.getElementById("contador-carrito")
    contador.innerText = carrito.length
} 

//FUNCIONES DE CARRITO

//BOTON VACIAR
const borrarCarrito = document.getElementById("boton-vaciar")
borrarCarrito.addEventListener("click", () => {
    Swal.fire({
        title: 'Estas seguro?',
        text: "No podrás revertir esto.!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
        if (result.isConfirmed) {
            swal.fire(
                'Éxito',
                'Su carrito ha sido eliminado',
                
            )
            carrito.length = 0
            verCarrito()
            localStorage.removeItem("carrito")
        }
    })

})

//BOTON ELIMINAR
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    verCarrito()
}


}
)
