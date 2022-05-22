numero = parseInt(prompt("Ingrese por favor un Número > que 1000: "));

while (numero <= 1000) {
  alert("Ingresaste " + numero);
  if (numero < 500) {
    alert("Estas poniendo menos de la mitad");
  }
  numero = parseInt(prompt("Ingrese por favor un Número > que 1000: "));
}
