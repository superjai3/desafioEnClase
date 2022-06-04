//Cotizador de póliza de vida

let anioActual = 2022;
let anioNacimiento = parseInt(prompt("Ingrege su año de nacimiento: "));

let edad = parseInt(anioActual - anioNacimiento);

if (edad <= 0 || edad > 80) {
  alert(`Su edad: ${edad}, se encuentra fuera de rango`);
} else if (edad > 0 && edad < 80) {
  if (edad < 18) {
    alert(
      `Usted es menor de edad, tiene ${edad} años, debe ser mayor de edad.`
    );
  } else if (edad >= 18 && edad <= 65) {
    alert(`Usted es una persona apta para la póliza de vida`);
    alert(`Su edad es: ${edad} años`);
    let sueldoActual = parseInt(prompt("Ingrese su sueldo actual: "));
    capital = sueldoActual * 24;
    Tasa = 2;
    let costo = (Tasa * sueldoActual) / 1000;
    alert(
      `El costo de la póliza de Vida es: $${costo} por mes y el capital asegurado sería de $${capital}`
    );
  } else if (edad >= 66 && edad <= 80) {
    alert(
      `Usted puede contratar la póliza de vida, bajo la opción Mayores de 65 años`
    );
    alert(`Su edad es: ${edad} años`);
    let sueldoActual = parseInt(prompt("Ingrese su sueldo actual: "));
    capital = sueldoActual * 24;
    Tasa = 3;
    let costo = (Tasa * sueldoActual) / 1000;
    alert(
      `El costo de la póliza de Vida es: $${costo} por mes y el capital asegurado sería de $${capital}`
    );
  } else if (edad >= 76) {
    alert(
      `Usted se encuentra fuera del rango de esta cobertura, tiene actualmente ${edad} años, gracias por su consulta`
    );
  }
}
