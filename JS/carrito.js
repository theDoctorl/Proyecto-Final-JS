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

let listaProductos = document.createElement("ul");
listaProductos.className = "listaProductos";
cantidadProductos.appendChild(listaProductos);


let botonesCarrito = document.createElement("div");
botonesCarrito.className = "botoneraCarrito";
cantidadProductos.appendChild(botonesCarrito);

let botonComprar = document.createElement("div");
botonComprar.innerHTML = `<button type="button" id="botonComprar" class="btn btn-warning">Comprar</button>`;
botonesCarrito.appendChild(botonComprar); 

let borrarCarrito = document.createElement("div");
borrarCarrito.innerHTML = `<button type="button" id="borrarCarrito" class="btn btn-warning">Vaciar Carrito</button>`;
botonesCarrito.appendChild(borrarCarrito); 










// boton de compra, integrando STRIPE como pasarela de pagos.
let stripe = Stripe("pk_test_51LV0pmFso8aZRLtvcEZ6ELXUxlehARPsL4Cxqs8PHLtLIymsZeqwmEpOr0TyQoFvCGirSThgzjSBiEhwaAuUZOjm00iFT9OF6w");

document.getElementById("botonComprar").onclick = () => {
  stripe.redirectToCheckout({
    lineItems: [
        {
            price: "price_1LV15kFso8aZRLtvjlOPVt4I",
            quantity: 1,
        },
    ],
    mode: "subscription",
    successUrl: "https://www.linkedin.com/in/federico-leiva-2466641a9/",
    cancelUrl: "http://127.0.0.1:5500/index.html",
}).then(function(result){
    alert(result);
});  
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
            localStorage.clear();
            carrito = [];
            total = 0;
            montoTotalCompra.innerText = "$" + total;
            cantProducts.innerText = carrito.length;
            listaProductos.innerHTML = "";
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
    let descripcionProductos = document.createElement("li");
        listaProductos.appendChild(descripcionProductos);
    for (const lista of carrito) {
      descripcionProductos.innerHTML = `<li>${lista.nombre}</li>`;
      };
    
};