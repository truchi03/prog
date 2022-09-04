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
    respuesta1.innerHTML = ('INFORMACIÓN: Nombre completo: ' + nombre + ' ' + apellido 
      + ', Edad: '+ edad + ', Direccion: ' + direccion + ', E. civil: ' 
      + estadocivil + ', Fecha nacimiento: ' + fechanacimiento + ', Altura: ' + altura);
}

// SECC 8 - EJ 2
function rombo (){
    const respuesta2 = document.getElementById('ejer2');
    let diagonalP, diagonalQ, area;
    diagonalP = prompt("Diagonal P");
    diagonalQ = prompt("Diagonal Q");
    area = (diagonalP * diagonalQ) / 2
    respuesta2.innerHTML = "El área del rombo es: " + area;
    
}

// SECC 8 - EJ 3
function numero(){
    let numero, resultado;
    numero = prompt("Digite un número");
    resultado = numero * Math.PI;
    document.write("El número " + numero 
      + " mutiplicado por π es igual a " + resultado);
}

// SECC 8 - EJ 4
function area(){
    const respuesta4 = document.getElementById('ejer4')
    let base, altura, area;
    base = prompt("Medida de la base del rectángulo");
    altura = prompt("Medida de la altura del rectángulo");
    area = base * altura;
    respuesta4.innerHTML=("El área del rectángulo es " + area);
}

// SECC 8 - EJ 5
function producto(){
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
  document.write(
    'Lista de productos<br>'
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
    + 'Total: ' + (Number(valorProd1) + Number(valorProd2) 
      + Number(valorProd3) + Number(valorProd4) + Number(valorProd5) +
      Number(valorProd6) + Number(valorProd7) + Number(valorProd8) +
      Number(valorProd9) + Number(valorProd10))
  ); 
}

// SECC 8 - EJ 6
function triángulo(){
    let base, altura, area;
    base = prompt('Base del triángulo');
    altura = prompt('Altura del triángulo');
    area = (base * altura) / 2;
    document.write('El área del triángulo es: ' + area);
}

// SECC 8 - EJ 7
function materias(){
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
    document.write(
      'El <b>promedio</b> de los números '
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
      + '<b>' + promedio + '</b>'
    );
}

// SECC 9 - EJ 1
function edad(){
    let edad=prompt("Ingrese la edad");

    if(edad < 18){
    document.write('Es menor de edad');
    } else{
        document.write('Es mayor de edad');
    }
}

// SECC 9 - EJ 2
function numeros(){
    let number1=Number(prompt("Favor digite primer numero"));
    let number2=Number(prompt("Favor digite segundo numero"));
    let operador=prompt("Favor digite operador (+,-,*,/)" );
    let result;
    if(operador === '+'){
        result = number1 + number2;
        document.write(' la suma ' + number1 + '+' + number2 + ' es: ' + result)
    } else if (operador === '-') { 
        result = number1 - number2;
        document.write(' la resta ' + number1 + '-' + number2 + ' es: ' + result)
    } else if (operador === '*') { 
        result = number1 * number2;
        document.write(' la multiplicacion ' + number1 + '*' + number2 + ' es: ' + result)
    } else if (operador === '/') { 
        result = number1 / number2;
        document.write(' la division ' + number1 + '/' + number2 + ' es: ' + result)
    } else {
        document.write('Ha digitado un operador incorrecto')
    }
}

// SECC 9 - EJ 3
function temperatura(){
    let temperature =prompt("Favor digite temperatura");
    if (temperature >= 38) {
        document.write('ALERTA!! tiene fiebre');
    }   
    else{
        document.write('No tiene fiebre');
    }
}

// SECC 9 - EJ 4
function materias(){
    let notaespa1 = Number(prompt( 'Primera nota de español'));
    let notaespa2 = Number(prompt( 'segunda nota de español'));
    let notaespa3 = Number(prompt( 'tercera nota de español'));
    
    let notamate1 = Number(prompt( 'Primera nota de matemáticas'));
    let notamate2 = Number(prompt( 'segunda nota de matemáticas'));
    let notamate3 = Number(prompt( 'tercera nota de matemáticas'));
    
    let promedioEspanol = (notaespa1 + notaespa2 + notaespa3) / 3;
    let promedioMatematicas = (notamate1 + notamate2 + notamate3) / 3;
    
    if (promedioEspanol >= 3) {
        document.write('Has aprobado Español con un promedio de: ' + promedioEspanol + ' <br>');
    } else {
        document.write('Has reprobado Español con un promedio de: ' + promedioEspanol + ' <br>');
    }
    
    if (promedioMatematicas >= 3) {
        document.write('Has aprobado Matemáticas con un promedio de: ' + promedioMatematicas);
    } else {
        document.write('Has reprobado Matemáticas con un promedio de: ' + promedioMatematicas);
    }
}


function enviar(){
    let todo_correcto = true;
    let advertencia = '';

    const nombre = document.getElementById('nombre').value;

    if(nombre.length < 2) {
        todo_correcto = false;
        advertencia = 'El nombre es menor a 2 caracteres. '
    }

    if (todo_correcto) {
        alert('TODO CORRECTO');
    } else {
        alert('FALLO. ' + advertencia);
    }
}