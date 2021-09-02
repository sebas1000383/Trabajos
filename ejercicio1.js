 /*
 Ejercicio 1 
 Aplicación en la cual un usuario ingresa horas trabajadas, el valor de cada hora y muestra el
total a pagar y los minutos que trabajo.
Solución
 let horas= prompt("Ingrese sus horas trabajadas");
let valorhoras= prompt("Ingrese el valor de la hora");
horas = parseInt(horas);
let =parseInt(valorhoras);
totalapagar =horas*valorhoras;
alert(" Su total a pagar es:  "+totalapagar);
let minutos=horas*60/1;
alert("Y el total de minutos que usted trabajo fue: "+minutos+ " Minutos");*/
/*Ejercicio 2 
Aplicación que lea el nombre de un trabajador cantidad de meses que trabajo al año y
muestre el porcentaje de meses que trabajo.

*/
/* Solucion
Ejercicio 3
let nombretrabajador= prompt("Ingrese su nombre");
meses = prompt("Porfavor ingrese la cantidad de meses que trabajo en el año");
let = parseInt(meses);
alert("Hola  " +nombretrabajador+ " De 12 meses del año tu trabajaste en total  " +meses);
*/
/*let cantidacambiar=prompt("Bienvenido a  cambio del dolar, Porfavor Ingrese la cantidad de pesos colombianos que desea convertir a dolar");
let = parseInt(cantidacambiar);
let  dolar =0.00026
let cambio=cantidacambiar*dolar/1;
let = parseFloat(cambio);
alert("La cantidad resultante de su cantidad de pesos a dolares es de: "+cambio);
/* 
Ejercicio 4
Aplicación que determine si un alumno aprueba a reprueba un curso, sabiendo que aprobara
si su promedio de tres calificaciones es mayor o igual a 70; reprueba en caso contrario.

var  total=0;
var cantidad = prompt("Ingrese la cantidad de notas");
for ( i = 0; i < cantidad; i++) {
    var notas = prompt("Ingrese la nota");
    var notas=parseInt(notas);
   
    total=total+notas;
    var total=parseInt(total);
    
}
var promedio =total/cantidad;
if (promedio<70) {
    alert("Lamentablemente perdio, vuelve a repetir materias" +promedio)
    
}else{
    alert("Felicitaciones a pasado el curso su nota es: "+promedio);
}
*/
/* Ejercicio 5
Aplicación que lea un número y si el número es par muestre el doble del número y si es
impar muestre la mitad del número.

var numero =prompt("Ingrese el número");
var numero= parseInt(numero);

if (numero% 2 ==0) {
    var suma=numero+numero;
    var suma = parseInt(suma);
    
    alert("Su número es par, asi que el doble de su número es: "+suma);
}else{
    var division = numero/2;
    alert("Su número es impar, asi que la mitad de su número es: "+division);
}*/
/*
Ejercicio 8
Aplicación que permita sumar consecutivamente y cuando la suma sea superior a 100 deje
de pedir números y muestre el total.


var numeros = prompt("Ingrese la cantidad de numeros que desea sumar");
var numeros = parseInt(numeros);

var totalnumber=0
for ( i= 0; i< numeros; i++) {
    
   numero= prompt("Ingrese el número");
   var numero = parseInt(numero);
   totalnumber = totalnumber+numero;
   var totalnumber = parseInt(totalnumber);
   if (totalnumber>100) {
    alert("Su suma es: "+totalnumber); 
    break;
    
}

  
   
    
    
}*/
/* Ejercicio 7
Aplicación que permita calcular el promedio de notas de un grupo de 20 aprendices que
cursaron el curso de Programación.

var estudiantes = prompt("Ingrese la cantidad de estudiantes que pasaron el curso de programación");
var sumanotas = 0

   for ( i = 0; i < estudiantes; i++) {
    var  notas = prompt("Ingrese la nota  final  de cada estudiante");
    var notas = parseInt(notas);
    
   
       sumanotas =sumanotas+notas;
       
               
       
   }
    promedio=  sumanotas/estudiantes;
   alert("La nota promedio del estudiante es: "+promedio);
   */
  /*Utilizando funciones de JavaScript programar una página en la que el usuario ingrese una
palabra y pueda consultar:
La longitud de la palabra
La palabra convertida en mayúsculas
La palabra convertida en minúsculas
El primer carácter de la palabra*/
/*function sumar(){
    var numero1 = document.getElementById('numero1').value
    var numero1 = parseInt(numero1)
    var  numero2 = document.getElementById('numero2').value
     var numero2 = parseInt(numero2)
    var  suma =numero1+numero2;
    var numero3 = document.getElementById('opcion').value
    if () {
        
    }
   
    alert("La suma de los numeros es: "+suma);*
    
}*/
function longitud(){
    let palabra = document.getElementById('palabra').value;
    
    alert("La longitud de la palabra es: "+palabra.length)

}
function MAYUSCULA(){
    let mayuscula = document.getElementById('palabra').value;
    alert("La palaabra en mayusculaa es: "+mayuscula.toUpperCase());
}
function minuscula(){
    let minuscula = document.getElementById('palabra').value;
    alert("La palabra en minuscula es: "+minuscula.toLowerCase ());

}
function caracter(){
    let caracter = document.getElementById('palabra').value;
    alert("El primer caracter de su palabra es: "+caracter.charAt(0));
}


  
  
        
    




    
   
    





    


















