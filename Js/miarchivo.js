//ALTERNETIVA 1

// numero = parseInt(prompt("Ingrese por favor un Número > que 1000: "));

// while (numero <= 1000) {
//   alert("Ingresaste " + numero);
//   if (numero < 500) {
//     alert("Estas poniendo menos de la mitad");
//   }
//   numero = parseInt(prompt("Ingrese por favor un Número > que 1000: "));
// }

//ALTERNETIVA 2
let numeroIngresado = parseInt(prompt("Ingrese por favor un Número: "));

// debugger;
for (let i = 1; i < 11; i++) {
  let resultado = numeroIngresado + i;
  alert(
    "A tu número ingresado le sumaremos de 1 en 1: " +
      numeroIngresado +
      "+" +
      i +
      " = " +
      resultado
  );
}
