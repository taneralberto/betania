let button = {

    sync : document.querySelector( '.calc__sync-dollar-value' ),

    add : document.querySelector( '.add-button' ),

    new : document.querySelector( '.new-button' ),

}

let input = {

    dollar : document.querySelector( '.calc__dollar-value' ),

    product : document.querySelector( '.calc__dollar-price' ),
}

let output = {

    productPrice : document.querySelector( '.calc__bolivar-price' ),

    bolivarsTotal : document.querySelector( '.bolivars__total' ),

    dollarsTotal : document.querySelector( '.dollars__total' ),
}

let numberFormat = new Intl.NumberFormat().format;

export { button, input, output, numberFormat };