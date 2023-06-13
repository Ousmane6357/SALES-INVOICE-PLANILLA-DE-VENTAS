function ExtraerNumerodesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);

    return miNumero
}



function calcular(){
    let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;
    ventas1 = ExtraerNumerodesdeElemento('ventasTienda1');
    ventas2 = ExtraerNumerodesdeElemento('ventasTienda2');
    ventas3 = ExtraerNumerodesdeElemento('ventasTienda3');
    ventas4 = ExtraerNumerodesdeElemento('ventasTienda4');
    ventas5 = ExtraerNumerodesdeElemento('ventasTienda5');
    ventas6 = ExtraerNumerodesdeElemento('ventasTienda6');

    let totalVentas = ventas1 + ventas2 + ventas3 + ventas4 + ventas5 + ventas6;

    let mensajeSalida = 'Total ventas ' + totalVentas;
    let elementoSalida = document.getElementById('parrafoSalida');

    elementoSalida.textContent =  mensajeSalida;

}