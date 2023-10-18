//mensaje bienvenida
alert("Bienvenido al carrito de compras de Florentina")

//Lista de productos en stock
const listaYerbas = [
  { id: "1", sabor: "manzanila", precio: 2500 },
  { id: "2", sabor: "menta y poleo", precio: 2500 },
  { id: "3", sabor: "burrito y peperina", precio: 2500 },
  { id: "4", sabor: "citric", precio: 2500 },
]

let option = prompt(
  "Ingrese una opción:\n\n" +
  "1. Ver productos\n" +
  "2. Agregar al carrito\n" +
  "3. Ver carrito\n" +
  "4. Comprar\n" +
  "5. Salir"
);

//declaro carrito vacio
let carritoFlorentina = []

//Hasta que el usuario no ponga salir (5), la compra estara activa
while (option <= listaYerbas.length) {

  switch (option) {

    case "1":

      const stock = []

      mostrarProductos();

      break;

    case "2":

      let productoComprado = prompt("Ingrese el número del producto:");

      if (productoComprado < 1 || productoComprado > listaYerbas.length) {
        console.log("Opción inválida.");

        break;
      }

      AgregarAlCarro(listaYerbas[productoComprado - 1]);

      break;

    case "3":

      mostrarCarrito();

      break;

    case "4":


      pagarCuenta();

      break;

    case "5":

      break;
  }

  option = prompt(
    "Ingrese una opción:\n\n" +
    "1. Ver productos\n" +
    "2. Agregar al carrito\n" +
    "3. Ver carrito\n" +
    "4. Comprar\n" +
    "5. Salir"
  );
}

function mostrarProductos() {
  let listaStock = "Productos de la tienda: \n";
  for (let index = 0; index < listaYerbas.length; index++) {
    listaStock = listaStock + `ID: ${listaYerbas[index].id}, Sabor: ${listaYerbas[index].sabor}, Precio:$ ${listaYerbas[index].precio}\n`
  }
  alert(listaStock)
}


function AgregarAlCarro(productoComprado) {
  carritoFlorentina.push(productoComprado);
}

function mostrarCarrito() {
  let listaStock = "Productos en el carrito: \n";
  for (let index = 0; index < carritoFlorentina.length; index++) {
    listaStock = listaStock + `ID: ${carritoFlorentina[index].id}, Sabor: ${carritoFlorentina[index].sabor}, Precio:$ ${carritoFlorentina[index].precio}\n`
  }
  alert(listaStock)
};


function pagarCuenta() {
  const totalCarrito = carritoFlorentina.reduce((acumulador, objetoActual) => {
    return acumulador + objetoActual.precio
  }, 0)
  alert("El total a pagar es:$ " + totalCarrito);
}


/* carritoFlorentina.forEach((p, i) =>{
  console.log(`${i}:${p}`)
}) */
