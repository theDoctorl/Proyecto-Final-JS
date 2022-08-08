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

let botonComprar = document.createElement("button");
botonComprar.innerHTML = `<button type="button" id="botonComprar" class="btn btn-warning">Comprar</button>`;
cantidadProductos.appendChild(botonComprar); 

let borrarCarrito = document.createElement("button");
borrarCarrito.innerHTML = `<button type="button" id="borrarCarrito" class="btn btn-warning">Vaciar Carrito</button>`;
cantidadProductos.appendChild(borrarCarrito); 





// boton de compra
document.getElementById("botonComprar").onclick = () => {
    

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



