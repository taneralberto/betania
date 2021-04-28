export default class Bolivars {

    constructor() {
        this.prices = [];
    }

    getPrices() {
        return this.prices;
    }

    addNewField( price ) {

        this.prices.push( price );
        let formatPrice = new Intl.NumberFormat().format( price );

        let $container = document.querySelector( '.bolivars__values' );
        let $field = document.createElement( 'div' );
        $field.classList.add( 'bolivars__field' );
        let $label = document.createElement( 'label' );
        $label.classList.add( 'bolivars__value' );
        $label.innerHTML = formatPrice;
        $field.appendChild( $label );
        $container.appendChild( $field );
    }

    getTotal() {

        let total = 0;

        this.prices.map( price => {
            total += parseFloat( price );
        } );

        return total.toFixed( 2 );
    }

    reset() {
        this.prices = [];
        let $container = document.querySelector( '.bolivars__values' );
        $container.innerHTML = '';
    }

}