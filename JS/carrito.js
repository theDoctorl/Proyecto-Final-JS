// div del carrito.
let divCarrito = document.createElement("div");
divCarrito.className = "carrito";
divCarrito.id = "carritos";
padreItem.append(divCarrito);


//Definicion del Array carrito y manejo del DOM para crearlo.
let carrito = [];
let productosPrecio;
let seccionCarrito = document.getElementById("carritos");


let totalCompra = document.createElement("div");
totalCompra.className = "card shadow p-3 mb-5 bg-body rounded cartaCarrito";
totalCompra.innerHTML = "<h3>Total: </h3>"
seccionCarrito.appendChild(totalCompra);


let montoTotalCompra = document.createElement("h3");
montoTotalCompra.innerText = "$0";
totalCompra.appendChild(montoTotalCompra);


let cantidadProductos = document.createElement("div");
cantidadProductos.className = "card-body cuerpoCartaCarrito";
cantidadProductos.innerHTML = `<h5 class="card-title">Cantidad de productos: </h5>`;
totalCompra.appendChild(cantidadProductos);

let cantProducts = document.createElement("h5");
cantProducts.className = "card-text"
cantProducts.innerText = "0";
cantidadProductos.appendChild(cantProducts); 

let botonesCarrito = document.createElement("div");
botonesCarrito.className = "botoneraCarrito";
cantidadProductos.appendChild(botonesCarrito);

let botonComprar = document.createElement("div");
botonComprar.innerHTML = `<button type="button" id="botonComprar" class="btn btn-warning">Comprar</button>`;
botonesCarrito.appendChild(botonComprar); 

let borrarCarrito = document.createElement("div");
borrarCarrito.innerHTML = `<button type="button" id="borrarCarrito" class="btn btn-warning">Vaciar Carrito</button>`;
botonesCarrito.appendChild(borrarCarrito); 





// boton de compra
document.getElementById("botonComprar").onclick = () => {
  Swal.fire({
    title: 'Pasar a finalizar la compra?',
    text: `Puede pagar en cuotas sin interes!`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Finalizar compra!'
  }).then((result) => {
    if (result.isConfirmed) {
        carrito = [];
        total = 0;
        montoTotalCompra.innerText = "$" + total;
        cantProducts.innerText = carrito.length;
      Swal.fire(
        'Muchas gracias!',
        'Te redireccionaremos a la pasarela de pagos.',
        'success'
      )
    }
  })

};




//Vaciar Carrito.
document.getElementById("borrarCarrito").onclick = () =>{
    Swal.fire({
        title: 'Esta seguro?',
        text: "Esta accion no se puede revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Vaciar!'
      }).then((result) => {
        if (result.isConfirmed) {
            carrito = [];
            total = 0;
            montoTotalCompra.innerText = "$" + total;
            cantProducts.innerText = carrito.length;
          Swal.fire(
            'Vacio!',
            'Se vacio el carrito de compras.',
            'success'
          )
        }
      })
    
};



// funciones del carrito.
function agregarAlCarrito (id){

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Su producto se agrego al carrito!',
        showConfirmButton: false,
        timer: 600
      })
            carrito.push(productosPrecio.find(p=>p.id==id));
            localStorage.setItem("carrito", JSON.stringify(carrito));
            calcularTotalCarrito();
};

function calcularTotalCarrito() {
    let total = 0;
    for (const productosPrecio of carrito) {
        total+=productosPrecio.precio;
    }
    montoTotalCompra.innerText = "$" + total;
    cantProducts.innerText = carrito.length;
    
};



