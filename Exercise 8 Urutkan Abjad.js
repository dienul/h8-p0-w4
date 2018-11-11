function urutkanAbjad(str) {
    var strBaru = ""
    var kamus = "abcdefghijklmnopqrstuvwxyz"
    for (i = 0; i <= kamus.length - 1; i++) {
        for (j = 0; j <= str.length - 1; j++) {
            if (kamus[i] === str[j]) {
                strBaru = strBaru + str[j]
            }
        }
    }
    return strBaru
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'