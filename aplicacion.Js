let contenedor = document.getElementById("contenedor");
let verCarrito = document.getElementById("verCarrito");
let modalContainer = document.getElementById("modal-container")


let carrito = [];


productos.forEach((producto) => {
  let tarjetaProducto = document.createElement('div')
  tarjetaProducto.className = 'card'
  tarjetaProducto.innerHTML = `
    <img class="card-img"src=${producto.imgUrl}>
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio}</p>
    <p>Quedan ${producto.cantidad} u.</p>
    <button class="boton" id="agregarBtn${producto.id}">Agregar al carrito</button>
  `
  contenedor.append(tarjetaProducto)

  let btnAgregar = document.getElementById(`agregarBtn${producto.id}`)
        
        btnAgregar.addEventListener("click", ()=>{
            carrito.push({
                id: producto.id,
                img: producto.imgUrl,
                nombre: producto.nombre,
                precio: producto.precio,
            });
           
        });     
})
let botones = document.getElementsByClassName('boton')


let carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || []

renderizarCarrito()

for (const boton of botones) {
  boton.onclick = (e) => {
    let productoBuscado = productos.find(producto => producto.id == e.target.id)

    let posicionProductoEnCarrito = carritoGuardado.findIndex(producto => producto.id == productoBuscado.id)

    if (posicionProductoEnCarrito != -1) {
      carritoGuardado[posicionProductoEnCarrito].unidades++
      carritoGuardado[posicionProductoEnCarrito].subtotal = carritoGuardado[posicionProductoEnCarrito].precioUnidad * carritoGuardado[posicionProductoEnCarrito].unidades
    } else {
      carritoGuardado.push({ id: productoBuscado.id, nombre: productoBuscado.nombre, precioUnidad: productoBuscado.precio, unidades: 1, subtotal: productoBuscado.precio })
    }

    Toastify({
      text: "This is a toast with offset",
      offset: {
        x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
        y: 100 // vertical axis - can be a number or a string indicating unity. eg: '2em'
      },
    }).showToast();

    localStorage.setItem('carrito', JSON.stringify(carritoGuardado))
    renderizarCarrito()
  }
}


/*verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display ="flex";
    let modalHeader = document.createElement('div');
    modalHeader.className = modal-header;
    modalHeader.innerHTML = `
    <h2 class="moda-header">Carrito.</2>
    `;
    modalContainer.append(modalHeader);
});

/*let botones = document.getElementsByClassName('boton')


let carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || []*/