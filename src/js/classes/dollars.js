import {output, numberFormat} from '../objects/properties';

export default class Dollars {

    constructor() {
        this.prices = [];
        this.id = 0;
    }

    getPrices() {
        return this.prices;
    }

    addNewField( price ) {

        /**
         * Define an identifier to associate with the prices array
         */
        let identifier = `field${this.id++}`;

        this.prices.push( { identifier, price } );

        /**
         * Format the price adding dots or commas
         */
        let formatPrice = new Intl.NumberFormat().format( price );

        /**
         * Get bolivar's container
         */
        let $container = document.querySelector( '.dollars__values' );

        /**
         * Create a <div> named 'field' and adds its class name to it
         */
        let $field = document.createElement( 'div' );
        $field.classList.add( 'dollars__field' );
        $field.setAttribute( 'id', identifier );

        /**
         * Create a <label> and adds its class name to it
         */
        let $label = document.createElement( 'label' );
        $label.classList.add( 'dollars__value' );

        /**
         * Create a <button> and adds its class name to it
         */
        let $buttonToDelete = this.createDeleteButton();

        /**
         * Inserts the formatted price in the label
         */
        $label.innerHTML = formatPrice;
        $field.appendChild( $label );
        $field.appendChild( $buttonToDelete );
        $container.appendChild( $field );

        this.displayTotal();
    }

    getTotal() {

        let total = 0;

        this.prices.map( price => {
            total += parseFloat( price.price );
        } );

        return total.toFixed( 2 );
    }

    displayTotal() {

        output.dollarsTotal.innerHTML = numberFormat( this.getTotal() );
    }

    reset() {
        this.prices = [];
        let $container = document.querySelector( '.dollars__values' );
        $container.innerHTML = '';
    }

    createDeleteButton() {

        let $buttonToDelete = document.createElement( 'button' );
        $buttonToDelete.classList.add( 'dollars__delete-button' );
        $buttonToDelete.innerHTML = 'Eliminar';

        $buttonToDelete.addEventListener( 'click', e => {

            e.target.parentNode.parentNode.removeChild( e.target.parentNode );

            let fieldIdentifier = e.target.parentNode.id;

            for( let i = 0; i < this.prices.length; i++) {

                if ( this.prices[i].identifier === fieldIdentifier ) {
                    this.prices.splice( i, 1 );
                }
            }

            this.displayTotal();
        } );

        return $buttonToDelete;
    }

}