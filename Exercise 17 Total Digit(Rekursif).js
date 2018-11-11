function totalDigitRekursif(angka) {

  var jumlah = 0;
  if (angka.toString().length==0) {
    return Number(angka);
  } else {
    jumlah=parseInt(angka.toString()[0])
    //console.log(jumlah + '+' + angka.toString().slice(1));
    return jumlah+totalDigitRekursif(angka.toString().slice(1))
  }
  
}
//pakai slice

console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5

/**
 * 512
  return 5 + rec(12)
    return 1 + rec(2)
      return 2
 */
