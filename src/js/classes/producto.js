import { precio } from '../functions/properties';

export default class Producto {

    getPrecio( dolar, producto ) {
        let precio = ( dolar * producto ).toFixed( 2 );
        return parseFloat( precio );
    }

    displayPrecio( element ) {
        element.innerHTML = this.getPrecio( precio.dolar, precio.producto );
    }

}