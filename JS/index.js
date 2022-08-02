// Unico Div de Html
let container = document.getElementById("container");

// Pagina de inicio
let inicio = document.createElement("div");

inicio.innerHTML = `<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="./multimedia/Imagenes-carrusel/CARRUSEL-1.webp" class="d-block w-100 imagen-carousel"  alt="">
                            </div>
                            <div class="carousel-item">
                                    <img src="./multimedia/Imagenes-carrusel/CARRUSEL-2.webp" class="d-block w-100 imagen-carousel" alt="">
                            </div>
                            <div class="carousel-item">
                                    <img src="./multimedia/Imagenes-carrusel/CARRUSEL-3.webp" class="d-block w-100 imagen-carousel" alt="">
                            </div>
                            <div class="carousel-item">
                                    <img src="./multimedia/Imagenes-carrusel/CARRUSEL-4.webp" class="d-block w-100 imagen-carousel" alt="">
                            </div>
                        </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>`;
                        
container.append(inicio);





let contenedorInicio = document.createElement("div");
contenedorInicio.className = "contenedorInicio";
container.append(contenedorInicio);

let destacadosInicio = document.createElement ("div");
destacadosInicio.innerHTML = `<h2 id="destacados">Productos destacados</h2>`;
contenedorInicio.append(destacadosInicio);

// div que contiene los productos + el carrito
let padreItem = document.createElement("div");
padreItem.className = "padreitem";
container.append(padreItem);


/* div del carrito
let divCarrito = document.createElement("div");
divCarrito.className = "carrito";
divCarrito.id = "carritos";
divCarrito.innerHTML = ("")
padreItem.append(divCarrito);
*/

// div que contiene cada tarjeta
let tarjetas = document.createElement("div");
tarjetas.className ="tarjetas";
tarjetas.innerHTML ="";
padreItem.append(tarjetas);
