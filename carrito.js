export 
function pedido() {
    carrito.forEach((producto) =>{
        const contenedorCompra = document.querySelector('#contenedorCompra')
        const {id, nombre, precio, cantidad, imgUrl} = producto;
        const div = document.createElement("div");
        div.innerHTML += `
        <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${imgUrl}"/>
        </div>
        <div>
         <p>Producto: ${nombre}</p>
         <p>Precio: $${precio}</p>
         <p>Cantidad: ${cantidad}</p>  
         <button onclick="eliminarProductos(${id})" class="button">Eliminar producto</button>
        </div>
        </div>
        `;
        contenedorCompra.appendChild(div);

    });
}