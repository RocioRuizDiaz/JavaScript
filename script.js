alert("bienvenido/a a cine Hoyts");

let pelicula1 = "Sonrie";
let pelicula2 = "El chef";
let pelicula3 = "El perro samurai";
let pelicula4 = "Amsterdam";
let precioEntrada = 600;
let totalEntradas = parseInt(``);
let precioTotalCompra = parseFloat(``);

function multiplicacion(number1, number2) {
  let resultado = number1 * number2;
  return resultado;
}

let seleccionDePelicula = parseInt(
  prompt(
    "Elija la pelicula que desea ver:\n" +
      `1_` +
      pelicula1 +
      `\n` +
      `2_` +
      pelicula2 +
      `\n` +
      `3_` +
      pelicula3 +
      `\n` +
      `4_` +
      pelicula4 +
      `\n` +
      `9__SALIR`
  )
);

if (seleccionDePelicula == 1) {
  alert(`usted selecciono: ` + pelicula1);
  totalEntradas = parseInt(
    prompt(
      `El valor de la entrada es $` + precioEntrada + ` Cuantas entradas desea?`
    )
  );
  precioTotalCompra = alert(
    `usted selecciono ` +
      totalEntradas +
      ` con un valor total de $` +
      multiplicacion(precioEntrada, totalEntradas)
  );
} else if (seleccionDePelicula == 2) {
  alert(`usted selecciono: ` + pelicula2);
  totalEntradas = parseInt(
    prompt(
      `El valor de la entrada es $` + precioEntrada + ` Cuantas entradas desea?`
    )
  );
  precioTotalCompra = alert(
    `usted selecciono ` +
      totalEntradas +
      ` con un valor total de $` +
      multiplicacion(precioEntrada, totalEntradas)
  );
} else if (seleccionDePelicula == 3) {
  alert(`usted selecciono: ` + pelicula3);
  totalEntradas = parseInt(
    prompt(
      `El valor de la entrada es $` + precioEntrada + ` Cuantas entradas desea?`
    )
  );
  precioTotalCompra = alert(
    `usted selecciono ` +
      totalEntradas +
      ` con un valor total de $` +
      multiplicacion(precioEntrada, totalEntradas)
  );
} else if (seleccionDePelicula == 4) {
  alert(`usted selecciono: ` + pelicula4);
  totalEntradas = parseInt(
    prompt(
      `El valor de la entrada es $` + precioEntrada + ` Cuantas entradas desea?`
    )
  );
  precioTotalCompra = alert(
    `usted selecciono ` +
      totalEntradas +
      ` con un valor total de $` +
      multiplicacion(precioEntrada, totalEntradas)
  );
} else if (seleccionDePelicula == 9) {
  alert(`Muchas gracias por su visita`);
}
alert("Ingrese sus datos para adquirir las entradas ");

let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let edad = prompt("ingrese su edad");
let pago = parseInt(prompt("ingrese nro de su tarjeta"));
let vencimiento = prompt("ingrese fecha de vencimiento mm/yy");
let ccv = parseInt(prompt("ingre su codigo de seguridad"));
while (
  nombre == "" ||
  apellido == "" ||
  isNaN(edad) ||
  isNaN(pago) ||
  isNaN(vencimiento) ||
  isNaN(ccv)
) {
  alert("revise que los datos sean correctos");
  nombre = prompt("ingrese su nombre");
  apellido = prompt("ingrese su apellido");
  edad = prompt("ingrese su edad");
  pago = parseInt(prompt("ingrese nro de su tarjeta"));
  vencimiento = prompt("ingrese fecha de vencimiento mm/yy");
  ccv = parseInt(prompt("ingre su codigo de seguridad"));
}
alert(
  "sus datos han sido ingresado correctamente \n" +
    nombre +
    ` ` +
    apellido +
    `\n` +
    `Esperamos que disfute su funcion`
);

alert(`muchas gracias por su compra`);
