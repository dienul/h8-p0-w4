function countProfit(shoppers) {
    let listBarang = [['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
    ];

    var objStacattu = {}
    objStacattu['product'] = 'Sepatu Stacattu';
    objStacattu['shoppers'] = [];
    objStacattu['leftOver'] = listBarang[0][2];
    objStacattu['totalProfit'] = 0;
    var objZoro = {}
    objZoro['product'] = 'Baju Zoro';
    objZoro['shoppers'] = [];
    objZoro['leftOver'] = listBarang[1][2];
    objZoro['totalProfit'] = 0;
    var objUniklooh = {}
    objUniklooh['product'] = 'Sweater Uniklooh';
    objUniklooh['shoppers'] = [];
    objUniklooh['leftOver'] = listBarang[2][2];
    objUniklooh['totalProfit'] = 0;

    var info = []
    info.push(objStacattu, objZoro, objUniklooh)

    for (i = 0; i < info.length; i++) {
        var nama = []
        var untung = 0
        for (j = 0; j < shoppers.length; j++) {
            if (shoppers[j].product === info[i].product && shoppers[j].amount <= info[i].leftOver) {
                nama.push(shoppers[j].name)
                info[i].shoppers = nama
                info[i].leftOver = info[i].leftOver - shoppers[j].amount
                for (k = 0; k < listBarang.length; k++) {
                    if (shoppers[j].product === listBarang[k][0]) {
                        untung = untung + (shoppers[j].amount * listBarang[k][1])
                        info[i].totalProfit = untung

                    }
                }
            }
        }
    }
    return info
}

// TEST CASES
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 }, { name: 'Devi', product: 'Baju Zoro', amount: 1 }, { name: 'Lisa', product: 'Baju Zoro', amount: 1 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
//   console.log(countProfit([])); //[]