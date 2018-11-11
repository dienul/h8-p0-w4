function angkaPrima(angka) {
    var arrFaktor = []
    for (var i = 1; i <= angka; i++) {
        if (angka % i == 0) {
            arrFaktor.push(i)
        }
    }
    if (arrFaktor.length > 2 || arrFaktor.length<2) {
        var prima = false
    } else {
        prima = true
    }
    return prima
}

console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false


