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
totalCompra.innerHTML = "<h3>Total: </h3>"
seccionCarrito.appendChild(totalCompra);


let montoTotalCompra = document.createElement("h3");
montoTotalCompra.innerText = "$0";
totalCompra.appendChild(montoTotalCompra);


let cantidadProductos = document.createElement("div");
cantidadProductos.innerHTML = "<h5>Cantidad de productos: </h5>"
seccionCarrito.appendChild(cantidadProductos);

let cantProducts = document.createElement("h5");
cantProducts.innerText = "0";
cantidadProductos.appendChild(cantProducts); 

let borrarCarrito = document.createElement("button");
borrarCarrito.innerHTML = `<button type="button" id="borrarCarrito" class="btn btn-warning">Vaciar Carrito</button>`;
cantidadProductos.appendChild(borrarCarrito); 

//Vaciar Carrito.
document.getElementById("borrarCarrito").onclick = () =>{
    carrito = [];
    total = 0;
    montoTotalCompra.innerText = "$" + total;
    cantProducts.innerText = carrito.length;
};



// funciones del carrito.
function agregarAlCarrito (id){

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
