// Constructor de productos con el método de Sumar el IVA
class Productos{
    constructor(Cod, title, precio, src) {
        this.Cod = id;
        this.title = title;
        this.precio = precio;
        this.src = src;
    }
    sumarIva *=1.21
}

// Array de productos para hacer el push de los productos
const productos = [];

productos.push(new Productos(1, "Azuquitas", 100, src="image/productos/azuqitas color.jpg"));
productos.push(new Productos(2, "Baston Acqua", 60, src="image/Productos/Baston-acqua.jpg" alt="Baston-acqua"));
productos.push(new Productos(3, "Baston Multi", 65, src="image/Productos/Baston-multi.jpg" alt="Baston-multi"));
productos.push(new Productos(4, "Baston Rosa", 60, src="image/Productos/Baston-rosa.jpg" alt="Baston-rosa"));
productos.push(new Productos(5, "Meloncito Amarillo", 50, src="image/Productos/Meloncito-amarillo.jpg" alt="Meloncito-Amarillo"));
productos.push(new Productos(6, "Meloncito Azul", 50, src="image/Productos/Meloncito-Azul.jpg" alt="Meloncito-Azul"));
productos.push(new Productos(7, "Meloncito Rosa", 50, src="image/Productos/Meloncito-Rosa.jpg" alt="Meloncito-Rosa"));
productos.push(new Productos(8, "Pirulin Amarillo", 80, src="image/Productos/Pirulin-amarillo.jpg" alt="Pirulin-amarillo"));
productos.push(new Productos(1, "Pirulin Rosa", 80, src="image/Productos/Pirulin-rosa.jpg" alt="Pirulin-rosa"));

let container = document.getElementById("container");

//For of para sumar IVA y agregar al DOM
for (const producto of productos) {
    producto.sumarIva();

    let div = document.createElement("div");
    div.className = "card"
    div.innerHTML = ` 
        <img class="img-card" src="${producto.src}" alt="">
    <p class="id-card">Cod: ${producto.Cod}</p>
    <p class="title-card">${producto.title}</p>
    <p class="precio-card">$${producto.precio}</p>
    `;
    contariner.append(div)
}