//document.addEventListener('DOMContentLoaded', () => 
  
const listaProductos = [ 
    {id: 1, nombre: "Blue Period", precio: 990, Stock:4, imgUrl: "./img/blueperiod1.jpg" },
    {id: 2, nombre: "Re:Zero", precio: 1000, Stock:3, imgUrl: "./img/unnamed-241.jpg" },
    {id: 3, nombre: "Banana Fish", precio: 1900, Stock:5, imgUrl: "./img/banana31-320-0.jpg" },
    {id: 4, nombre: "Tokyo Revenger", precio: 1200, Stock:9, imgUrl: "./img/tokyorevengers-320-0.jpg" },
    {id: 5, nombre: "Akame Ga Kill", precio: 1200, Stock:8,  imgUrl: "./img/akamegakill041-14-0.jpg" },
    {id: 6, nombre: "Amor de Gata", precio: 2000, Stock:2, imgUrl: "./img/amordegata11-f-0.jpg" },
    {id: 7, nombre: "Call Of The Night", precio: 1200, Stock:3, imgUrl: "./img/callofthenight11-3dc-0.jpg" },
    {id: 8, nombre: "Chainsaw Man", precio: 1200, Stock:3, imgUrl: "./img/chainsawman011-29a-0.jpg"},
    {id: 9, nombre: "Dandadan", precio: 1200, Stock:4, imgUrl: "./img/dandadan011.jpg" },
    {id: 10, nombre: "Hitorijime Boyfriend", precio: 1200, Stock:6, imgUrl: "./img/hitorijimeboyfriend1.jpg" },
    {id: 11, nombre: "Jujutsu Kaisen 01", precio: 1100,Stock:10, imgUrl: "./img/jujutsu01-94fb-0.jpg" },
    {id: 12, nombre: "Jujutsu Kaisen 11", precio: 1100, Stock:4,  imgUrl:  "./img/jujutsu11-0d3-0.jpg" },
    {id: 13, nombre: "Mushoku", precio: 1200, Stock:3,  imgUrl: "./img/mushoku11-215.jpg" },
    {id: 14, nombre: "One Piece  33", precio: 1200, Stock:5,  imgUrl: "./img/onepiece331-b3b-0.jpg" },
    {id: 15, nombre: "Oshinoko 1", precio: 1200, Stock:6,  imgUrl: "./img/oshinoko011-27d8-0.jpg" },
] 


let catalogo = document.getElementById("items")
let ListaCarrito =document.getElementById("carrito")
let carrito =[]






  listaProductos.forEach((prod) => {
     let container =document.createElement("div")
    //container.classList('card', 'col-sm-4')
    let CardBody = document.createElement("div")
    CardBody.classList.add("card-body")

    let cardTittle = document.createElement("h5")
    cardTittle.classList.add("card-title")
    cardTittle.innerText = prod.nombre

    let cardPrice = document.createElement("p")
    cardPrice.classList.add("card-text")
    cardPrice.innerText = "$${prod.precio}"


    let cardStock = document.createElement("p")
    cardStock.classList.add("card-text")
    cardStock.innerText = "Stock:${prod.stock}"



    //let cardButton = createElement("button")
    //cardButton.classList.add('btn, btn-primary')
    //cardButton.innerText = 'comprar'
    //cardButton.setAttribute('mark', prod.id)
    // cardButton.addEventListener('click', addProToCart)
    CardBody.appendChild(cardTittle)
    CardBody.appendChild(cardPrice)
    CardBody.appendChild(cardStock)
    Container.append(CardBody)
    //CardBody.append(cardButton)
    catalogo.appendChild(Container)
  })

  function addProdToCart(evento){
    Carrito.push(evento.target.getAttribute("mark"))
    renderizarCarrito()
  }

  function renderizarCarrito(){

    ListaCarrito.innerHTML = ''

   let carritoNoDuplicados = [...new Set(carrito)];

   carritoNoDuplicados.forEach((itemId) => {
    let item = listaProductos.filter((producto) => {
      return producto.id ===parseInt(itemId)
    })




    let unidadesItem = carrito.reduce((total, itemId) => {
      return itemId === item ? total += 1 : total;
  }, 0);
     
    
   

   let linea = document.createElement('li')
   linea.classList.add('list-group-item', 'text-right', 'mx-2')
   linea.innerText = `${unidadesItem}' . ${item[0].precio},0) - $${item[0].precio}`



   let botonVacio = document.createElement('button')
   botonVacio.classList.add('btn', 'btn-danger')
   botonVacio.innerText = 'X'
   botonVacio.dataset.item =itemId
   botonVacio.addEventListener('click', eliminarProducto)

   linea.append(botonVacio)
   listaProductos.append(linea)
  })
  
  totalValue.innerText = calcularPrecioTotal()

}

function botonVacio(evento){
let id = evento.target.dataset.item
carrito = carrito.filter((carritoId) => {
  return carritoId != id
})
renderizarCarrito()
}

function vaciarBoton(){
  carrito = []
  ListaCarrito.innerHTML =''
  totalValue.innerText = 0
}
function calcularPrecioTotal(){
  return carrito ((total, itemId) =>{
    let item = listaProductos.filteer ((producto) =>{
      return producto.id === parseInt(itemId)
    })
    return total + item[0].precio
  }, 0)
}