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

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");


productos.forEach((producto) => {
    const {id, nombre, precio, cantidad, imgUrl} = producto
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
   
});

function agregarProducto(id){
    const item = productos.find((producto) => producto.id === id)
    carrito.push(item)
}

const mostrarCarrito = () => {
    const modalBody = document.querySelector(".modal .modal-body")

    carrito.forEach((producto) => {
        const {id, nombre, imgUrl, cantidad, precio} = producto
        modalBody.innerHTML += `
        <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${imgUrl}"/>
        </div>

        <div>
         <p>Producto: ${nombre}</p>
         <p>Precio: ${precio}</p>
         <p>Cantidad: ${cantidad}</p>  
         <button onclick="eliminarProductos(${id})" class="button">Eliminar producto</button>
        </div>
        </div>
        `
    })
    
}
