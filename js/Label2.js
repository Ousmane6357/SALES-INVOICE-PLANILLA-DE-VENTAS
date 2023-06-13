    function ExtraerNumerodesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);

    return miNumero
}



function calcular(){

    let ventas  = [];

    
    ventas[0] = ExtraerNumerodesdeElemento('ventasTienda1');
    ventas[1] = ExtraerNumerodesdeElemento('ventasTienda2');
    ventas[2] = ExtraerNumerodesdeElemento('ventasTienda3');
    ventas[3] = ExtraerNumerodesdeElemento('ventasTienda4');
    ventas[4] = ExtraerNumerodesdeElemento('ventasTienda5');
    ventas[5] = ExtraerNumerodesdeElemento('ventasTienda6');

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas)
    let ventaMenor = calcularMenor(ventas)


    let mensajeSalida = ' Total ventas ' + totalVentas +
                        "/ Ventas mayor " + ventaMayor +
                        '/ Ventas menor ' + ventaMenor;
    let elementoSalida = document.getElementById('parrafoSalida');

    elementoSalida.textContent =  mensajeSalida;

}

function sumarTotal(array) {
    let total = 0;

    for (let venta of array){
        total = total + venta;

        return total
    }
}

function calcularMayor(array){
    let maximo = array[0];
    for (let venta of array){
        if (venta > maximo){
            maximo = venta;
        }
    }

    return maximo
}

function calcularMenor(array){
    let minimo = array[0];
    for (let venta of array){
        if (venta < minimo){
            minimo = venta;
        }
    }

    return minimo
}
