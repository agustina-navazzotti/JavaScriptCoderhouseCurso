class Tarea {
    constructor(nombre, dificultad) {
        this.nombre  = nombre.toUpperCase();
        this.dificultad  = parseFloat(dificultad);
        this.realizada = false;
    }

    hacerTarea() {
        this.realizado = true;
    }
}

const tarea1 = new Tarea("Lavar los pisos", "4");
const tarea2 = new Tarea("Limpiar el baño", "10");
const tarea3 = new Tarea("Cortar el pasto", "6");
const tarea4 = new Tarea("Lavar los platos", "3");

alert("¡Bienvenido al gestionador de tareas! A continuación te mostraremos diferentes tareas, escribe 1 si las realizaste o 0 si no las hiciste");

var puntos=0;
let tar1 = parseInt(prompt("Lavar los pisos"));

if(tar1==1){
    tarea1.hacerTarea();
    if(tarea1.dificultad > 5 && tarea1.realizada){
        puntos= puntos+10;
    }else{
        puntos= puntos+5;
    }
}

let tar2 = parseInt(prompt("Limpiar el baño"));

if(tar2==1){
    tarea2.hacerTarea();
    if(tarea2.dificultad > 5){
        puntos= puntos+10;
    }else{
        puntos= puntos+5;
    }
}

let tar3 = parseInt(prompt("Cortar el pasto"));

if(tar3==1){
    tarea3.hacerTarea();
    if(tarea3.dificultad > 5){
        puntos= puntos+10;
    }else{
        puntos= puntos+5;
    }
}

let tar4 = parseInt(prompt("Lavar los platos"));

if(tar4==1){
    tarea4.hacerTarea();
    if(tarea4.dificultad > 5 && tarea4.realizada){
        puntos= puntos+10;
    }else{
        puntos= puntos+5;
    }
}
alert(`${puntos}`);

if(puntos>=20){
    alert("¡Felicitaciones! Hiciste suficiente por hoy, la cena hoy la trae el delivery")
}else if(puntos<20){
    alert("Día de flojera. Si no viste los simuladores es un buen día para empezar")
}