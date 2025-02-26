// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//SOLUCIÓN

// 1️. Array para almacenar los nombres de los amigos
let amigos = [];

// 2️. Función para agregar amigos a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo"); // Obtener el campo de entrada
    let nombre = input.value.trim(); // Obtener el nombre ingresado y eliminar espacios innecesarios

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Salir de la función si el nombre está vacío
    }

    amigos.push(nombre); // Agregar el nombre al array
    input.value = ""; // Limpiar el campo de entrada después de agregar el amigo
    actualizarLista(); // Llamar a la función para actualizar la lista en el HTML
}

// 3️. Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtener la lista en el HTML
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

    // Recorrer el array y crear elementos <li> para cada amigo
    for (let amigo of amigos) {
        let item = document.createElement("li"); // Crear un nuevo elemento <li>
        item.textContent = amigo; // Asignar el nombre del amigo al elemento
        lista.appendChild(item); // Agregar el <li> a la lista en el HTML
    }
}
