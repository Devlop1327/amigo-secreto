let amigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value;
    
    if (nombre === '') {
        alert('Por favor ingresa un nombre');
        return;
    }
    
   
    amigos[amigos.length] = nombre;
    
  
    input.value = '';
    
    // Mostrar la lista
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 
    
    for (let i = 0; i < amigos.length; i++) {

        let elemento = document.createElement('li');

        let texto = document.createTextNode(amigos[i]);

        elemento.appendChild(texto);
    
        lista.appendChild(elemento);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }
    
    let numeroAleatorio = Math.random(); 
    let indice = Math.floor(numeroAleatorio * amigos.length);
    
    let amigoSeleccionado = amigos[indice];
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: ${amigoSeleccionado}`;
}
