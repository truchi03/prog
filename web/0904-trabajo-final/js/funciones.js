// SECC 8 - EJ 1
function datos(){
    const respuesta1 = document.getElementById('ejer1');
    let nombre,apellido,edad,direccion,estadocivil,fechanacimiento,altura;
    nombre=prompt('Ingresa tu nombre');
    apellido=prompt('Ingresa tu apellido');
    edad=prompt('Ingresa tu edad');
    direccion=prompt('Ingresa tu dirección');
    estadocivil=prompt('Ingresa tu estado civil');
    fechanacimiento=prompt('Ingresa tu fecha de nacimiento');
    altura=prompt('Ingresa la altura');
    respuesta1.innerHTML = `
        <h5 class="mt-4">INFORMACIÓN:</h5>
        <b>Nombre</b>: ${nombre}<br>
        <b>Apellido</b>: ${apellido}<br>
        <b>Edad</b>: ${edad}<br>
        <b>Direccion</b>: ${direccion}<br>
        <b>Estadocivil</b>: ${estadocivil}<br>
        <b>Fecha de nacimiento</b>: ${fechanacimiento}<br>
        <b>Altura</b>: ${altura}
      `;
}

// SECC 8 - EJ 2
function rombo (){
    const respuesta2 = document.getElementById('ejer2');
    let diagonalP, diagonalQ, area;
    diagonalP = prompt('Diagonal P');
    diagonalQ = prompt('Diagonal Q');
    area = (diagonalP * diagonalQ) / 2
    respuesta2.innerHTML = '<div class="mt-4">El <b>área del rombo</b> es: ' 
        + area + '</div>';
}

// SECC 8 - EJ 3
function numero(){
    const respuesta3 = document.getElementById('ejer3');
    let numero, resultado;
    numero = prompt('Digite un número');
    resultado = numero * Math.PI;
    respuesta3.innerHTML = '<div class="mt-4">El número <b>' + numero 
      + ' mutiplicado por π</b> es igual a ' + resultado + '</div>';
}

// SECC 8 - EJ 4
function rectangulo(){
    const respuesta4 = document.getElementById('ejer4');
    let base, altura, area;
    base = prompt('Medida de la base del rectángulo');
    altura = prompt('Medida de la altura del rectángulo');
    area = base * altura;
    respuesta4.innerHTML=('<div class="mt-4">El <b>área del rectángulo</b> es ' 
        + area + '</div>');
}

// SECC 8 - EJ 5
function producto(){
    const respuesta5 = document.getElementById('ejer5');
    let nombreProd1, valorProd1,
        nombreProd2, valorProd2,
        nombreProd3, valorProd3,
        nombreProd4, valorProd4,
        nombreProd5, valorProd5,
        nombreProd6, valorProd6,
        nombreProd7, valorProd7,
        nombreProd8, valorProd8,
        nombreProd9, valorProd9,
        nombreProd10, valorProd10;
    nombreProd1 = prompt('Nombre producto 1');
    valorProd1 = prompt('Valor producto 1');
    nombreProd2 = prompt('Nombre producto 2');
    valorProd2 = prompt('Valor producto 2');
    nombreProd3 = prompt('Nombre producto 3');
    valorProd3 = prompt('Valor producto 3');
    nombreProd4 = prompt('Nombre producto 4');
    valorProd4 = prompt('Valor producto 4');
    nombreProd5 = prompt('Nombre producto 5');
    valorProd5 = prompt('Valor producto 5');
    nombreProd6 = prompt('Nombre producto 6');
    valorProd6 = prompt('Valor producto 6');
    nombreProd7 = prompt('Nombre producto 7');
    valorProd7 = prompt('Valor producto 7');
    nombreProd8 = prompt('Nombre producto 8');
    valorProd8 = prompt('Valor producto 8');
    nombreProd9 = prompt('Nombre producto 9');
    valorProd9 = prompt('Valor producto 9');
    nombreProd10 = prompt('Nombre producto 10');
    valorProd10 = prompt('Valor producto 10');
    respuesta5.innerHTML = '<div class="mt-4"><h5>Lista de productos</h5>'
        + nombreProd1 + ': $' + valorProd1 + '<br>'
        + nombreProd2 + ': $' + valorProd2 + '<br>'
        + nombreProd3 + ': $' + valorProd3 + '<br>'
        + nombreProd4 + ': $' + valorProd4 + '<br>'
        + nombreProd5 + ': $' + valorProd5 + '<br>'
        + nombreProd6 + ': $' + valorProd6 + '<br>'
        + nombreProd7 + ': $' + valorProd7 + '<br>'
        + nombreProd8 + ': $' + valorProd8 + '<br>'
        + nombreProd9 + ': $' + valorProd9 + '<br>'
        + nombreProd10 + ': $' + valorProd10 + '<br>'
        + '<b>Total:</b> ' + (Number(valorProd1) + Number(valorProd2) 
        + Number(valorProd3) + Number(valorProd4) + Number(valorProd5) +
        Number(valorProd6) + Number(valorProd7) + Number(valorProd8) +
        Number(valorProd9) + Number(valorProd10)) + '</div>';
}

