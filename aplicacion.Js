let productos = [ 
    {id: 1, nombre: "Blue Period", precio: 990,  imgUrl: "./img/blueperiod1.jpg" },
    {id: 2, nombre: "Re:Zero", precio: 1000,  imgUrl: "./img/unnamed-241.jpg" },
    {id: 3, nombre: "Banana Fish", precio: 1900,  imgUrl: "./img/banana31-320-0.jpg" },
    {id: 4, nombre: "Tokyo Revenger", precio: 1200,  imgUrl: "./img/tokyorevengers-320-0.jpg" },
    {id: 5, nombre: "Akame Ga Kill", precio: 1200,   imgUrl: "./img/akamegakill041-14-0.jpg" },
    {id: 6, nombre: "Amor de Gata", precio: 2000,  imgUrl: "./img/amordegata11-f-0.jpg" },
    {id: 7, nombre: "Call Of The Night", precio: 1200,  imgUrl: "./img/callofthenight11-3dc-0.jpg" },
    {id: 8, nombre: "Chainsaw Man", precio: 1200,  imgUrl: "./img/chainsawman011-29a-0.jpg"},
    {id: 9, nombre: "Dandadan", precio: 1200, imgUrl: "./img/dandadan011.jpg" },
    {id: 10, nombre: "Hitorijime Boyfriend", precio: 1200,  imgUrl: "./img/hitorijimeboyfriend1.jpg" },
    {id: 11, nombre: "Jujutsu Kaisen 01", precio: 1100, imgUrl: "./img/jujutsu01-94fb-0.jpg" },
    {id: 12, nombre: "Jujutsu Kaisen 11", precio: 1100,   imgUrl:  "./img/jujutsu11-0d3-0.jpg" },
    {id: 13, nombre: "Mushoku", precio: 1200,   imgUrl: "./img/mushoku11-215.jpg" },
    {id: 14, nombre: "One Piece  33", precio: 1200,  imgUrl: "./img/onepiece331-b3b-0.jpg" },
    {id: 15, nombre: "Oshinoko 1", precio: 1200,   imgUrl: "./img/oshinoko011-27d8-0.jpg" },
] 


let modalContenedor = document.getElementById("modalContenedor")
let inputBusqueda = document.getElementById('busqueda')
let botonBusqueda = document.getElementById('buscar')
let contenedor = document.getElementById("#contenedor");
let carritoContenedor = document.getElementById("#carritoContenedor");
let vaciarCarrito = document.getElementById("#vaciarCarrito");
let precioTotal = document.getElementById("#precioTotal");
let activarFuncion = document.getElementById("#activarFuncion");
let procesarCompra = document.getElementById("#procesarCompra");
let totalProceso = document.getElementById("#totalProceso");
let formulario = document.getElementById('#procesar-pago')


//LOCAL
if (localStorage.getItem('carrito')) {
    carritoGuardado = JSON.parse(localStorage.getItem('carrito'))
  }
botonBusqueda.onclick = () => {
    let productosFiltrados = productos.filter(producto => producto.nombre.includes(inputBusqueda.value))
    renderizarProductos(productosFiltrados)
  }
  inputBusqueda.oninput = () => {
    let productosFiltrados = productos.filter(producto => producto.nombre.includes(inputBusqueda.value))
    renderizarProductos(productosFiltrados)
  }

  if (procesarCompra) {
    procesarCompra.addEventListener("click", () => {
      if (carrito.length === 0) {
        Swal.fire({
          title: "¡Tu carrito está vacio!",
          text: "Compra algo para continuar con la compra",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      } else {
        location.href = "compra.html";
      }
    });
  }
  //CARD
productos.forEach((producto) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src=${producto.imgUrl}> 
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio} </p>
    
    `;
    contenedorProductos.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Agregar a Carrito";
    comprar.className = "comprar";

    content.append(comprar);

   
   
});
 //RENDERIZAR PRODUCTO
function renderizarProductos(productosFiltrados) {
    let productosARenderizar = productos
    if (productosFiltrados) {
      productosARenderizar = productosFiltrados
    }
    contenedorProductos.innerHTML = ''
    for (const producto of productosARenderizar) {
  
      let mensajeStock
      if (producto.Stock < 5) {
        mensajeStock = 'Ultimas unidades'
      } else {
        mensajeStock = `Quedan ${producto.Stock} u.`
      }
  
    let card = document.createElement('div')
      card.className = 'card'
      card.innerHTML = `
      <img src=${producto.imgUrl}>
        <h3>${producto.nombre}</h3>
        <h4>$${producto.precio}</h4>
        <p>${producto.cantidad}</p>
        <p>${producto.Stock}</p>
        <button class="boton" id=${producto.id}>Agregar al carrito</button>
      `
      contenedorProductos.append(card)
  }
}
  //RENDERIZAR CARRITO
function renderizarCarrito() {
    carrito.innerHTML = `
      <div class="itemCarrito">
        <p>nombre</p>
        <p>precioUnidad</p>
        <p>unidades</p>
        <p>subtotal</p>
      </div>
    `
 let total = 0
    for (const item of carritoGuardado) {
      total += item.subtotal
      carrito.innerHTML += `
        <div class="itemCarrito">
          <p>${item.nombre}</p>
          <p>${item.precioUnidad}</p>
          <p>${item.cantidad}</p>
          <p>${item.subtotal}</p>
        </div>
      `
    }
    carrito.innerHTML += `
      <div class="itemCarrito">
        <h3>total: ${total}</h3>
      </div>
    `
  }

