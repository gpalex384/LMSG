function calcularImc(){
    // Definimos variables
    var nombre;
    var edad;
    var peso;
    var altura;
    var mensaje;
    var mensajeLabel;
    var err;

    // Capturamos los inputs
    nombre = document.getElementById("nombre");
    typeof(nombre);
    if (!isNaN(parseFloat(nombre.value)) || nombre.value == "") {
        nombre.value = "ComoTeLlames";
    }      
    edad = document.getElementById("edad");
    peso = document.getElementById("peso");
    altura = document.getElementById("altura");
    if (altura.value == 0) {
        imc.value = "ERROR"
        err=true;
    }
    mensajeLabel = document.getElementById("mensaje");

    // Validamos los inputs
    if (isNaN(edad.value) || isNaN(peso.value) || isNaN(altura.value)){
        imc.value = "ERROR"
        err=true;
    }

    // Realizamos el cálculo si el input está validado
    if (!err) {
        resultado=(parseFloat(peso.value)/parseFloat(altura.value^2)).toFixed(2);
        imc.value = resultado;
        mensaje = "Hola "+ nombre.value + ", tu IMC es de "+ imc.value;
    }
    // Escribimos un mensaje de error si falla la validación de datos
    else {
        mensaje = "Hay algún error en los datos de entrada.";
        if (altura.value == 0) {
            mensaje += " La altura no puede ser 0."
        }
    }

    // Mostramos el mensaje en pantalla
    mensajeLabel.textContent=mensaje;
        
    // Mostramos el mensaje por consola
    console.log(mensaje);
    return false;
}
