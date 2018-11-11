function cariMedian(arr) {
    var median = 0
    var panjangArr = arr.length
    if (arr.length % 2 !== 0) {
        median = arr[Math.floor(panjangArr / 2)]
    } else if (arr.length % 2 === 0) {
        var nilaiAtas = arr[panjangArr / 2]
        var nilaiBawah = arr[(panjangArr / 2) - 1]
        median = (nilaiBawah + nilaiAtas) / 2
    }
    return median

}

console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5