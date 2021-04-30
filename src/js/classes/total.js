import {output, numberFormat} from '../objects/properties';

export default class Total {

    constructor() {
        this.bolivarPrices = [];
        this.dollarPrices = [];
        this.idBolivar = 0;
        this.idDollar = 0;
    }

    getBolivarPrices() {
        return this.bolivarPrices;
    }

    addNewBolivarField( bolivar ) {

        /**
         * Define an identifier to associate with the prices array
         */
        let identifier = `field${this.idBolivar++}`;

        this.bolivarPrices.push( { identifier, bolivar } );

        /**
         * Format the price adding dots or commas
         */
        let formatPrice = new Intl.NumberFormat().format( bolivar );

        /**
         * Get bolivar's container
         */
        let $container = document.querySelector( '.bolivars__values' );

        /**
         * Create a <div> named 'field' and adds its class name to it
         */
        let $field = document.createElement( 'div' );
        $field.classList.add( 'bolivars__field' );
        $field.setAttribute( 'id', identifier );

        /**
         * Create a <label> and adds its class name to it
         */
        let $label = document.createElement( 'label' );
        $label.classList.add( 'bolivars__value' );

        /**
         * Create a <button> and adds its class name to it
         */
        let $buttonToDelete = this.createDeleteBolivarButton();

        /**
         * Inserts the formatted price in the label
         */
        $label.innerHTML = formatPrice;
        $field.appendChild( $label );
        $field.appendChild( $buttonToDelete );
        $container.appendChild( $field );

        this.displayBolivarTotal();
    }

    getBolivarTotal() {

        let total = 0;

        this.bolivarPrices.map( price => {
            total += parseFloat( price.bolivar );
        } );

        return total.toFixed( 2 );
    }

    displayBolivarTotal() {

        output.bolivarsTotal.innerHTML = numberFormat( this.getBolivarTotal() );
    }

    resetBolivar() {

        this.bolivarPrices = [];
        let $container = document.querySelector( '.bolivars__values' );
        $container.innerHTML = '';
    }

    createDeleteBolivarButton() {

        let $buttonToDelete = document.createElement( 'button' );
        $buttonToDelete.classList.add( 'bolivars__delete-button' );
        $buttonToDelete.innerHTML = 'X';

        $buttonToDelete.addEventListener( 'click', e => {

            e.target.parentNode.parentNode.removeChild( e.target.parentNode );

            let fieldIdentifier = e.target.parentNode.id;

            const contentDollars = [...document.querySelector( '.dollars__values' ).children]

            for( let i = 0; i < contentDollars.length; i++ ) {

                if ( contentDollars[i].id === fieldIdentifier ) {
                    contentDollars[i].parentNode.removeChild( contentDollars[i] );
                    this.dollarPrices.splice( i, 1 );
                }

            }


            for( let i = 0; i < this.bolivarPrices.length; i++) {

                if ( this.bolivarPrices[i].identifier === fieldIdentifier ) {
                    this.bolivarPrices.splice( i, 1 );
                }
            }

            this.displayBolivarTotal();
            this.displayDollarTotal();
        } );

        return $buttonToDelete;
    }

    /**************************************************************** */
    /**************************************************************** */

    getDollarPrices() {
        return this.dollarPrices;
    }

    addNewDollarField( dollar ) {

        /**
         * Define an identifier to associate with the prices array
         */
        let identifier = `field${this.idDollar++}`;

        this.dollarPrices.push( { identifier, dollar } );

        /**
         * Format the price adding dots or commas
         */
        let formatPrice = new Intl.NumberFormat().format( dollar );

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
        let $buttonToDelete = this.createDeleteDollarButton();

        /**
         * Inserts the formatted price in the label
         */
        $label.innerHTML = formatPrice;
        $field.appendChild( $label );
        $field.appendChild( $buttonToDelete );
        $container.appendChild( $field );

        this.displayDollarTotal();
    }

    getDollarTotal() {

        let total = 0;

        this.dollarPrices.map( price => {
            total += parseFloat( price.dollar );
        } );

        return total.toFixed( 2 );
    }

    displayDollarTotal() {

        output.dollarsTotal.innerHTML = numberFormat( this.getDollarTotal() );
    }

    resetDollar() {
        this.dollarPrices = [];
        let $container = document.querySelector( '.dollars__values' );
        $container.innerHTML = '';
    }

    createDeleteDollarButton() {

        let $buttonToDelete = document.createElement( 'button' );
        $buttonToDelete.classList.add( 'dollars__delete-button' );
        $buttonToDelete.innerHTML = 'X';

        $buttonToDelete.addEventListener( 'click', e => {

            e.target.parentNode.parentNode.removeChild( e.target.parentNode );

            let fieldIdentifier = e.target.parentNode.id;

            const contentBolivars = [...document.querySelector( '.bolivars__values' ).children]

            for( let i = 0; i < contentBolivars.length; i++ ) {

                if ( contentBolivars[i].id === fieldIdentifier ) {
                    contentBolivars[i].parentNode.removeChild( contentBolivars[i] );
                    this.bolivarPrices.splice( i, 1 );
                }

            }

            for( let i = 0; i < this.dollarPrices.length; i++) {

                if ( this.dollarPrices[i].identifier === fieldIdentifier ) {
                    this.dollarPrices.splice( i, 1 );
                }
            }

            this.displayDollarTotal();
            this.displayBolivarTotal();
        } );

        return $buttonToDelete;
    }

}