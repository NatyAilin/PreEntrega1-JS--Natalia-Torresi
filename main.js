alert("Bienvenido!!! Me gustaria conocerte un poco");

let nombre = prompt("¿Cómo te llamas?");

    if (nombre != "") {
        alert (`Que bueno conocerte ${nombre}`);
        } else{
        alert("El nombre se requiere");
    }

let apellido = prompt("¿Cuál es tu apellido?");

    if (apellido != "") {
        alert (`¿Cómo estas? ${nombre} ${apellido}`);
        } else{
        alert("El apellido se requiere");
    }

let pais = prompt("¿De qué país eres?");

    switch(pais.toLowerCase()){
        case "argentina":
            alert("¡Que ricas son las medialunas con un buen mate!");
            break;
            
            case "brasil":
                alert("¡Una buena samba alegra el día!");
                break;

            case "perú":
                alert("La gastronomía peruana es uno de nuestros más importantes productos banderas");
                break;

            case "chile":
                alert("Es un país de grandes poetas, escritores y de dos Premios Nobel de Literatura.");
                break;

            case "paraguay":
                alert("La polca y la guarania son dos de los géneros musicales más tradicionales y populares del Paraguay.");
                break;

            default:
                alert("Pais no encontrado");
                pais = prompt("¿De qué país eres?")    
    }

let edad = parseInt(prompt("¿Cuántos años tienes?"));

    while (edad < 18){
        alert("No puedes entrar");
    }

    while (edad >= 18){
        alert("Podemos continuar...");
        break;
    }

let ayuda = prompt("¿Me ayudas a resolver los siguientes problmeas? Si o No");

    while (ayuda.toLowerCase() !== "no"){
        alert("Continuemos");
        
        let operation = prompt("¿Qué operación te gustaría realizar? suma, resta, dividir o multiplicar");

        switch(operation.toLowerCase()){

            case "suma":
                alert("Elegiste suma");

                function suma(num1, num2){
                    let resultado;
                    resultado = num1 + num2;
                    return resultado;
                }

                let num1 = parseInt(prompt("¿Cuánto es 96 + 23?"));
                let resultadoSuma = suma(96, 23);

                if (num1 === resultadoSuma){
                    alert("¡Muy bien! 96 + 23 = " + resultadoSuma);
                }else{
                    alert("Incorrecto. La respuesta correcta es" + resultadoSuma);
                }
                break;

                case "resta":
                    alert("Elegiste resta");

                    function resta(num1, num2){
                        let resultado;
                        resultado = num1 - num2;
                        return resultado;
                    }

                    let num2 = parseInt(prompt("¿Cuánto es 123 - 52?"));
                    let resultadoResta = resta(123, 52);

                    if (num2 === resultadoResta){
                        alert("¡Muy bien! 123 - 52 =" + resultadoResta);
                    }else{
                        alert("Incorrecto. La respuesta correcta es " + resultadoResta);
                    }
                    break;

                case "dividir":
                    alert("Elegiste dividir");

                    function dividir(num1, num2){
                        let resultado;
                        resultado = num1 / num2;
                        return resultado;
                    }

                    let num3 = parseInt(prompt("¿Cuánto es 45 / 20?"));
                    let resultadoDivision = dividir(45, 20);

                    if (num3 === resultadoDivision){
                        alert("¡Muy bien! 45 / 20 =" + resultadoDivision);
                    }else{
                        alert("Incorrecto. La respuesta es" + resultadoDivision);
                    }
                    break;
                
                case "multiplicar":
                    alert("Elegiste multiplicar");

                    function multiplicar(num1, num2){
                        let resultado;
                        resultado = num1 * num2;
                        return resultado;
                    }

                    let num4 = parseInt(prompt("¿Cuánto es 95 * 18?"));
                    let resultadoMultiplicacion = multiplicar(95, 18);

                    if (num4 === resultadoMultiplicacion){
                        alert("¡Muy bien! 95 * 18 = " + resultadoMultiplicacion);
                    }else{
                        alert("Incorrecto. La respuesta correcta es" + resultadoMultiplicacion);
                    }
                    break;

                    default:
                        alert("Operación no válida");
        }

        ayuda = prompt("¿Me ayudas a resolver los siguientes problmeas? Si o No");
    }

    alert("¡Gracias por la ayuda!")