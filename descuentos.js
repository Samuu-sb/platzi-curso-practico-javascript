// const precio = 300;
// const descuento = 10;

function calcularPrecioConDescuento (precio, descuento) {

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;

}



// console.log ({
//     precioOG,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });