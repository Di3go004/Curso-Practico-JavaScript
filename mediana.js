function calcularMediaAritmetica (lista)
{
var sumaLista = lista.reduce
(
    function(valorAcumulado = 0, nuevoElemento)
    {
        return valorAcumulado + nuevoElemento;
    }
);
   var promedioLista = sumaLista / lista.length;
   return promedioLista;
}

var lista1 = 
[
    100,
    200,
    500,
    400000000,

];

var mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito)
{
    if(numerito % 2=== 0)
    {
        return true;
    }
    else
    {
        return false;
    }

}

var mediana ;

if(esPar(lista1.length))
{
    var elemento1 = lista1[mitadLista1 - 1];
    var elemento2 = lista1[mitadLista1];

    var promedioElemento1y2 = calcularMediaAritmetica
    ([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElemento1y2;

    // necesitamos dos elementos 
    // -promedio
    // -mediana 
}
else
{
    mediana = lista1[mitadLista1];
    // posicion mitadLista1 lista1
    // -mediana 
}