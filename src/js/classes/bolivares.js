export default class Bolivares {

    constructor() {
        this.precios = [];
    }

    getPrecios() {
        return this.precios;
    }

    agregarNuevoCampo( precio ) {
        this.precios.push( precio );

        let $container = document.querySelector( '.suma-bolivares__valores' );
        let $label = document.createElement( 'label' );
        $label.classList.add( 'suma-bolivares__valor' );
        $label.innerHTML = precio;
        $container.appendChild( $label );
    }

    getTotal() {

        let total = 0;

        this.precios.map( precio => {
            total += parseFloat( precio );
        } );

        return total.toFixed( 2 );
    }

}