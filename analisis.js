//helpers
function esPar(numerito)
{
    // if (numerito % 2 ===0)
    // {
    //     return true;
    // }
    // else
    // {
    //     return false;
    // }

    return (numerito % 2 ===0);
}

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

//calculadora de mediana

function medianaSalarios(lista)
{
    var mitad = parseInt(lista.length / 2)

    if (esPar(lista.length))
    {
        var personaMitad1 = lista[mitad - 1];
        var personaMitad2 = lista[mitad];

        var median = calcularMediaAritmetica([personaMitad1, personaMitad2]);

        return median
    }
    else
    {
        var personaMitad = lista[mitad];
        return personaMitad;
    }
}

// Mediana General

var salariosColombia = colombia.map
(
    function(personita)
    {
        return personita.salary;
    }
);

var salariosColombiaSorted = salariosColombia.sort
(
    function (salaryA, salaryB)
    {
        return salaryA - salaryB;
    }
);

var medianaGeneralColombia = medianaSalarios(salariosColombiaSorted)

// Mediana del top 10%

// var arrayEjemplo = [1,2,3,4,5||6,7||8,9,10]
// var eJEMPLO = arrayEjemplo.splice(5, 2);

var spliceStart = (salariosColombiaSorted.length * 90) / 100;
var spliceCount = salariosColombiaSorted.length - spliceStart;

var salariosColombiaTop10 = salariosColombiaSorted.splice(
    spliceStart,
    spliceCount,
);

var medianaTop10Colombia = medianaSalarios(salariosColombiaTop10);

console.log
({
    medianaGeneralColombia,
    medianaTop10Colombia
});
