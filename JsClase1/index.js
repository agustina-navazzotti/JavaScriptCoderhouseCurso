alert("¿Cuántos puntos tiene mi equipo? Ingresá los resultados de los partidos y enterate")

let cantGanados = parseInt(prompt("Cantidad de partidos ganados"));
let cantEmpatados = parseInt(prompt("Cantidad de partidos empatados"));
const puntEmpate = 1;
const puntGanado = 3;

var totalPuntos = puntEmpate*cantEmpatados + puntGanado*cantGanados;
alert(`Los puntos que tiene tu equipo son: ${totalPuntos}`);

if(totalPuntos >= 20){
    alert(`Tu equipo está clasificado al mundial`);
}
else if(15 <= totalPuntos < 20){
    alert(`Tu equipo tiene chances`);
}
else{
    alert(`Ya no vas a gritar goles de tu equipo en el mundial`);
}

