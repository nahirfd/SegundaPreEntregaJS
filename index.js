const shopContent = document.getElementById("shopContent");

const verCarrito = document.getElementById("verCarrito");

const modalContainer = document.getElementById("modal-container");

let carrito = [];

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card"
  content.innerHTML = `
  <img src="${product.img}">
  <h3>${product.nombre}</h3>
  <p class="price"> Price: $${product.precio}</p>
  `;

  shopContent.append(content);

  let comprar = document.createElement("button")
  comprar.innerText = "Agregar al carrito"
  comprar.className = "comprar"
  content.append(comprar)

  comprar.addEventListener("click", () => {
    carrito.push({
      id: product.id,
      img: product.img,
      nombre: product.nombre,
      precio: product.precio,
    })
    console.log(carrito)
  })
});

  verCarrito.addEventListener("click", () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
  <h1 class="modal-header-tittle"> Carrito <h1>
  `;
  modalContainer.append(modalHeader)

  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button";

  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  })

  modalHeader.append(modalbutton);

  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
  <img src=" ${product.img}">
  <h3> ${product.nombre}<h3>
  <p> ${product.precio} </p>
  `;
    modalContainer.append(carritoContent)
  });

  const total = carrito.reduce((accum, el) => accum + el.precio, 0);

  const totalCarrito = document.createElement("div")
  totalCarrito.className = "total-content"
  totalCarrito.innerHTML = `total a pagar: $ ${total}`;
  modalContainer.append(totalCarrito);

});

