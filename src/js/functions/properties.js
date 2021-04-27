let button = {

    sincro : document.querySelector( '.calculo__sincronizar-valor-dolar' ),

    agregar : document.querySelector( '.boton-sumar' ),

    nuevo : document.querySelector( '.boton-nueva' ),

}


let input = {

    dolar : document.querySelector( '.calculo__valor-dolar' ),

    producto : document.querySelector( '.calculo__precio-producto' ),
}

let output = {

    totalProducto : document.querySelector( '.calculo__total' ),

    totalBolivares : document.querySelector( '.suma-bolivares__total' ),

    totalDolares : document.querySelector( '.suma-dolares__total' ),
}

let dolar = {

    valor : input.dolar.value,

    actualizar : async function getValorDolar() {

        let dolar = 0.00;
        let response = await fetch( 'https://s3.amazonaws.com/dolartoday/data.json' );
        let data = await response.json();
        dolar = data.USD.promedio;

        return dolar;
    }
}

let precio = {

    dolar : input.dolar.value,

    producto : input.producto.value,

    totalProducto : parseFloat( output.totalProducto.innerHTML ),

    actualizar : function( precio ) {
        this.totalProducto = precio;
    }
}

export { button, input, output, dolar, precio };