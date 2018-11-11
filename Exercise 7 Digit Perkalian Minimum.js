function digitPerkalianMinimum(angka) {
    var faktor = []
    var str = ""
    for (i = 0; i <= angka; i++) {
        for (j = 0; j <= angka; j++) {
            if (i * j === angka) {
                str = i.toString() + j.toString()
                faktor.push(str)
            }
        }
    }
    var digit = faktor[0].length
    for (i = 0; i <= faktor.length - 1; i++) {
        if (digit > faktor[i].length) {
            digit = faktor[i].length
        }
    }
    return digit
}

console.log(digitPerkalianMinimum(24)); //2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2