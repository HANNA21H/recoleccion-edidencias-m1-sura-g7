const prompt = require("prompt-sync")();

let edadIngresada = null;
let tipoEntrada = null;
let salir = false;

while (!salir) {
  console.log("\n--- MENÚ PRINCIPAL - eventoTech ---");
  console.log("1. Digite la edad del asistente");
  console.log("2. Digite el tipo de entrada (Generl o VIP)");
  console.log("3. Comprobar acceso (evento Principal)");
  console.log("4. Comprobar acceso (zona VIP)");
  console.log("5. Salir");
  let opcion = prompt("Seleccione una opción (1-5): ");

  if (opcion === "1") {
    let edadTemp = prompt("Digite la edad del asistente: ");
    let edadNum = parseInt(edadTemp);
    if (!isNaN(edadNum) && edadNum > 0) {
      edadIngresada = edadNum;
      console.log("Edad registrada:", edadIngresada);
    } else {
      console.log("Error: digite un numero valido y positivo.");
    }

  } else if (opcion === "2") {
    let tipo = prompt('Digite el tipo de entrada ("General" o "VIP"): ')
      .toLowerCase();
    if (tipo === "general") {
      tipoEntrada = "General";
      console.log("Tipo de entrada registrada: general");
    } else if (tipo === "vip") {
      tipoEntrada = "VIP";
      console.log("Tipo de entrada registrada: VIP");
    } else {
      console.log("Debe escribir General o VIP");
    }

  } else if (opcion === "3") {
    if (edadIngresada === null) {
      console.log("Primero registre la edad.");
    } else {
      if (edadIngresada >= 18) {
        console.log("Acceso PERMITIDO al Evento Principal.");
      } else {
        console.log("Acceso DENEGADO (Menor de edad).");
      }
    }

  } else if (opcion === "4") {
    if (edadIngresada === null || tipoEntrada === null) {
      console.log("Debe registrar la edad y el tipo de entrada primero.");
    } else {
      if (edadIngresada >= 18 && tipoEntrada === "VIP") {
        console.log("Acceso PERMITIDO a Zona VIP.");
      } else if (edadIngresada >= 18 && tipoEntrada === "General") {
        console.log("Acceso DENEGADO (Requiere entrada VIP).");
      } else {
        console.log("Acceso DENEGADO (Menor de edad).");
      }
    }

  } else if (opcion === "5") {
    console.log("Saliendo del sistema");
    salir = true;
  } else {
    console.log("Opción no válida, intente otra vez.");
  }
}
