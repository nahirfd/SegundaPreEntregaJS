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

//Hasta que el usuario no ponga salir, la compra estara activa
while (option < listaYerbas.length) {
    let option = prompt(
        "Ingrese una opción:\n\n" +
        "1. Ver productos\n" +
        "2. Agregar al carrito\n" +
        "3. Ver carrito\n" +
        "4. Comprar\n" +
        "5. Salir"
    );
    switch (option) {
        case "1":
            mostrarProductos();
            break;
        case "2":
            let productoComprado = prompt("Ingrese el número del producto:");

            if (productoComprado < 1 || productoComprado > listaYerbas.length) {
                alert("Opción inválida.");
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
            alert("Opción inválida.");
    }
}

function mostrarProductos() {
    const stock = listaYerbas.map((p) => {
    alert("Los productos en stock son: " + stock)
})
}

function AgregarAlCarro(productoComprado) {
    carritoFlorentina.push(productoComprado);
}

function mostrarCarrito() {
    const carrito = carritoFlorentina.map((p) => {
    alert("Los productos en el carrito son: " + carrito)
  })
}
  function pagar() {
    if (carritoFlorentina.length === 0) {
      alert("El carrito está vacío.");
      return;
    } else {
        let total= carritoFlorentina.reduce ((acum,p) =>{
            return acum + p.precio
        },0)
    }
    alert("El total a pagar es: $" + total)
  }
