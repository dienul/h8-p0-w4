function ubahHuruf(kata) {
    var kataBaru = ""
    var kamus = "abcdefghijklmnopqrstuvwxyz"
    for (i = 0; i < kata.length; i++) {
        for (j = 0; j < kamus.length; j++) {
            if (kamus[j] === kata[i]) {
                var hurufSetelah = kamus[j + 1]
                kataBaru = kataBaru + hurufSetelah
            }
        }
    }
    return kataBaru

}

console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

