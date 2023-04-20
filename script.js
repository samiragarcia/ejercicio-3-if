let numeroIngresado = prompt ("ingrese el primer numero");
let numeroIngresado2 = prompt ("ingrese el segundo numero");
let numeroIngresado3 = prompt ("ingrese el tercer numero");

if (numeroIngresado == numeroIngresado2 && numeroIngresado == numeroIngresado3){
    alert ("ganaste el primer premio")
} else if (numeroIngresado == numeroIngresado2 || numeroIngresado == numeroIngresado3 || numeroIngresado2 == numeroIngresado3) {
    alert ("ganaste el segundo pemio")
} else {
    alert ("ganaste un helado")
}