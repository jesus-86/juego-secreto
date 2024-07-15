let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
   
   
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento(`p`,`Acertaste el número en ${intentos} ${(intentos === 1) ? `vez` : `veces`}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acerto.
        if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento("p", "El número secreto es menor");
    } else{
        asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
}
  
    return;
}
function limpiarCaja(){
   document.querySelector("#valorUsuario").value = " ";
}
function generarNumeroSecreto(){
    let numerGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numerGenerado);
    console.log(listaNumerosSorteados);
            // si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya se asignaron todos los números posibles");
    }else{
    
             //Si el numero generado esta incluido en la lista
          if(listaNumerosSorteados.includes(numerGenerado)){
             return generarNumeroSecreto();
          }else {
            listaNumerosSorteados.push(numerGenerado);
             return numerGenerado;
          }
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", "Indica un número del 1 al 10 ");   
    numeroSecreto= generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
//limpiar caja
limpiarCaja();
//indicar mensaje de intervalos

//generar numero aleatorio

//indicar numeros de intentos

condicionesIniciales();
//deshabilitar e boton de nuevo juego
document.querySelector("#reiniciar").setAttribute("disable","true");

}

condicionesIniciales();
