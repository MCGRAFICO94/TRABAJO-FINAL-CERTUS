/* Obtener referencia a todos los botones */
let botones = window.document.querySelectorAll("#catalogo > article > button");


/* Agregar el escucha del evento Click en los botones y ejecutar la función */
botones.forEach(element => {
    element.addEventListener("click", agregarcarrito);
});
    

/* Metodo para agregar el producto al carrito */
function agregarcarrito(producto){
    /* Conseguí los datos de mi producto */
    let tituloProducto = producto.target.parentElement.querySelector("h3");
    let precioProducto = producto.target.parentElement.querySelector("p");
    let imagenProducto = producto.target.parentElement.querySelector("picture");
   
   /* Ahora colocar en el modal */
   let modalCuerpo = document.querySelector("#ventanacarrito > div > div > div.modalbody")
   modalCuerpo.innerHTML += "<h3>"+tituloProducto.innerHTML+"</h3><p>"+precioProducto.innerHTML+"</p>";
}