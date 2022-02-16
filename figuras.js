//código del cuadrado

console.group("cuadrados");

//var ladocuadrado = 5;
//console.log("Los lados del cuadrado miden " +  ladocuadrado + "cm");

function perimetroCuadrado(lado) 
{
   return lado * 4; 
}

function areacuadrado (lado)
{
    return lado * lado;
}

//console.log("El área  es " +  areacuadrado + "cm^2");

console.groupEnd();

//código del triangulo

console.group("triangulos");

//var l1 =  6;
//var l2 =  6;
//var baset =  4;
//var alturat =  5.5;
//var perimetrot =  l1 + l2 + baset;
//var areat =  (baset * alturat)/2;

function perimetrotrinagulo (l1, l2, baset)
{
    return l1 + l2 + baset;
}

function areatriangulo(baset, alturat)
{
    return (baset * alturat)/2;
}

//console.log("Los lados del triangulo miden " + l1 + "cm,", l2 + "cm,", baset + "cm");
//console.log("La altura del triangulo es: " + alturat + "cm");
//console.log("El perimetro del triangulo es: " + perimetrot + "cm");
//console.log("El área del triangulo es: " + areat + "cm^2");

console.groupEnd();

//código del círculo

console.group("Círculos");

//var radio = 4;
//var diametro = radio * 2;
//var circunferencia = diametro * Pi;
//var areac = (radio * radio) * Pi;

var Pi = Math.PI;

function diamtrocirculo(radio)
{
    return radio * 2;
}

function circunferencia(radio)
{
    var diametro = diamtrocirculo(radio);
    return diametro * Pi;
}

function areacirculo(radio)
{
    return (radio * radio) * Pi;
}

//console.log("El radio mide " +  radio + "cm");
//console.log("El diametromide  " + diametro + "cm");
//console.log("La circunferencia mide " +  circunferencia + "cm");
//console.log("El area del circulo es de :" +  areac + "cm^2");


console.groupEnd();

//aqui interactuamos con el HTML

function calcularPerimetroCuadrado()
{
    var input =document.getElementById("InputCuadrado")
    var value = input.value;

    var perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado()
{
    var input =document.getElementById("InputCuadrado")
    var value = input.value;

    var area = areacuadrado(value);
    alert(area);
}