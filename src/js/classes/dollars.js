export default class Dollars {

    constructor() {
        this.prices = [];
    }

    getPrices() {
        return this.prices;
    }

    addNewField( price ) {

        this.prices.push( price );

        let $container = document.querySelector( '.dollars__values' );
        let $field = document.createElement( 'div' );
        $field.classList.add( 'dollars__field' );
        let $label = document.createElement( 'label' );
        $label.classList.add( 'dollars__value' );
        $label.innerHTML = price;
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

}