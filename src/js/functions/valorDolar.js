async function getValorDolar() {

    let dolar = 0.00;
    let response = await fetch( 'https://s3.amazonaws.com/dolartoday/data.json' );
    let data = await response.json();
    dolar = data.USD.promedio;

    return dolar;
}

export default getValorDolar;