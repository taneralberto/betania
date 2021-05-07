import product from './objects/product';
import dollar from './objects/dollar';
import { button, input, output, numberFormat } from './objects/properties';
import Total from './classes/total';
//import Dollars from './classes/dollars';
import './objects/formatValue';

if( "serviceWorker" in navigator ) {

    navigator.serviceWorker.register( 'serviceWorker.js' ).then( registration => {
        console.log( 'SW Registered!' );
        console.log( registration );
    } ) .catch( error => {
        console.log( 'SW Registration Failed!' );
        console.log( error );
    } );

}

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

    let total = new Total();
    //let dollars = new Dollars();

    /**
     * Agrega el valor del producto a la suma total
     */
    button.add.addEventListener( 'click', () => {

        if ( product.price.bolivar > 0 && product.price.dollar > 0 ) {

            /**
             * Adds new field into bolivars container and display the total
             */
            total.addNewBolivarField( product.price.bolivar );
            //bolivars.displayTotal();

            total.addNewDollarField( product.price.dollar );
            //output.dollarsTotal.innerHTML = numberFormat( dollars.getTotal() );
        }

    } );

    /**
     * Formatea todo
     */
    button.new.addEventListener( 'click', () => {
        product.price.reset();
        //dollar.reset();
        total.resetBolivar();
        total.resetDollar();
        output.bolivarsTotal.innerHTML = 0.00;
        output.dollarsTotal.innerHTML = 0.00;
    } );

}