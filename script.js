const productos = [
    {nombre: "Blue Period", precio: 990 },
    {nombre: "Re:Zero", precio: 1000 },
    {nombre: "Banana Fish", precio: 1900 },
    {nombre: "Tokyo Revenger", precio: 1200 },
    {nombre: "Dr. Stone", precio: 1100 },
];

let carrito= []

let eleccionDeProductos = prompt("hola deseo adquirir algun producto si o no?")

while(eleccionDeProductos != "si" && eleccionDeProductos != "no"){
    alert("ingrese una oprcio si o no")
    eleccionDeProductos = prompt("hola deseo adquirir algun producto?")
}

if(eleccionDeProductos =="si"){
    alert("nuestra lista de producto")
    let todoslosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert(todoslosProductos.join(" \n"))
}  else if (eleccionDeProductos == "no"){
    alert("gracias, hasta la proxima!")
}
while(eleccionDeProductos != "no"){
    let producto = prompt("agregue un producto a su carrito")
    let precio = 0

    if(producto =="Blue Period" || producto =="Re:Zero" || producto == "Banana Fish" ||
     producto == "Tokyo Revenger" || producto == "Dr. Stone"){
        switch(producto) {
            case "Blue Period":
                precio = 990;
                break;
            case "Re:Zero":
                precio = 1000;
                break;
            case "Banana Fish":
                precio = 1900;
                break;
            case "Tokyo Revenger":
                precio = 1200;
                break; 
            case "Dr. Stone":
                precio = 1100;
                break;           
        }
        let unidades = parseInt(prompt("cuantas unidades desea llevar?"))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
     } else {
        alert("ese producto no esta disponible")
     }

     eleccionDeProductos = prompt("desea seguir comprando?")

     if(eleccionDeProductos === "no"){
        alert("gracias por su compra! vuelva pronto")
        carrito.forEach((carritoFinal) =>{
            console.log(`producto: ${carritoFinal.producto}, unidades ${carritoFinal.unidades},
            total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
     }
}
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`su total de compra es ${total}`)