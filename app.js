const arrCasas = document.getElementsByClassName("casas");
const puntajeAveRosa = document.getElementById("aveRosa");
const puntajeAveAzul = document.getElementById("aveAzul");
const tiempoRestante = document.getElementById("tiempoRestante");
let numero1 = 0;
let numero2 = 0;
let numeroTimer= 60;

for (var i=0; i < arrCasas.length; i++){
    arrCasas[i].addEventListener("click", function(){
        var index = Array.prototype.indexOf.call(arrCasas, this)
        console.log(index)
        if(index % 2 === 0){
            numero1++;
            puntajeAveAzul.textContent = numero1;
        }else{
            numero2++;
            puntajeAveRosa.textContent = numero2;
        }
    });
}



const timer = setInterval(()=>{
    numeroTimer--;
    tiempoRestante.textContent = numeroTimer;
    if(numeroTimer == 0){
        clearInterval(timer);
    }
},1000);

const divsImpar = document.getElementsByClassName('impar');
const mostrar = true;

function alternarImagen() {
  for (var i = 0; i < divsImpar.length; i++) {
    const imagen = divsImpar[i].querySelector("img");
    
    if (mostrar) {
      imagen.src = "assets/casaPajaros.png" ; 
    } else {
        imagen.src = "assets/aveAzul.png";
    }
  }
 
  mostrar = !mostrar; 
}

setInterval(alternarImagen, 1000);

