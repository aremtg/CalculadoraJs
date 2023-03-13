const pantalla = document.getElementById('pantalla');
const botones = document.getElementsByClassName('boton');
const botonBorrar = document.getElementById('borrarUltimo');

const arrayBotones = Array.from(botones);
arrayBotones.forEach(button => {
     button.addEventListener("click", () =>{
          calculadora(button, pantalla)
     })
})
function calculadora(button, pantalla){
     switch (button.innerHTML) {
          case "C":
               borrar(pantalla);
               break;
          case "=":
               calcular(pantalla);
               break;
          case "←":
               borraUltimo(pantalla);
               break;
          default:
               actualizar(pantalla, button);
               break;
     }
}
function calcular(pantalla){
    pantalla.innerHTML = eval(pantalla.innerHTML);
}
function actualizar(pantalla, button){
     if (pantalla.innerHTML == 0) {
          pantalla.innerHTML = ` `;
     }     
     pantalla.innerHTML = pantalla.innerHTML + button.innerHTML;
}
function borrar(pantalla){
     pantalla.innerHTML = ` `;
}
function borraUltimo(pantalla) {
     const valorActual = pantalla.innerHTML;
     pantalla.innerHTML = valorActual.slice(0, -1);
}