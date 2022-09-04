function salario(){
  let nombre = prompt("Cual es su nombre? ")
  let salario = Number(prompt("Cual es su salario?"));

  if(salario < 500000){
    alert(nombre + ", usted gana menos del mínimo")
  } else if(salario > 1000000){
    alert(nombre + ", gracias al señor usted gana más de 1.000.000")
  } else {
    alert(nombre + ", usted gana " + salario)
  }
}


function semaforo(){
  let estado = prompt("Estado del semaforo");
  if(estado == "rojo"){
    alert("No pasar");
  }
  if(estado == "amarillo"){
    alert("Tenga precaución");
  }
  if(estado == "verde"){
    alert("Puede seguir");
  }
}


function enviar(ev){
  ev.preventDefault();
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let email = document.getElementById('email').value;
  let telefono = document.getElementById('telefono').value;
  let curso = document.getElementById('curso').value;
  let mensaje = document.getElementById('mensaje');

  mensaje.innerHTML = '';

  if(nombre.length === 0){
    mensaje.innerHTML = 'Debe digitar un nombre';
    return;
  }

  if(apellido.length === 0){
    mensaje.innerHTML = 'Debe digitar un apellido';
    return;
  }

  if(email.length === 0 && !email.includes('@') && !email.includes('.')){
    mensaje.innerHTML = 'Debe digitar un email valido';
    return;
  }

  if(curso === ""){
    mensaje.innerHTML = 'Debe escoger un curso';
    return;
  }

  alert(
    "nombre: " + nombre
    + "\napellido: " + apellido
    + "\nemail: " + email
    + "\ntelefono: " + telefono
    + "\ncurso: " + curso
  )
}