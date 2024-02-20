const discount_underage = 0.2
const discount_over = 0.4
const price_km = 0.21

//Chiedo di inserire età e km con un promt

const distance = prompt("Inserisci quanti KM intendi percorrere?")
const age = prompt("Inserisci la tua età?")

//Calcola il costo, in base alla età applico lo sconto
//Arrotondo e lo stampo in console
let price = (distance * price_km)

if (age < 18){
    let price = (price - price * discount_underage).toFixed(2);
    alert("In totale sono "+price+"€");

}else if (age >= 65) {
    let price = (price - price * discount_over).toFixed(2);
    alert("In totale sono "+price+"€");

}else{
    let price = price.toFixed(2);
    alert("In totale sono "+price+"€");

}
