function crearTiendas(contenedorID, min, cantidadTiendas) {
    let elementoContenedor = document.getElementById(contenedorID);
  
    for (let conteoTiendas = 1; conteoTiendas <= cantidadTiendas; conteoTiendas++) {
      let textoEtiqueta = 'Tienda ' + conteoTiendas;
      let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);
      elementoContenedor.appendChild(parrafoTienda);
    }
  }
    
    
  function crearParrafoTienda(textoLabel, valorMin) {
    let elementoParrafo = document.createElement('p');
    let elementoEtiqueta = document.createElement('label');
    elementoEtiqueta.setAttribute('for', textoLabel);
  
    let elementoInput = document.createElement('input');
    elementoInput.setAttribute('type', 'number');
    elementoInput.setAttribute('id', textoLabel);
    elementoInput.setAttribute('min', valorMin);
    elementoInput.setAttribute('value', 0);
  
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);
  
    return elementoParrafo;
  }




function ExtraerNumerodesdeElemento(elemento){
    let miElemento = document.getElementById(elemento)
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

calcular()

function sumarTotal(array) {
    let total = 0;

    for (let venta of array){
        total += venta;

        
    }
    return total
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