// SECC 8 - EJ 6
function triangulo(){
    const respuesta6 = document.getElementById('ejer6');
    let base, altura, area;
    base = prompt('Base del triángulo');
    altura = prompt('Altura del triángulo');
    area = (base * altura) / 2;
    respuesta6.innerHTML = '<div class="mt-4">El <b>área del triángulo</b> es: ' 
        + area + '</div>';
}

// SECC 8 - EJ 7
function promedio10n(){
    const respuesta7 = document.getElementById('ejer7');
    let nro1, nro2, nro3, nro4, nro5, nro6, nro7, nro8, nro9, nro10, promedio;
    nro1 = prompt('Primer número');
    nro2 = prompt('Segudo número');
    nro3 = prompt('Tercer número');
    nro4 = prompt('Cuarto número');
    nro5 = prompt('Quinto número');
    nro6 = prompt('Sexto número');
    nro7 = prompt('Séptimo número');
    nro8 = prompt('Octavo número');
    nro9 = prompt('Noveno número');
    nro10 = prompt('Decimo número');
    promedio = (
      Number(nro1) 
      + Number(nro2) 
      + Number(nro3) 
      + Number(nro4) 
      + Number(nro5) 
      + Number(nro6) 
      + Number(nro7) 
      + Number(nro8) 
      + Number(nro9) 
      + Number(nro10)) / 10;
    respuesta7.innerHTML = '<div class="mt-4">El <b>promedio</b> de los números '
      + nro1 + ', '
      + nro2 + ', '
      + nro3 + ', '
      + nro4 + ', '
      + nro5 + ', '
      + nro6 + ', '
      + nro7 + ', '
      + nro8 + ', '
      + nro9 + ', '
      + nro10 + ' es '
      + '<b>' + promedio + '</b></div>'
    ;
}

// SECC 9 - EJ 1
function edad(){
    const respuesta8 = document.getElementById('ejer8');
    let edad=prompt("Ingrese la edad");

    if (edad < 18) {
        respuesta8.innerHTML = '<div class="mt-4">Es <b>menor</b> de edad</div>';
    } else {
        respuesta8.innerHTML = '<div class="mt-4">Es <b>mayor</b> de edad</div>';
    }
}

// SECC 9 - EJ 2
function numeros(){
    const respuesta9 = document.getElementById('ejer9');
    let number1=Number(prompt("Favor digite primer numero"));
    let number2=Number(prompt("Favor digite segundo numero"));
    let operador=prompt("Favor digite operador (+,-,*,/)" );
    let result;
    if (operador === '+') {
        result = number1 + number2;
        respuesta9.innerHTML = '<div class="mt-4">La <b>suma</b> ' + number1 + '+' + number2 + ' es: ' + result + '</div>';
    } else if (operador === '-') { 
        result = number1 - number2;
        respuesta9.innerHTML = '<div class="mt-4">La <b>resta</b> ' + number1 + '-' + number2 + ' es: ' + result + '</div>';
    } else if (operador === '*') { 
        result = number1 * number2;
        respuesta9.innerHTML = '<div class="mt-4">La <b>multiplicacion</b> ' + number1 + '*' + number2 + ' es: ' + result + '</div>';
    } else if (operador === '/') { 
        result = number1 / number2;
        respuesta9.innerHTML = '<div class="mt-4">La <b>division</b> ' + number1 + '/' + number2 + ' es: ' + result + '</div>';
    } else {
        respuesta9.innerHTML = '<div class="mt-4">Ha digitado un operador incorrecto</div>';
    }
}

