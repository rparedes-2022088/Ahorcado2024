let abecedarioMin = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let abecedarioMay = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","o","P","Q","R","S","T","U","V","W","X","Y","Z"];

let divDeBotones = document.getElementById("divBotones");

const fragmentoBotones = document.createDocumentFragment();

let contador = 0;

for(let letra of abecedarioMin){
    const botonNuevo = document.createElement("button");
    botonNuevo.textContent = letra;
    botonNuevo.value = letra;
    botonNuevo.id = "boton" + letra;
    //botonNuevo.addEventListener("click",botonLetra);
    fragmentoBotones.appendChild(botonNuevo);
};
divDeBotones.appendChild(fragmentoBotones);

for(let letra of abecedarioMay){
    const botonNuevo2 = document.createElement("button");
    botonNuevo2.textContent = letra;
    botonNuevo2.value = letra;
    botonNuevo2.id = "boton" + letra;
    //botonNuevo.addEventListener("click",botonLetra);
    fragmentoBotones.appendChild(botonNuevo2);
};
divDeBotones.appendChild(botonNuevo2);

