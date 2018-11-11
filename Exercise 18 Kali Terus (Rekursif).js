function kaliTerusRekursif(angka) {
  var angkArr = angka.toString();
  if (angka.toString().length === 1) {
    return Number(angka);
  } else {
    var kali = 1;
    for (var i = 0; i <= angkArr.length - 1; i++) {
      kali = kali * parseInt(angkArr[i]);
    }
    return kaliTerusRekursif(kali);
  }
}

console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
