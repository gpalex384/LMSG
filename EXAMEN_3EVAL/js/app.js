function calcularMedia(){
    // Definimos variables
    var prog;
    var bbdd;
    var ed;
    var llmm;
    var media;
    var mensaje;
    var mensajeLabel;
    var err;

    // Capturamos los inputs
    prog = document.getElementById("mod1");
    bbdd = document.getElementById("mod2");
    ed = document.getElementById("mod3");
    llmm = document.getElementById("mod4");
    mensajeLabel = document.getElementById("mensaje");
    media = document.getElementById("media");

    

    // Validamos los inputs
    if (isNaN(prog.value) || isNaN(bbdd.value) || isNaN(ed.value) || isNaN(llmm.value)
    || prog.value < 0 || bbdd.value < 0 || ed.value < 0 || llmm.value < 0
    || prog.value > 10 || bbdd.value > 10 || ed.value > 10 || llmm.value > 10 
    || prog.value == "" || bbdd.value == "" || ed.value == "" || llmm.value == "") {
        media.value = "ERROR";
        err=true;
    } else {
        progv = parseFloat(prog.value);
        bbddv = parseFloat(bbdd.value);
        edv = parseFloat(ed.value);
        llmmv = parseFloat(llmm.value);
    }

    // Realizamos el cálculo si el input está validado
    if (!err) {
        resultado=((progv + bbddv + edv + llmmv)/4).toFixed(2);
        media.value = resultado;
        if (resultado < 5) {
            mensaje = "Desgraciadamente, tienes que repetir curso.";
        } else if (resultado < 7) {
            mensaje = "Has aprobado el curso. Muy bien.";
        } else if (resultado < 9) {
            mensaje = "Tienes un notable de media. ¡Enhorabuena!";
        } else {
            mensaje = "Excelente, tu media este curso ha sido sobresaliente. Te contrato.";
        }
        if ((progv < 5 || bbddv < 5 || edv < 5 || llmmv < 5) && media.value >= 5) {
            mensaje += "\n Sin embargo, tendrás que repetir alguna asignatura el curso que viene."
        }
    }
    // Escribimos un mensaje de error si falla la validación de datos
    else {
        mensaje = "Hay algún error en los datos de entrada.";
    }

    // Mostramos el mensaje en pantalla
    mensajeLabel.textContent=mensaje;
        
    // Mostramos el mensaje por consola
    console.log(mensaje);
    return false;
}