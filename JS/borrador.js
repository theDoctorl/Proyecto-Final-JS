function crearTarjetasRiver(){
    inicio.innerHTML = ("");
    tarjetas.innerHTML = ("");
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
        
        
        
    }).catch(error => console.log(error));
};
function crearTarjetasArg(){
    inicio.innerHTML = ("");
    tarjetas.innerHTML = ("");
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
        
        
        
    }).catch(error => console.log(error));
};