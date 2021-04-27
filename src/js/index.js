import Producto from './classes/producto';
import Bolivares from './classes/bolivares';
import Dolares from './classes/dolares';
import getValorDolar from './functions/valorDolar';
import { button, input, output, precio } from './functions/properties';

export default function init() {

let producto = new Producto( output.totalProducto, precio.totalProducto );
precio.actualizar( producto.getPrecio() );
producto.displayPrecio( output.totalProducto );

console.log(precio.totalProducto)

/**
 * Actualiza el valor del dolar con el de DolarToday y modifica el precio del producto
 */
button.sincro.addEventListener( 'click', async () => {

    precio.dolar = await getValorDolar();

    input.dolar.value = precio.dolar;

    producto.displayPrecio( output.totalProducto );
    precio.actualizar( producto.getPrecio() );
} );

/**
 * Actualiza el precio del producto cada vez que cambia el precio
 */
input.producto.addEventListener( 'input', e => {

    precio.producto = e.target.value;

    output.totalProducto.innerHTML = producto.getPrecio( precio.dolar, precio.producto );
    precio.actualizar( producto.getPrecio() );

} );

 /**
  * Actualiza el valor del dolar con el introducido manualmente
  * Actualiza el precio del producto cada vez que cambia el valor del dolar
  */
input.dolar.addEventListener( 'input', e => {

    precio.dolar = e.target.value;

    output.totalProducto.innerHTML = producto.getPrecio( precio.dolar, precio.producto );
    precio.actualizar( producto.getPrecio() );

} );

/*************************************************** */

let bolivares = new Bolivares();

/**
 * Agrega el valor del producto a la suma total
 */
button.agregar.addEventListener( 'click', () => {

    console.log(precio.totalProducto);

    bolivares.agregarNuevoCampo( precio.totalProducto );

    output.totalBolivares.innerHTML = bolivares.getTotal();

} );

}