var km = prompt("Distance to travel in km");
var age = prompt("Your Age");
var price = (km * 0.21);
console.log(km);
console.log(age);
console.log(price);

if (age < 18) {
    var price20 = ((price - (price * 20 / 100)).toFixed(2));
    console.log(price20);
    document.getElementById('price').innerHTML= price20 ;
} else {
    if (age < 65) {
        console.log(price);
        document.getElementById('price').innerHTML= price ;
    } else {
        var price40 = ((price - (price * 40 / 100)).toFixed(2));
        console.log(price40);
        document.getElementById('price').innerHTML= price40 ;
    }
}

