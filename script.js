const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");

const verificar = document.querySelector("verifica");

function validarMensaje (){
    var mensaje = inputMensaje.value;
    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz ";
    let mensajeError = "";
    for (let letra of mensaje){
        if (!letrasValidas.includes(letra)){
            mensajeError += `<p class="error">Recuerda escribir tu mensaje en minúsculas y sin acentos</p>`;
        }
    }
    if (mensajeError.length === 0){
        return  true;
    }
    return false;
}


function encriptar (){
    if (!validarMensaje()) return;
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

    inputResultado.value = mensajeEncriptado;

}

function desencriptar(){
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    inputResultado.value = mensaje;
}

function copiar(){
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}



btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
    


 

