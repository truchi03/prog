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