function shoppingTime(memberId, money) {

    var barang = []
    barang.push(['Sepatu Stacattu', 1500000])
    barang.push(['Baju Zoro', 500000])
    barang.push(['Baju H&N', 250000])
    barang.push(['Sweater Uniklooh', 175000])
    barang.push(['Casing Handphone', 50000])

    var info = {}
    if (memberId === '' || memberId === undefined) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } else if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup'
    }
    info['memberId'] = memberId
    info['money'] = money
    var arrPurchase = []
    for (i = 0; i <= barang.length - 1; i++) {
        var change = money
        if (money >= barang[i][1]) {
            arrPurchase.push(barang[i][0])
            money = change - barang[i][1]
        }
        info['listPurchased'] = arrPurchase
        info['changeMoney'] = money
    }
    return info
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja