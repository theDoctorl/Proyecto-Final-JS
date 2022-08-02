// funciones para crear las tarjetas trayendo los productos con fetch desde un json
function crearTarjetasBoca(){
    inicio.innerHTML = ("");
    tarjetas.innerHTML = ("");
    tarjetas.className = "tarjetas"
    contenedorInicio.remove(container);
    fetch("./data/data-bocajrs.json")
    .then(resp =>resp.json())
    .then(productos => {
            productos.forEach(producto => {
                let item = document.createElement("div");
                item.className = "productos"
                item.innerHTML = `  
                                    <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                                    <a id="${producto.idImagen}" href="${producto.img2}"><img src="${producto.img}" class="card-img-top" alt="..."></a>
                                    <div class="card-body">
                                     <h5 class="card-title">$${producto.precio}</h5>
                                     <p class="card-text">${producto.nombre}</p>
                                     <button type="button" id="${producto.id}" class="btn btn-warning">Agregar al carrito</button>`;
        
                    tarjetas.append(item);
                    padreItem.append(tarjetas)
                    padreItem.append(divCarrito);
                    document.getElementById(`${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);

                
            })
            productosPrecio = productos
        
        
    }).catch(error => console.log(error));
};
function crearTarjetasRiver(){
    inicio.innerHTML = ("");
    tarjetas.innerHTML = ("");
    tarjetas.className = "tarjetas";
    contenedorInicio.remove(container);
    fetch("./data/data-riverp.json")
    .then(resp =>resp.json())
    .then(productos => {
            productos.forEach(producto => {
                let item = document.createElement("div");
                item.className = "productos"
                item.innerHTML = `  
                                    <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                                    <a id="${producto.idImagen}" href="${producto.img2}"><img src="${producto.img}" class="card-img-top" alt="..."></a>
                                    <div class="card-body">
                                     <h5 class="card-title">$${producto.precio}</h5>
                                     <p class="card-text">${producto.nombre}</p>
                                     <button type="button" id="${producto.id}" class="btn btn-warning">Agregar al carrito</button>`;
        
                                     tarjetas.append(item);
                                     padreItem.append(tarjetas)
                                     padreItem.append(divCarrito);
                                     document.getElementById(`${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);

                                     
            })
            productosPrecio = productos
        
        
    }).catch(error => console.log(error));
};
function crearTarjetasArg(){
    inicio.innerHTML = ("");
    tarjetas.innerHTML = ("");
    tarjetas.className = "tarjetas";
    contenedorInicio.remove(container);
    fetch("./data/data-arg.json")
    .then(resp =>resp.json())
    .then(productos => {
            productos.forEach(producto => {
                let item = document.createElement("div");
                item.className = "productos"
                item.innerHTML = `  
                                    <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                                    <a id="${producto.idImagen}" href="${producto.img2}"><img src="${producto.img}" class="card-img-top" alt="..."></a>
                                    <div class="card-body">
                                     <h5 class="card-title">$${producto.precio}</h5>
                                     <p class="card-text">${producto.nombre}</p>
                                     <button type="button" id="${producto.id}" class="btn btn-warning">Agregar al carrito</button>`;
        
                                     tarjetas.append(item);
                                     padreItem.append(tarjetas)
                                     padreItem.append(divCarrito);
                                     document.getElementById(`${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);

                                     
            })
        
            productosPrecio = productos
        
    }).catch(error => console.log(error));
};
    
function crearTarjetasRestAmerica(){
    inicio.innerHTML = ("");
    tarjetas.innerHTML = ("");
    tarjetas.className = "tarjetas"
    contenedorInicio.remove(container);
    fetch("./data/data-america.json")
    .then(resp =>resp.json())
    .then(productos => {
            productos.forEach(producto => {
                let item = document.createElement("div");
                item.className = "productos"
                item.innerHTML = `  
                                    <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                                    <a id="${producto.idImagen}" href="${producto.img2}"><img src="${producto.img}" class="card-img-top" alt="..."></a>
                                    <div class="card-body">
                                     <h5 class="card-title">$${producto.precio}</h5>
                                     <p class="card-text">${producto.nombre}</p>
                                     <button type="button" id="${producto.id}" class="btn btn-warning">Agregar al carrito</button>`;
        
                    tarjetas.append(item);
                    padreItem.append(tarjetas)
                    padreItem.append(divCarrito);
                    document.getElementById(`${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);

                
            })
        
            productosPrecio = productos
        
    }).catch(error => console.log(error));
};

function crearTarjetasRestEuropa(){
    inicio.innerHTML = ("");
    tarjetas.innerHTML = ("");
    tarjetas.className = "tarjetas"
    contenedorInicio.remove(container);
    fetch("./data/data-europa.json")
    .then(resp =>resp.json())
    .then(productos => {
            productos.forEach(producto => {
                let item = document.createElement("div");
                item.className = "productos"
                item.innerHTML = `  
                                    <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                                    <a id="${producto.idImagen}" href="${producto.img2}"><img src="${producto.img}" class="card-img-top" alt="..."></a>
                                    <div class="card-body">
                                     <h5 class="card-title">$${producto.precio}</h5>
                                     <p class="card-text">${producto.nombre}</p>
                                     <button type="button" id="${producto.id}" class="btn btn-warning">Agregar al carrito</button>`;
        
                    tarjetas.append(item);
                    padreItem.append(tarjetas)
                    padreItem.append(divCarrito);
                    
                    document.getElementById(`${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);

                
            })
        
            productosPrecio = productos
        
    }).catch(error => console.log(error));
};

function defaultIndex () {
    tarjetas.innerHTML = ("");
    tarjetas.className = "tarjetasInicio";
    fetch("./data/data-index.json")
    .then(resp =>resp.json())
    .then(productos => {
            productos.forEach(producto => {
                let item = document.createElement("div");
                item.className = "productos"
                item.innerHTML = `
                                    <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                                    <a id="${producto.idImagen}" href="${producto.img2}"><img src="${producto.img}" class="card-img-top" alt="..."></a>
                                    <div class="card-body">
                                     <h5 class="card-title">$${producto.precio}</h5>
                                     <p class="card-text">${producto.nombre}</p>
                                     <button type="button" id="${producto.id}" class="btn btn-warning">Ver Catalogo</button>`;
        
                                     tarjetas.append(item);
                                     contenedorInicio.append(tarjetas)
                                    padreItem.innerHTML=("")


                                     
                                     document.getElementById(`${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);


            })
    }).catch(error => console.log(error));
};


// botonera
let clickBoca = document.getElementById("escudoboca").addEventListener("click", crearTarjetasBoca)
let clickArg = document.getElementById("escudoarg").addEventListener("click", crearTarjetasArg)
let clickRiver = document.getElementById("escudoriver").addEventListener("click", crearTarjetasRiver)
let clickAmerica = document.getElementById("escudoamerica").addEventListener("click", crearTarjetasRestAmerica)
let clickEuropa = document.getElementById("escudoeuropa").addEventListener("click", crearTarjetasRestEuropa)

// condicional para cuando se apretan los distintos botones

if (clickBoca) {
    crearTarjetasBoca();
}else if (clickArg){
    crearTarjetasArg();
}else if (clickRiver){
    crearTarjetasRiver();
}else if(clickAmerica){
    crearTarjetasRestAmerica()
}else if(clickEuropa){
    crearTarjetasRestEuropa
}else{
    defaultIndex();
    
};