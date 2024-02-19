//Chiedo di inserire età e km con un promt

const distance = prompt("Inserisci quanti KM intendi percorrere?")
const age = prompt("Inserisci la tua età?")

//Calcola il costo, in base alla età applico lo sconto
//Arrotondo e lo stampo in console
let price = (distance * 0.21)

if (age < 18){
    let discount = (price * 20 / 100);
    let price_discounted = (price - discount);
    let price_arounded = price_discounted.toFixed(2);
    alert("In totale sono "+price_arounded+"€")
}else if (age > 65) {
    let discount = (price * 40 / 100);
    let price_discounted = (price - discount);
    let price_arounded = price_discounted.toFixed(2);
    alert("In totale sono "+price_arounded+"€")
}else{
    let price_arounded = price.toFixed(2);
    alert("In totale sono "+price_arounded+"€")
}

