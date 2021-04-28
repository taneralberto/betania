import product from './objects/product';
import dollar from './objects/dollar';
import { button, input, output, numberFormat } from './objects/properties';
import Bolivars from './classes/bolivars';
import Dollars from './classes/dollars';

export default function init() {

    function updateProductPrice() {
        product.price.update( dollar.value );
        product.price.display( output.productPrice );
    }

    updateProductPrice();

    /**
     * Actualiza el valor del dolar con el de DolarToday y modifica el precio del producto
     */
    button.sync.addEventListener( 'click', async () => {

        dollar.value = await dollar.updateWithDolarToday();

        input.dollar.value = dollar.value;

        updateProductPrice();
    } );

    /**
     * Actualiza el precio del producto cada vez que cambia el precio
     */
    input.product.addEventListener( 'input', e => {

        product.price.dollar = e.target.value;

        updateProductPrice();

    } );

    /**
     * Actualiza el valor del dolar con el introducido manualmente
     * Actualiza el precio del producto cada vez que cambia el valor del dolar
     */
    input.dollar.addEventListener( 'input', e => {

        dollar.value = e.target.value;

        updateProductPrice();

    } );

    /********BOLIVARES****************DOLARES******** */

    let bolivars = new Bolivars();
    let dollars = new Dollars();

    /**
     * Agrega el valor del producto a la suma total
     */
    button.add.addEventListener( 'click', () => {

        bolivars.addNewField( product.price.bolivar );
        output.bolivarsTotal.innerHTML = numberFormat( bolivars.getTotal() );

        dollars.addNewField( product.price.dollar );
        output.dollarsTotal.innerHTML = numberFormat( dollars.getTotal() );

    } );

}