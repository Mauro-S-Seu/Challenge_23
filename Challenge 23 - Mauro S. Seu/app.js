//! ..........  CHALLENGE 23 ..........

// Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento Nacional de Identidad)
// El algoritmo para calcular la letra del DNI es el siguiente:
// El número debe ser entre 0 y 99999999.
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le correspondrá una letra de las siguientes:
// (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E).
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse << cancelar >>.




let caracteres = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

do{
    let dni = parseInt(prompt("Ingrese su número de D.N.I. (Documento Nacional de Identidad): "));
    if ( dni > 0 && dni < 99999999) {

        let resto = dni % 23;
        console.log(`Usted ingresó el D.N.I.: ${dni} y por lo tanto le corresponde la letra "${caracteres[resto]}"`);

    } else{
        console.error(`DNI NO VáLIDO / NO REGISTRADO EN EL SISTEMA`);
    }
}while(confirm("Desea ingresar otro numéro de D.N.I.???"));

