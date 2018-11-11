function hitungPerulangan(kata) {
  var obj = {};
  var jumlah = 0;
  for (i = 0; i <= kata.length - 1; i++) {
    if (obj[kata[i]] == undefined) {
      obj[kata[i]] = 1;
    } else {
      obj[kata[i]] = obj[kata[i]] + 1;
    }
  }

  for (i = 0; i <= kata.length - 1; i++) {
    if (obj[kata[i]] > 1) {
      jumlah = jumlah + 1;
    }
  }
  // console.log(obj)
  var keys = Object.keys(obj);
  // console.log(keys)
  var counter = 0;
  for (var i = 0; i <= keys.length - 1; i++) {
    if (obj[keys[i]] > 1) {
      counter += 1;
    }
  }

  return counter;
}

// console.log(hitungPerulangan("passionate")); // 4
//  console.log(hitungPerulangan('Today')) // 1
//  console.log(hitungPerulangan('developer')) // 3

function hitungHuruf(kata) {
  var kataSplit = kata.split(" ");
  var counter = [];
  // console.log(kataSplit)
  for (k = 0; k <= kataSplit.length - 1; k++) {
    counter[k] = hitungPerulangan(kataSplit[k]);
    // console.log(counter[k]);
  }
  var max = 0;
  var kata = "";
  for (m = 0; m <= counter.length - 1; m++) {
    if (max < counter[m]) {
      max = counter[m];
      kata = kataSplit[m];
    }
  }

  return kata;
}

// TEST CASES
console.log(hitungHuruf("Today, is the greatest day ever")); // greatest
console.log(hitungHuruf("I am a passionate developer")); // passionate
console.log(hitungHuruf("aku adalah anak gembala")); // adalah
console.log(hitungHuruf("rajin pangkal kaya")); // pangkal
console.log(hitungHuruf("mengayuh perahu di danau")); // danau
/**
 * [1,1,1,4,3]
 *
 * step 1
 * var split = ['today,', 'is', 'the', 'greatest', 'day', 'ever']
 *
 * step2
 * loop split ->i
 *  loop split[i]
 *      loop split[k]
 */
