function changeMe(arr) {

    var year = 2018
    var no = 0

    for (i = 0; i <= arr.length - 1; i++) {
        console.log(no = i + 1 + "." + arr[i][0] + " " + arr[i][1] + ": ")
        var object = {}
        object['firstName'] = arr[i][0];
        object['lastName'] = arr[i][1];
        object['gender'] = arr[i][2];
        if (arr[i][3] === undefined || arr[i][3] > year) {
            object['age'] = 'invalid birth year'
        } else {
            object['age'] = year - arr[i][3]
        }
        console.log(object)
    }


}

// TEST CASES
console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
console.log(changeMe([])); // ""