import { input } from '../objects/properties';

let dollar = {

    value : input.dollar.value,

    updateWithDolarToday : async function() {

        let value = 0.00;
        let response = await fetch( 'https://s3.amazonaws.com/dolartoday/data.json' );
        let data = await response.json();
        value = data.USD.promedio;

        return value;
    }
}

export default dollar;