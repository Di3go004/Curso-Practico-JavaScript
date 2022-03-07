// var precio = 120;
// var descuento = 18;


function calcularpreciocondescuento(precio, descuento)
{
    var porcentajePrecioConDescuento = 100 - descuento;
    var preciocondescuento = (precio *(porcentajePrecioConDescuento/100));

    return preciocondescuento;
}

function onClickButtonPriceDiscount()
{
    var precio = document.getElementById("inputprice")
    var valordelprecio = precio.value;

    var descuento = document.getElementById("inputDiscount")
    var valordeldescuento = descuento.value;

    var precioConDescuento = calcularpreciocondescuento(valordelprecio, valordeldescuento);

    var resultPrice = document.getElementById("ResultPrice");

    resultPrice.innerText ="El precio con descuento es: Q" + precioConDescuento;
}


// console.log
// ({
//     precio,
//    descuento,
//     porcentajePrecioConDescuento,
//     preciocondescuento
// });

