
    // Variables
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

    let carrito = document.getElementById('carrito');
    let total = document.getElementById('total');
    let botonVaciar = document.getElementById('boton-vaciar');
    let inputBusqueda = document.getElementById('busqueda')
    let botonBusqueda = document.getElementById('buscar')


    let miLocalStorage = window.localStorage;
   /** renderizarProductos(productos)
    botonBusqueda.onclick = () => {
        let productosFiltrados = productos.filter(producto => producto.nombre.includes(inputBusqueda.value))
        renderizarProductos(productosFiltrados)
    }*/
    // Funciones

    /**
    todos los productos a partir de la base de datos. No confundir con el carrito
    */
   
   // function renderizarProductos(productos)  {
        productosList.forEach((prod) => {
            let cardBody = document.createElement("div");
            cardBody.classList.add('card-Body')
            //tittle
            let cardTittle = createElement("h3");
            cardTittle.innerText = prod.nombre
            //precio
            let cardPrice = document.createElement("p")
            cardPrice.classList.add('card-text')
            cardPrice.innerText ='$${prod.precio}'
            //stock
            let cardCantidad = document.createElement("p")
            cardCantidad.classList.add('card-text')
            cardCantidad.innerText = 'Cantidad: ${prod.Cantidad}'
            //<img src=${producto.imgUrl}> 
            
        });    
            
           // conteiner.append(content);
        
           /** let comprar = document.createElement("button");
            comprar.innerText = "Agregar a Carrito";
            comprar.className = "comprar";
        
            content.append(comprar);
        
            comprar.addEventListener("click", () => {
                carrito.push({
                    id:producto.id,
                    img:producto.img,
                    nombre:producto.nombre,
                    precio:producto.precio,
                });
                
            });
           
        
   // };

    /**
    * Evento para añadir un producto al carrito de la compra
    
     function agregarACarrito(id) {
       
        
        let item = productos.find((productos) => productos.id === id)
        carrito.push(item)
     
        
        renderizarCarrito();
        
        
        let carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || []
    }
*/
    /**
    *  todos los productos guardados en el carrito
   
    function renderizarCarrito() {
       
         
         };
    
 */
    /**
    * Evento para borrar un elemento del carrito
    
    function borrarItemCarrito(evento) {
      
        const id = evento.target.dataset.item;
        
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
      
        renderizarCarrito();
       
        guardarCarritoEnLocalStorage();

    }*/

    /**
     * Calcula el precio total teniendo en cuenta los productos repetidos
     
    function calcularTotal() {
        // Recorremos el array del carrito 
        return carrito.reduce((total, itemProductos) => {
            // De cada elemento obtenemos su precio
            let miItem = productos.filter((itemProductos) => {
                return itemProductos.id === parseInt(item);
            });
            // Los sumamos al total
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }*/

    /**
    * Varia el carrito y vuelve a dibujarlo
    
    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
        // Borra LocalStorage
        localStorage.clear();

    }

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        // ¿Existe un carrito previo guardado en LocalStorage?
        if (miLocalStorage.getItem('carrito') !== null) {
            // Carga la información
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }*/

    // Eventos
    //botonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio* /
    