// SECC 9 - EJ 3
function temperatura(){
    const respuesta10 = document.getElementById('ejer10');
    let temperature =prompt("Favor digite su temperatura");
    if (temperature >= 38) {
        respuesta10.innerHTML = '<div class="mt-4 text-danger">ALERTA!! tiene fiebre</div>';
    }   
    else {
        respuesta10.innerHTML = '<div class="mt-4 text-success">No tiene fiebre</div>';
    }
}

// SECC 9 - EJ 4
function materias(){
    const respuesta11 = document.getElementById('ejer11');
    let notaespa1 = Number(prompt( 'Primera nota de español'));
    let notaespa2 = Number(prompt( 'segunda nota de español'));
    let notaespa3 = Number(prompt( 'tercera nota de español'));
    
    let notamate1 = Number(prompt( 'Primera nota de matemáticas'));
    let notamate2 = Number(prompt( 'segunda nota de matemáticas'));
    let notamate3 = Number(prompt( 'tercera nota de matemáticas'));
    
    let promedioEspanol = (notaespa1 + notaespa2 + notaespa3) / 3;
    let promedioMatematicas = (notamate1 + notamate2 + notamate3) / 3;

    let respuesta = '';
    
    if (promedioEspanol >= 3) {
        respuesta = '<div class="mt-4 text-success">Has aprobado Español con un promedio de: ' 
            + promedioEspanol + '</div><br>';
    } else {
        respuesta = '<div class="mt-4 text-danger">Has reprobado Español con un promedio de: ' 
            + promedioEspanol + '</div><br>';
    }
    
    if (promedioMatematicas >= 3) {
        respuesta += '<div class="text-success">Has aprobado Matemáticas con un promedio de: ' 
            + promedioMatematicas + '</div>';
    } else {
        respuesta += '<div class="text-danger">Has reprobado Matemáticas con un promedio de: ' 
            + promedioMatematicas + '</div>';
    }

    respuesta11.innerHTML = respuesta;
}


function limpiarErrores() {
    const mensajeError = document.getElementById('mensaje-error');
    mensajeError.style.display = 'none';
}


function enviar(ev){
    ev.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const direccion = document.getElementById('direccion').value;
    const email = document.getElementById('email').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const sexo = document.querySelector('input[name="sexo"]:checked')?.value;
    const telefono = document.getElementById('telefono').value;

    const mensajeError = document.getElementById('mensaje-error');
    const listaErrores = document.getElementById('lista-errores');

    const datos = document.getElementById('datos');

    let todo_correcto = true;
    let errores = '';

    if (nombre.trim().length < 2) {
        todo_correcto = false;
        errores = '<li>El <b>nombre</b> es menor a 2 caracteres</li>';
    }
    if (apellido.trim().length < 2) {
        todo_correcto = false;
        errores += '<li>El <b>apellido</b> es menor a 2 caracteres</li>';
    }
    if (edad < 0 || edad > 120) {
        todo_correcto = false;
        errores += '<li>La <b>edad</b> no cumple con los parámetro exigidos</li>';
    }
    if (direccion.trim().length < 10) {
        todo_correcto = false;
        errores += '<li>La <b>dirección</b> no cumple lo exigido</li>';
    }
    if (!email.includes('@') || !email.includes('.')) {
        todo_correcto = false;
        errores += '<li>El <b>email</b> no es válido</li>';
    }
    if (!sexo) {
        todo_correcto = false;
        errores += '<li>Debe escoger una opción para <b>sexo</b></li>';
    }
    if (telefono < 1000000000 || telefono > 9999999999) {
        todo_correcto = false;
        errores += '<li>El <b>teléfono</b> debe ser de 10 dígitos</li>';
    }

    if (todo_correcto) {
        const modalDatos = document.getElementById('modal-datos');
        datos.innerHTML = `
            <b>Nombre</b>: ${nombre}<br>
            <b>Apellido</b>: ${apellido}<br>
            <b>Edad</b>: ${edad}<br>
            <b>Dirección</b>: ${direccion}<br>
            <b>Email</b>: ${email}<br>
            <b>Fecha de nacimiento</b>: ${fechaNacimiento}<br>
            <b>Sexo</b>: ${sexo}<br>
            <b>Teléfono</b>: ${telefono}
        `;
        const controladorModal = new bootstrap.Modal(modalDatos, {});
        controladorModal.show();
    } else {
        listaErrores.innerHTML = errores;
        mensajeError.style.display = 'block';
    }
}