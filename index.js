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
while (option < listaYerbas.length) {

  switch (option) {

    case "1":

    const stock= []

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

      pagar();

      break;

    case "5":

      break;

    default:

      console.log("Opción inválida.");
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
  const stock = listaYerbas.map(objeto => {
    return {
      id: objeto.id,
      sabor: objeto.sabor,
      precio: objeto.precio
    };
  });
}


function AgregarAlCarro(productoComprado) {
  carritoFlorentina.push(productoComprado);
}

function mostrarCarrito() {
  const carrito = carritoFlorentina.map(objeto => {
    return {
      id: objeto.id,
      sabor: objeto.sabor,
      precio: objeto.precio
    };
  });

  console.log(carrito);
  
}
/* const carrito = carritoFlorentina.map(objeto => objeto.precio);
console.log(carrito) */


function pagar() {
  if (carritoFlorentina.length === 0) {
    console.log("El carrito está vacío.");
    return;
  } else {
    let total = carritoFlorentina.reduce((acum, p) => {
      return acum + p.precio
    }, 0)
  }
  console.log("El total a pagar es: $" + total)
}
