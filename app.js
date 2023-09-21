//Clase "molde" para los items de la tienda
class Item {
    constructor(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

//Items de la tienda
const fortnite = new Item("Fortnite", 2000, "fortnite.webp");
const gta = new Item("GTA", 2500, "gta.webp");
const warzone = new Item("Warzone", 2900, "warzone.webp");

// Array para inventario
const inventario = [];

// Dinero disponible en la tienda
let dinero = 10000;

//Elementos del DOM
const elDinero = document.querySelector("#dinero span");
elDinero.innerText = dinero;
const elInventario = document.getElementById("inventario");

function comprar(itemDeLaTienda) {
    if (dinero - itemDeLaTienda.precio >= 0) {
        inventario.push(itemDeLaTienda);
        dinero -= itemDeLaTienda.precio;
        actualizarHTML();
    } else {
        alert(`No tenés dinero suficiente para comprar ${itemDeLaTienda.nombre}.`);
    }
}

//Funcion para vender un item
function vender(nombreDelItem) {
    const itemEcontrado = inventario.find((item) => item.nombre == nombreDelItem);
    dinero += itemEcontrado.precio;
    const indice = inventario.indexOf(itemEcontrado);
    inventario.splice(indice, 1);
    actualizarHTML();
}

function actualizarHTML() {
    elInventario.innerHTML = "";
    for (const itemDeLaTienda of inventario) {
        const li = `
        <li onclick="vender('${itemDeLaTienda.nombre}')">
          <img src="img/${itemDeLaTienda.imagen}" alt="${itemDeLaTienda.imagen}" />
        </li>
        `;
        elInventario.innerHTML += li;
    }
    elDinero.innerText = dinero;
}