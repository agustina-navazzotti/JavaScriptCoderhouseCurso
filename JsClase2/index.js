alert("Este programa te permite realizar diversas operaciones con números");

var opcion = parseInt(prompt("MENÚ (Elegí una opción para realizar una operación):/ 1. Potencia de un número / 2. Tabla de multiplicar de un número / 3. jj / 4. Para salir/"));

while (opcion != 4){
    switch(opcion){
        case 1:
            let y = parseInt(prompt("Ingresá la base de la potencia/:"));
            let a = parseInt(prompt("Ingresá el exponente/:"));
            let res = y;
            for(let j=1; j<=a; j++){
                res = res*y;
            }
            alert(`El resutado es ${res}`);
            break;
        case 2:
            let num = parseInt(prompt("Quiero la tabla del/:"));
            let i = 1;
            while(i<=10){
                alert(`${num} x ${i} = ${num*i}`);
                i++;
            }
            break;
        case 3:
            alert("Hola");
            break;
        default:
            alert("Volvé a ingresar una opción")
            break;
    }
    opcion = parseInt(prompt("MENÚ (Elegí una opción para realizar una operación):/ 1. Potencia de un número / 2. Tabla de multiplicar de un número / 3. jj / 4. Para salir/"));
}