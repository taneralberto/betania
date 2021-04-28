import { input, output, numberFormat } from './properties';

let product = {

    price : {
        dollar : input.product.value,

        bolivar : parseFloat( output.productPrice.innerHTML ),

        update : function( dollarValue ) {
            let price = ( dollarValue * this.dollar ).toFixed( 2 );
            this.bolivar = parseFloat( price );

            return this.bolivar;
        },

        display : function( element ) {
            element.innerHTML = numberFormat( this.bolivar );
        },

        reset : function() {
            this.dollar = 0;
            this.bolivar = 0;
            output.productPrice.innerHTML = 0;
            input.product.value = '';
        },
    },
}

export default product;