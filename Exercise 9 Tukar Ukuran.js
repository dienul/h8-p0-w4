function tukarBesarKecil(kalimat) {
    var kalimatBaru = ""
    for (i = 0; i <= kalimat.length - 1; i++) {
        if (kalimat[i] === kalimat[i].toUpperCase()) {
            kalimatBaru = kalimatBaru + kalimat[i].toLowerCase()
        } else if (kalimat[i] === kalimat[i].toLowerCase()) {
            kalimatBaru = kalimatBaru + kalimat[i].toUpperCase()
        }
    }
    return kalimatBaru
}

console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"