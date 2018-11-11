function fpb(angka1, angka2) {
    var arrayGabung = []

    for (var i = 0; i <= angka1; i++) {
        if (angka1 % i === 0) {
            arrayGabung.push(i)
        }
    }
    for (var j = 0; j <= angka2; j++) {
        if (angka2 % j === 0) {
            arrayGabung.push(j)
        }
    }
    var arrayGabungSort = arrayGabung.sort(function (a, b) { return a - b })
    var fpb = arrayGabungSort[0]
    for (i = 2; i <= arrayGabungSort.length; i++) {
        var banding1 = arrayGabungSort[i]
        var banding2 = arrayGabungSort[i + 1]
        if (banding1 === banding2) {
            var sama = banding2
            if (sama > fpb) {
                fpb = sama
            }
        }
    }
    return fpb

}

console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1