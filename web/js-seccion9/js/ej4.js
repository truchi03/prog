// let notaEspa1

let notaEspa1 = Number(prompt('Primera nota de español'));
let notaEspa2 = Number(prompt('Segunda nota de español'));
let notaEspa3 = Number(prompt('Tercera nota de español'));

let notaMate1 = Number(prompt('Primera nota de matemáticas'));
let notaMate2 = Number(prompt('Segunda nota de matemáticas'));
let notaMate3 = Number(prompt('Tercera nota de matemáticas'));

let promedioEspanol = (notaEspa1 + notaEspa2 + notaEspa3) / 3;
let promedioMatematicas = (notaMate1 + notaMate1 + notaMate3) /3 ;

if (promedioEspanol >= 3) {
  document.write('Has aprobado Español con un promedio de: ' + promedioEspanol + '<br>');
} else {
  document.write('Has reprobado Español con un promedio de: ' + promedioEspanol + '<br>');
}

if (promedioMatematicas >= 3) {
  document.write('Has aprobado Matemáticas con un promedio de: ' + promedioMatematicas);
} else {
  document.write('Has reprobado Matemáticas con un promedio de: ' + promedioMatematicas);
}