let productos = [
    {id: 1, nombre: "Blue Period", precio: 990, cantidad: 2, imgUrl: "./img/blueperiod1.jpg" },
    {id: 2, nombre: "Re:Zero", precio: 1000, cantidad:2, imgUrl: "./img/unnamed-241.jpg" },
    {id: 3, nombre: "Banana Fish", precio: 1900, cantidad: 3, imgUrl: "./img/banana31-320-0.jpg" },
    {id: 4, nombre: "Tokyo Revenger", precio: 1200, cantidad: 1, imgUrl: "./img/tokyorevengers-320-0.jpg" },
    {id: 5, nombre: "Akame Ga Kill", precio: 1200, cantidad:3,  imgUrl: "./img/akamegakill041-14-0.jpg" },
    {id: 6, nombre: "Amor de Gata", precio: 2000, cantidad: 2, imgUrl: "./img/amordegata11-f-0.jpg" },
    {id: 7, nombre: "Call Of The Night", precio: 1200, cantidad: 2, imgUrl: "./img/callofthenight11-3dc-0.jpg" },
    {id: 8, nombre: "Chainsaw Man", precio: 1200, cantidad: 4, imgUrl: "./img/chainsawman011-29a-0.jpg"},
    {id: 9, nombre: "Dandadan", precio: 1200, cantidad: 1, imgUrl: "./img/dandadan011.jpg" },
    {id: 10, nombre: "Hitorijime Boyfriend", precio: 1200, cantidad: 1, imgUrl: "./img/hitorijimeboyfriend1.jpg" },
    {id: 11, nombre: "Jujutsu Kaisen 01", precio: 1100, cantidad: 6, imgUrl: "./img/jujutsu01-94fb-0.jpg" },
    {id: 12, nombre: "Jujutsu Kaisen 11", precio: 1100, cantidad:4,  imgUrl:  "./img/jujutsu11-0d3-0.jpg" },
    {id: 13, nombre: "Mushoku", precio: 1200, cantidad:2,  imgUrl: "./img/mushoku11-215.jpg" },
    {id: 14, nombre: "One Piece  33", precio: 1200, cantidad:5, imgUrl: "./img/onepiece331-b3b-0.jpg" },
    {id: 15, nombre: "Oshinoko 1", precio: 1200, cantidad: 1, imgUrl: "./img/oshinoko011-27d8-0.jpg" },

];

let carrito = [];

let contenedor = document.getElementById("#contenedor");
let carritoContenedor = document.getElementById("#carritoContenedor");
let vaciarCarrito = document.getElementById("#vaciarCarrito");
let precioTotal = document.getElementById("#precioTotal");
let functionActive = document.getElementById("#functionActive");
let procesarCompra = document.getElementById("#procesarCompra");
let compraTotal = document.getElementById("#compraTotal");
let formulario = document.getElementById('#procesar-pago');

    if (functionActive) {
        functionActive.addEventListener("click",  procesarPedido);

    }

    document.addEventListener("DOMContentLoaded", () => {
        carrito = JSON.parse(localStorage.getItem("carrito")) || [];
       
      });
      
    if (vaciarCarrito) {
        vaciarCarrito.addEventListener("click", () => {
            carrito.length = [];
            mostrarCarrito();
        });
    }

    if (procesarCompra) {
        procesarCompra.addEventListener("click", () => {
            if (carrito.length === 0) {
                Swal.fire({
                    tittle: "El carrito esta vacio",
                    Text: "Compra un producto para continuar",
                    icon: "error",
                    confirmButtonText: "Acptar",
                });
            } else {
                location.href = "compra.html";
            }
        });
    }


productos.forEach((producto) => {
    let {id, nombre, precio, cantidad, imgUrl} = producto
    if (contenedor) {
        contenedor.innerHTML += `
    <div class="card">
        <img class="card-img" src="${imgUrl}">
        <div>
            <h3>${nombre}</h3>
            <p class="card-text">precio:${precio}</p>
            <p class="card-text">cantidad:${cantidad}</p>
            <button class="button" onclick="agregarProducto(${id})">Agregar al Carrito</button>
        </div>
     </div>
     `;
    }
});

let agregarProducto = (id) => {
    let existe = carrito.some(producto => producto.id === id)

    if(existe){
       let producto = carrito.map(producto => {
            if(producto.id === id){
                producto.cantidad++
            }
        })
    } else {
        let item = productos.find((producto) => producto.id === id)
        carrito.push(item)
    }
    mostrarCarrito()
   
};

let mostrarCarrito = () => {
    let modalBody = document.querySelector(".modal .modal-body");
    if (modalBody) {
        modalBody.innerHTML = "";
        carrito.forEach((producto) => {
            const { id, nombre, precio, cantidad, imgUrl} = producto;
            modalBody.innerHTML += `
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
        });
    }

    if (carrito.length === 0) {
        modalBody.innerHTML = `
        <p class="text-center>Todavia no agregaste nada</p>
        `;
    } else {
    carritoContenedor.textContent = carrito.length;
    }
    


    if (precioTotal) {
        precioTotal.innertext = carrito.reduce((acc, producto) => acc + producto.cantidad * producto.precio,
        0);
    }

   
};

    function guardarStorage () {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    function eliminarProducto(id) {
        let mangaId = id;
        carrito = carrito.filter((mangas) = mangas.id !== mangaId);
        mostrarCarrito();
    }
    
function pedido() {
    carrito.forEach((producto) =>{
        let contenedorCompra = document.querySelector('#contenedorCompra')
        let {id, nombre, precio, cantidad, imgUrl} = producto;
        let div = document.createElement("div");
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

    function procesarPedido() {
        carrito.forEach((producto) => {
            let listaCompra = document.querySelector("#lista-compra tbody");
            let {id, nombre, precio, cantidad, imgUrl} = producto;
            if (listaCompra) {
               let row = document.createElement("tr");
                row.innerHTML += `
                <td>
                <img class="img-fluid img-carrito" src="${imgUrl}"/>
                <td>
                <td>${nombre}<td/>
                <td>${precio}<td/>
                <td>${cantidad}<td/>
                <td>${precio * cantidad}<td/>
                `;
                listaCompra.appendChild(row);
            }
        })
        totalPrecio.innertext = carrito.reduce(
            (acc, producto) => acc + producto.cantidad * producto.precio, 
            0
            );
    }
    function enviarCompra(e){
        e.preventDefault()
        let cliente = document.querySelector('#cliente').value 
        let email = document.querySelector('#correo').value 

        if(email === '' || cliente == ''){
            Swal.fire({
                title: "complete su email y nombre",
                text: "Rrellene el formulario",
                icon:"Error",
                confirmButtonText:"Acepta",
            })
        } else {
            let btn = document.getElementById('button');

            
        }
    }